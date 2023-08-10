module.exports = function check(str, bracketsConfig) {

  let result = '';
  //setup bracketsConfig as strings
  let config = [];
  bracketsConfig.forEach((pair)=>{
    config.push(pair[0] + pair[1])
  });

  //setup max amount of iterations
  let index = 0;
  const maxIndex = str.length

  while (index <= maxIndex) {
    config.forEach((brackets)=>{
  // check if str contains any pair of brackets
   if(str.indexOf(brackets) != -1) {
  
    for (let i=0; i<str.length; i++) {
  // copy to new string (result) all symbols except correct pair
      if (i != str.indexOf(brackets) && (i != (str.indexOf(brackets) + 1))) {
            result += str[i];
      }
    }
    str = result;
    result ='';
   }})
  index++;
  }
// check length of str
  if (str.length !=0) return false
  else return true;
}
