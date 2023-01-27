function isPrimeNum(num) {
  if (num < 2) {
    return "I am not prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    console.log(i);
    if (num % i === 0) {
      return "I am not prime";
    }
  }
  return "I am a prime number";
}
console.log(isPrimeNum(53));

// The DOM
const input = document.querySelector("input");
const btn = document.querySelector(".check-btn");
const result = document.querySelector(".result-value");

console.log(input, btn, result);

btn.onclick = () => {
  isPrime(input.value);
};

const isPrime = (num) => {
  if (num < 2) {
    return (result.textContent = "not prime number");
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return (result.textContent = "not prime number");
    }
  }
  return (result.textContent = "prime number");
};
