"use client";

/**
 * The calculateFactorial function is a utility function that calculates the factorial of a given number.
 * It takes a number as an argument and returns a string with the factorial of the number.
 * The function uses a simple loop to calculate the factorial: it iterates from 1 to the given number, multiplying the result by each value.
 */
export function calculateFactorial(num: number) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return `The factorial of ${num} is ${result}`;
}
