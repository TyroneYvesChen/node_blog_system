/**
 *
 * @param {*} result
 * @param {code}
 * user
 * 100000 默认
 */
const handlerCustomError = (message, code = 100000) => {
  const error = new Error(message);
  error.status = 400;
  error.code = code;
  return error;
};

export { handlerCustomError };
