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
}
