export type codeError = 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503 | 504

export type Getter<T> =
  | { data: T; statusCode: 200 }
  | { statusCode: codeError; error: string }
