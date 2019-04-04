/**
 *
 * @param {*} result
 * @param {*} code
 * 100 正常
 */
const formatResult = (result, code = 100) => {
  return {
    code,
    message: "success",
    result
  };
};

/**
 *
 * @param {*} result
 * @param {code}
 */
const errorResult = (result, code = 0) => {
  return {
    code,
    message: "failed",
    result
  };
};

export { formatResult, errorResult };
