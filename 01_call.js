/*
 * @Descripttion:
 * @version:
 * @Author: Aipor
 * @Date: 2023-04-28 10:01:44
 * @LastEditors: Aipor
 * @LastEditTime: 2023-04-28 11:18:30
 */
Function.prototype.gytCall = function (thisArg, ...argArry) {
  // 对传入的thisArg的对象进行判断，防止传入数据为非对象类型，默认绑定全局环境
  let global;
  try {
    global = process;
  } catch (err) {
    global = window;
  }
  const thisObj =
    thisArg === undefined || thisArg === null ? global : Object(thisArg);
  const symbolFn = Symbol("fn");
  Object.prototype[symbolFn] = this;
  // thisObj[symbolFn] = this;
  const res = thisObj[symbolFn](...argArry);
  // delete thisObj[symbolFn];
  delete Object.prototype[symbolFn]
  return res;
};

function bar(arg1, arg2) {
  console.log(this, arg1, arg2);
}

const obj = {
  name: "obj",
};
bar.call(obj, "arg1", "arg2");
bar.call(null);
bar.gytCall(obj, "arg1", "arg2");
bar.gytCall(null);
