/**
 * @param {number} millis
 */

// Old way but a bit faster
// function sleep(millis) {
//   const myPromise = new Promise((resolve) => setTimeout(resolve, millis));
//   return myPromise;
// }

// New way but a bit slower
async function sleep(millis) {
  await new Promise((res) => setTimeout(res, millis));
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
