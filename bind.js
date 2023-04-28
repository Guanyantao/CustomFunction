/*
 * @Descripttion:
 * @version:
 * @Author: Aipor
 * @Date: 2023-04-28 10:01:44
 * @LastEditors: Aipor
 * @LastEditTime: 2023-04-28 17:44:31
 */
Function.prototype.gytBind = function (thisArg, ...argArry) {
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
  return function (...argArryElse) {
    thisObj[symbolFn](...argArry, ...argArryElse);
    delete Object.prototype[symbolFn];
  };
};

function bar(arg1, arg2) {
  console.log(this, arg1, arg2);
}

const obj = {
  name: "obj",
};
bar.bind(obj)("arg1", "arg2");
bar.bind(obj, "arg1")("arg2");
bar.bind(null)();
bar.gytBind(obj, "arg1")("arg2");
bar.gytBind(obj)("arg1", "arg2");
bar.gytBind(null)();  
