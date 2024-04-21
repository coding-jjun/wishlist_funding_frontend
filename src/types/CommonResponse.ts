export interface CommonResponse<T> {
  timestamp: string;
  message: string;
  data: T;
}
