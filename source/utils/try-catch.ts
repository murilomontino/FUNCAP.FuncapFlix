/* eslint-disable @typescript-eslint/ban-types */
function run<T>(fn: Function, Err?: Error): Promise<T | Error> {
  return new Promise((resolve, reject) => {
    fn()
      .then((result: T) => resolve(result))
      .catch((error: Error) => resolve(Err || error))
  })
}

export default {
  run,
}
