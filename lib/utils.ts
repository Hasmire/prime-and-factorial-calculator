import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * The cn function is a utility function that combines class names.
 * It takes an array of class names as input and merges them into a single string.
 * The function uses the clsx library to handle conditional class names and the tailwind-merge library to merge Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
