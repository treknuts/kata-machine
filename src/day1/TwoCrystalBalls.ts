// Problem:
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

// I guess the idea is to iterate by sqrt(N) until we the first ball breaks,
// go back to the last iteration, and do a linear search on that section.
// O(sqrt(n))
export default function two_crystal_balls(breaks: boolean[]): number {
  // Increment "jump" is the sqrt of the length of the array
  const jump = Math.floor(Math.sqrt(breaks.length));

  // loop variable
  // Start at sqrt(n)
  let i = jump;
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  // Go back jump amount so we can walk forward
  i -= jump;

  for (let j = 0; j < jump && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
} 
