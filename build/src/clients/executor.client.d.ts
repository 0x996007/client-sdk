import { ValidatorConfig, SelectedGasDenom } from '../types.js';
import { QueryExecutor } from './modules/query.executor.js';
import { PostExecutor } from './modules/post.executor.js';
export declare class ExecutorClient {
    readonly config: ValidatorConfig;
    private _query?;
    private _post?;
    /**
     * @description Connect to a validator client
     *
     * @returns The validator client
     */
    static connect(config: ValidatorConfig): Promise<ExecutorClient>;
    private constructor();
    /**
     * @description Get the query module, used for retrieving on-chain data.
     *
     * @returns The query module
     */
    get query(): QueryExecutor;
    /**
     * @description transaction module, used for sending transactions.
     *
     * @returns The transaction module
     */
    get post(): PostExecutor;
    get selectedGasDenom(): SelectedGasDenom | undefined;
    setSelectedGasDenom(gasDenom: SelectedGasDenom): void;
    /**
     * @description populate account number cache in the Post module for performance.
     */
    populateAccountNumberCache(address: string): Promise<void>;
    private initialize;
}
