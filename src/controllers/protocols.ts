export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  headers?: any;
  params?: any;
  body?: B;
}
