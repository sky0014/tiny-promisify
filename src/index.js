export default function promisify(func) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const cb = (err, result) => {
        if (err) reject(err);
        else resolve(result);
      };
      func(...args, cb);
    });
  };
}
