/*
 * @Descripttion:
 * @version:
 * @Author: Aipor
 * @Date: 2023-04-28 17:48:31
 * @LastEditors: Aipor
 * @LastEditTime: 2023-05-04 08:46:40
 */
// map
Array.prototype.gytMap = function (fnArg) {
  if (!Array.isArray(this)) {
    return;
  }
  if (typeof fnArg !== "function") {
    throw fnArg + "is not a function";
  }
  const ARRAY_LIST = [];
  for (let i = 0; i < this.length; i++) {
    ARRAY_LIST.push(fnArg(this[i], i, this));
  }
  return ARRAY_LIST;
};

Array.prototype.gytForEach = function (fnArg) {
  if (!Array.isArray(this)) {
    return;
  }
  if (typeof fnArg !== "function") {
    throw fnArg + "is not a function";
  }
  for (let i = 0; i < this.length; i++) {
    fnArg(this[i], i, this);
  }
};
const LIST = [1, 23, 6, 6, 7];
console.log(
  LIST.map((item, index, list) => {
    console.log(item, index, list);
    return item;
  })
);
console.log(
  LIST.gytMap((item, index, list) => {
    console.log(item, index, list);
    return item;
  })
);

LIST.gytMap(11);
