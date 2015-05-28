var countUpBy = function(input) {
  var number = input[1];
  var multiplier = input[0];
  var count = 1
  var output = []
  do {
    output.push(count * multiplier);
    count++;
  } while (count * multiplier <= number);
return output;
};

$(document).ready(function() {
  $("form#count-up-form").submit(function(event) {

    var counter = parseInt($("input#counter").val());
    var limit = parseInt($("input#limit").val());

    results = countUpBy([counter, limit]);

    // adds extra comma to output
    // results.forEach(function(result) {
    //   $(".resultreplace").append(result, ", ");
    // });

    for (index = 1; index * counter <= limit; index++) {

      if (index !== 1) {
        $(".resultreplace").append(", ");
      }

      $(".resultreplace").append(results[index-1]);
     }

    $("#resultdiv").show();
    event.preventDefault();
  });
});
