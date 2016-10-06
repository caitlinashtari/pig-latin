/* Back-end -------------------*/
var vowels = ['a', 'e', 'i', 'o', 'u'];
var words;
var newWords = [];
var firstLetter;

/* Front-end -------------------*/

$(document).ready(function(){
  $("form#intake").submit(function(event){
    words = $("input#words").val();

    event.preventDefault();

    vowels.forEach(function(vowel) {
      for (i=0; i<=words.length; i+=1) {
        if (words.charAt(0) === vowel) {
          newWords = words + "ay";
        } else if (words.charAt(0) !== (vowel)) {
          firstLetter = words.slice(0,1);
          newWords = words.replace(words.charAt(0),'') + firstLetter + "ay";
          // newWords = firstLetter;
        }
      }
    })
console.log(newWords);

  })
})
