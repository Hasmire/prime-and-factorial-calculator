"use client";

export function calculateFactorial(num: number) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return `The factorial of ${num} is ${result}`;
}
