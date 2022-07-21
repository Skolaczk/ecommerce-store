import React, { useEffect, useState, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  deleteUser,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { app } from 'firebase/Firebase';

const initialState = {
  email: '',
  password: '',
  repeatPassword: '',
  consent: '',
};

const reg =
  // eslint-disable-next-line no-control-regex
  /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

const errors = {
  SIGN_IN_ERROR: 'Nie znaleziono takiego konta.',
  SIGN_UP_ERROR: 'Te dane logowania już istnieją.',
  INCORRECT_DATA_ERROR: 'Wprowadzone dane są niepoprawne.',
  EXISTING_EMAIL_ERROR: 'Ten adres e-mail już istnieje.',
  REAUTHENTICATE_ERROR: 'Ta akcja wymaga ponownego uwierzytelnienia.',
};

const successes = {
  SEND_PASSWORD_RESET_EMAIL:
    'E-mail z możliwością zresetowania hasła został wysłany.',
  DELETE_ACCOUNT: 'Konto zostało usunięte.',
  SIGN_UP_SUCCESS:
    'Konto zostało stworzone. Wejdź na podany adres e-mail i go zweryfikuj. Jeżeli nie widzisz wiadomości, sprawdź folder spam.',
  UPDATE_EMAIL: 'Adres E-mail został zmieniony.',
  UPDATE_PASSWORD: 'Hasło zostało zmienione.',
};

const errorCode = 'auth/requires-recent-login';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [inputsValue, setInputsValue] = useState(initialState);
  const { email, password, repeatPassword, consent } = inputsValue;

  const handleInputChange = (e) => {
    setInputsValue({
      ...inputsValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignOut = () => {
    auth.signOut();
    setInputsValue(initialState);
  };

  const handleSendEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setIsEmailSent(true);
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      password.length < 6 ||
      password !== repeatPassword ||
      !reg.test(email) ||
      consent.length === 0
    ) {
      setError(errors.INCORRECT_DATA_ERROR);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setError(null);
          setSuccess(successes.SIGN_UP_SUCCESS);
          handleSendEmailVerification();
        })
        .catch(() => {
          setError(errors.SIGN_UP_ERROR);
        });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password.length < 6 || !reg.test(email)) {
      setError(errors.INCORRECT_DATA_ERROR);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => setError(null))
        .catch((error) => {
          setError(errors.SIGN_IN_ERROR);
          console.log(error);
        });
    }
  };

  const handleDeleteUser = () => {
    deleteUser(currentUser)
      .then(() => {
        setSuccess(successes.DELETE_ACCOUNT);
      })
      .catch((error) => {
        if (error.code === errorCode) {
          setError(errors.REAUTHENTICATE_ERROR);
          handleSignOut();
        }
      });
  };

  const handleUpdateEmail = (email) => {
    if (!reg.test(email)) {
      setError(errors.INCORRECT_DATA_ERROR);
    } else {
      updateEmail(auth.currentUser, email)
        .then(() => {
          handleSendEmailVerification();
          setSuccess(successes.UPDATE_EMAIL);
        })
        .catch((error) => {
          setError(errors.EXISTING_EMAIL_ERROR);
          if (error.code === errorCode) {
            setError(errors.REAUTHENTICATE_ERROR);
            handleSignOut();
          }
        });
    }
  };

  const handleUpdatePassword = (password) => {
    if (password.length < 6) {
      setError(errors.INCORRECT_DATA_ERROR);
    } else {
      updatePassword(currentUser, password)
        .then(() => {
          setSuccess(successes.UPDATE_PASSWORD);
        })
        .catch((error) => {
          if (error.code === errorCode) {
            setError(errors.REAUTHENTICATE_ERROR);
            handleSignOut();
          }
        });
    }
  };

  const handleSendResetPasswordEmail = (email) => {
    if (!reg.test(email)) {
      setError(errors.INCORRECT_DATA_ERROR);
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSuccess(successes.SEND_PASSWORD_RESET_EMAIL);
          setError(null);
        })
        .catch(() => {
          setError(errors.SIGN_IN_ERROR);
        });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('token', user.accessToken);
      } else {
        setCurrentUser(null);
        localStorage.removeItem('token');
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        auth,
        handleInputChange,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        error,
        inputsValue,
        isEmailSent,
        handleSendEmailVerification,
        handleDeleteUser,
        success,
        setSuccess,
        setError,
        handleUpdateEmail,
        handleUpdatePassword,
        handleSendResetPasswordEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw Error('useAuth needs to be used inside authContext');
  }

  return authContext;
};
