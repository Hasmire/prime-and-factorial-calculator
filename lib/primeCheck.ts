"use client";

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
