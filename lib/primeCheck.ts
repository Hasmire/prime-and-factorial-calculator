"use client";

/**
 * primeCheck is a utility function that checks if a number is prime.
 * It iterates from 2 to the input number, checking for divisibility.
 * Returns a string indicating whether the input number is prime or not.
 */
export function primeCheck(num: number) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `The number ${num} is not a prime number`;
    }
  }

  if (num > 1) {
    return `The number ${num} is a prime number`;
  } else {
    return `The number ${num} is not a prime number`;
  }
}
