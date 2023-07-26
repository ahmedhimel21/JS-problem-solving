function reversedWord(initialWord){
    var word = initialWord.split('');
    var reverse = [];
    for(var i =word.length-1;i>=0;i--){
        var element = word[i];
        reverse.push(element)
    }
    var reverse = reverse.join('');
    return reverse;
}
var myString = 'hello world'; 
var reverseWord = reversedWord(myString);
console.log(reverseWord);
