const arg = process.argv[2];
const times = parseInt(arg);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += "C is fun\n";
  }
  console.log(result.trim());
}
