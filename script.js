function firstNonRepeatedChar(str) {
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
const firstNonRepeatedChar = (str) => {
    // 1. Handle the edge case of an empty string
    if (str.length === 0) {
        return null;
    }
const charCounts = {};

    // First pass: Populate the frequency map
    // Time Complexity: O(n), where n is the length of the string
    for (const char of str) {
        // Increment the count for the current character.
        // If the character is not yet in the map, default its count to 0 before incrementing.
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
	for (const char of str) {
        if (charCounts[char] === 1) {
            // Found the first character that only appeared once.
            return char;
        }
    }

    // 4. If the loop completes, it means every character appeared more than once.
    return null;
}