/**
 * An edge-case was hit in the client that should never have been reached.
 */
export class UnexpectedClientError extends Error {
    constructor() {
        super('An unexpected error occurred on the client');
        this.name = 'UnexpectedClientError';
    }
}
/**
 * An error occurred during the broadcasting process.
 */
export class BroadcastErrorObject extends Error {
    result;
    code;
    codespace;
    constructor(message, result) {
        super(message);
        this.name = 'BroadcastError';
        this.result = result;
        this.code = result.code;
        this.codespace = result.codespace;
    }
}
/**
 * User error occurred during a client operation.
 */
export class UserError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserError';
    }
}
/**
 * @description Base class for custom errors.
 */
export class CustomError extends Error {
    constructor(message) {
        super(message);
        // Set a more specific name. This will show up in e.g. console.log.
        this.name = this.constructor.toString();
    }
}
/**
 * @description Base class for a custom error which wraps another error.
 */
export class WrappedError extends CustomError {
    originalError;
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
    }
}
//# sourceMappingURL=errors.js.map