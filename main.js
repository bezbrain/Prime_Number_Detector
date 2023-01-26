function isPrime(num) {
  if (num < 2) {
    return "I am not prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    console.log("Testing");
    if (num % i === 0) {
      return "I am not prime";
    }
  }
  return "I am a prime number";
}
// isPrime();

console.log(isPrime(5));
