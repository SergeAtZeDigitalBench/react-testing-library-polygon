/**
 * @param {number} timeout
 * @param {string | undefined} errorMessage
 * @returns {Promise<null>}
 */
export const wait = (timeout, errorMessage) =>
  new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (errorMessage) {
            reject(new Error(errorMessage))
        }else {
            resolve(null)
        }
    }, timeout)
  })