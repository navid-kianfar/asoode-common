export enum OperationResultStatus {
  pending = 0,
  progress = 1,
  failed = 2,
  success = 3,
  notFound = 5,
  unauthorized = 5
}

export class OperationResult<T> {
  data?: T;
  message?: string;
  status: OperationResultStatus = OperationResultStatus.pending;

  static success<T>(data?: T): OperationResult<T> {
    const result = new OperationResult<T>();
    result.data = data;
    result.status = OperationResultStatus.success;
    return result;
  }

  static failed<T>(err?: Error): OperationResult<T> {
    const result = new OperationResult<T>();
    result.message = err?.message;
    result.status = OperationResultStatus.failed;
    return result;
  }
}
