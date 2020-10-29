$(document).ready(function () {
  $("#wordPuzzle").submit(function (event) {
    event.preventDefault();
    let userSentence = $("#sentence").val();
    let splitSentence = userSentence.split(" ");
    let alternasentence = [];
    for (let index = 0; index < splitSentence.length; index++) {
      let word = splitSentence[index].split("");
      let alternaword = [];
      for (let index2 = 0; index2 < word.length; index2++) {
        if (word[index2] === "A" || word[index2] === "E" || word[index2] === "I" || word[index2] === "O" || word[index2] === "U" || word[index2] === "a" || word[index2] === "e" || word[index2] === "i" || word[index2] === "o" || word[index2] === "u") {
          alternaword.push("_");
        } else {
          alternaword.push(word[index2]);
          }
        }
      alternasentence.push(alternaword.join(''));
    }
    $("#alternasentence").text(`Your new phrase is: ${alternasentence.join(' ')}`);
  });
});