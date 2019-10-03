// business logic
function pigLatin(str) {
  // Convert string to lowercase
  str = str.toLowerCase()
  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    return str + "way";
  }
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var wordInput = $("textarea#word").val();
    var result = pigLatin(wordInput);

    $(".result").text(result);
    $("#result").show();
  });
});
