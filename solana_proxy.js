(function($, $Object, $Function, $Array) {'use strict'; return (function() {
  const handler = {
    get: (target, property, receiver) => {
      const value = target[property];
      if (typeof value === 'function' &&
          (property === 'connect' || property === 'disconnect' ||
           property === 'signAndSendTransaction' ||
           property === 'signMessage' || property === 'request' ||
           property === 'signTransaction' ||
           property === 'signAllTransactions' ||
           property === 'walletStandardInit')) {
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