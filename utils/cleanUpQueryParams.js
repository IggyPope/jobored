export default function cleanUpQueryParams(queryObject) {
  for (let param in queryObject) {
    if (
      queryObject[param] === '' ||
      queryObject[param] === '0' ||
      queryObject[param] === 0 ||
      queryObject[param] === null ||
      queryObject[param] === undefined
    ) {
      delete queryObject[param];
    }
  }
  return queryObject;
}
