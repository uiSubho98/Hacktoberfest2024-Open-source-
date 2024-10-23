// Function to count words from a given string
function countWords(input) {
  const words = input.trim().split(/\s+/);
  return input.trim() === "" ? 0 : words.length;
}

// Example usage
const text = "This is a simple word counting program.";
console.log("Word Count:", countWords(text)); // Output: Word Count: 6
