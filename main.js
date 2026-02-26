function checkPalindrome() {
    let word = document.getElementById("wordInput").value.toLowerCase();
    
    let reverseWord = word.split("").reverse().join("");

    document.getElementById("result").textContent =
        word === reverseWord ? "Palindrome" : "Not Palindrome ";
}