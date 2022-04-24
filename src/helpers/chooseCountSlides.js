export const chooseCountSlides = (width) => {
  if (width >= 1024) return 5;
  else if (width >= 768) return 4;
  else if (width >= 425) return 2.5;
  else return 1.75;
};
