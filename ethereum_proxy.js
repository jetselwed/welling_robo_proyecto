(function($, $Object, $Function, $Array) {'use strict'; return (function() {
  const handler = {
    get: (target, property, receiver) => {
      const value = target[property];
      if (typeof value === 'function' &&
          (property === 'request' || property === 'isConnected' ||
           property === 'enable' || property === 'sendAsync' ||
           property === 'send')) {
        return new Proxy(value, {
          apply: (targetFunc, thisArg, args) => {
            return targetFunc.call(target, ...args);
          }
        });
      }
      return value;
    }
  };
  return handler;
})()
;})