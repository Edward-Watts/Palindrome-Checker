function palindrome(str){
    var regex = /[^A-Za-z0-9]/g;
    var newStr = str.toLowerCase().replace(regex, '');
    var reverseStr = newStr.split('').reverse().join(''); 
        return reverseStr === newStr;
}
palindrome("hAnnaH");