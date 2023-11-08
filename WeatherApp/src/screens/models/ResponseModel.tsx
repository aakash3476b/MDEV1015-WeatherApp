
interface OperationResult<T> {
    result: boolean;
    data?: T;
    error?: string;
}

export {OperationResult};