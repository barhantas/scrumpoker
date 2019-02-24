const simpleMiddleware = (store) => (next) => (action) => {
  if (false) {
    return { type: 'NOT_PERMITTED' };
  } else {
    return next(action);
  }
};
export default simpleMiddleware;
