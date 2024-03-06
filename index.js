function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    const lowercaseWord = word.toLowerCase();
   
    // Reverse the word and compare it to the original, ignoring spaces
    const reversedWord = lowercaseWord.split('').reverse().join('');
   
    return lowercaseWord === reversedWord;
  }
  
  // Main function to use the helper function
  function main() {
    // Example: Check if "level" is a palindrome
    let wordToCheck = "level";
   
    if (isPalindrome(wordToCheck)) {
      console.log(wordToCheck + " is a palindrome.");
    } else {
      console.log(wordToCheck + " is not a palindrome.");
    }
  }
  
  // Call the main function to execute the code
  main();
  