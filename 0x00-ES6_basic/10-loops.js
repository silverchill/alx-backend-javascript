export default function appendToEachArrayValue(array, appendString) {
  const ray = [];
  for (const value of array) {
    ray.push(`${appendString}${value}`);
  }
  return ray;
}
