// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const sortedArray = input.sort((a,b) => a-b);
  const indexTengah = Math.floor(sortedArray.length / 2);
  if (sortedArray.length % 2 === 1) {
      return sortedArray[indexTengah]; 
  } else {
      return (sortedArray[indexTengah-1] + sortedArray[indexTengah]) / 2;
  }
}

console.log(result(input));
