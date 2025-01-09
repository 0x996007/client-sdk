export * from './types.js';
export * as TransformLib from './libs/transform.lib.js';
export * as CommonUtil from './utils/common.util.js';
export * as RocketLib from './libs/rocket.lib.js';
export * as ValidationUtil from './utils/validation.util.js';
export { LocalWallet } from './clients/base/local.wallet.js';
export { SubaccountInfo } from './clients/base/sub-account.info.js';
export { FullClient } from './clients/full.client.js';
export { ReaderClient } from './clients/reader.client.js';
export { ExecutorClient } from './clients/executor.client.js';
export { SocketClient } from './clients/socket.client.js';
/**
 * Some predefined delay values (in milliseconds).
 */
export var Delays;
(function (Delays) {
    Delays[Delays["Short"] = 500] = "Short";
    Delays[Delays["Medium"] = 2000] = "Medium";
    Delays[Delays["Long"] = 5000] = "Long";
})(Delays || (Delays = {}));
/**
 * Returns a Promise<string> that resolves after a given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - A number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(name, delay = Delays.Medium) {
    return new Promise((resolve) => setTimeout(() => resolve(`Hello, ${name}`), delay));
}
// Please see the comment in the .eslintrc.json file about the suppressed rule!
// Below is an example of how to use ESLint errors suppression. You can read more
// at https://eslint.org/docs/latest/user-guide/configuring/rules#disabling-rules
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export async function greeter(name) {
    // The name parameter should be of type string. Any is used only to trigger the rule.
    return await delayedHello(name, Delays.Long);
}
//# sourceMappingURL=main.js.map