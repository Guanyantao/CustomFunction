/*
 * @Descripttion:
 * @version:
 * @Author: Aipor
 * @Date: 2023-05-04 15:17:53
 * @LastEditors: Aipor
 * @LastEditTime: 2023-05-04 15:44:42
 */
function currying(fnArg) {
  if (typeof fnArg !== "function") {
    throw fnArg + "is not a function";
  }
  function curried(...arg) {
    if (arg.length >= fnArg.length) {
      return fnArg.apply(this, arg);
    } else {
      return function curried2(...arg2) {
        return curried.apply(this, [...arg, ...arg2]);
      };
    }
  }
  return curried;
}
// function sum(a, b, c, d) {
//   return a + b + c + d;
// }
// const res = sum(1, 2, 3, 4);
// const sumCurring = currying(sum);
// console.log(sumCurring(1)(2)(3)(4));
// console.log(res);
