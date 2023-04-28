/*
 * @Descripttion:
 * @version:
 * @Author: Aipor
 * @Date: 2023-04-28 10:01:44
 * @LastEditors: Aipor
 * @LastEditTime: 2023-04-28 17:33:41
 */

Function.prototype.gytApply = function (thisArg, argArry) {
  argArry = argArry ? argArry : [];
  // 对传入的thisArg的对象进行判断，防止传入数据为非对象类型，默认绑定全局环境
  let global;
  try {
    global = process;
  } catch (err) {
    global = window;
  }
  const thisObj =
    thisArg === undefined || thisArg === null ? global : Object(thisArg);
  // 使用Symbol，防止原型对象上的函数被修改
  const symbolFn = Symbol("fn");
  Object.prototype[symbolFn] = this;
  // thisObj[symbolFn] = this;
  const res = thisObj[symbolFn](...argArry);
  // delete thisObj[symbolFn];
  delete Object.prototype[symbolFn];
  return res;
};

function bar(arg1, arg2) {
  console.log(this, arg1, arg2);
}

const obj = {
  name: "obj",
};
bar.apply(obj, ["arg1", "arg2"]);
bar.apply(null);
bar.gytApply(obj, ["arg1", "arg2"]);
bar.gytApply(null);
