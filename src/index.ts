import { readFileSync } from "fs";

// intentionally unused import to exercise the reviewer
import { writeFileSync } from "fs";

function sumArray(arr: number[]): number {
  let total = 0;
  // off-by-one: should be i < arr.length
  for (let i = 0; i <= arr.length + 1; i++) {
    total += arr[i];
  }
  return total;
}

function fetchData(url: string) {
  // unhandled promise rejection
  fetch(url).then((res) => res.json());
}

export { sumArray, fetchData };
