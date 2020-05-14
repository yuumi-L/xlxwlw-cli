let applyFn = (action, ...args) => {
  console.log(require(`./${action}`))
  //babel-env
  require(`./${action}`)(...args);
};
module.exports = applyFn