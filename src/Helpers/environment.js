const developmentEnv =
  process.env.REACT_APP_ENV === 'development' ||
  process.env.NODE_ENV === 'development';

export const isDevelopment = run => {
  if (developmentEnv && run) run();
  return developmentEnv;
};

export const recaptchaEnabled =
  process.env.REACT_APP_RECAPTCHA_DISABLED !== 'true';
