/* eslint no-bitwise: 0, func-names: 0, no-console:0 */
if (typeof (window) !== 'undefined' && typeof (document) !== 'undefined') {
  const reduce = (p, c) => p + String.fromCharCode(c >> 1);
  const emptyFun = () => { };
  const fakeConsole = {
    log: emptyFun, warn: emptyFun, error: emptyFun, assert: emptyFun,
  };
  const threeX3 = [200, 220, 194, 216, 194, 210, 200, 202, 218, 122, 206, 234, 196, 202, 200].reverse().reduce(reduce, '');
  if (typeof window.console === 'undefined' || typeof window.console.log === 'undefined') {
    window.console = fakeConsole;
  }
  window.debug = new RegExp(threeX3).test(window.location.href) || process.env.NODE_ENV === 'development';
  console.log(`debug:${window.debug}`);
  if (window.debug) {
    console.log(
      `%cDebugMode! ${decodeURIComponent('%E2%87%91%E2%87%91%E2%87%93%E2%87%93%E2%87%90%E2%87%92%E2%87%90%E2%87%92%E2%92%B7%E2%92%B6')}`,
      'background: #222; color: #bada55; font-size:20px;',
    );
  } else {
    window.console = fakeConsole;
  }
}
