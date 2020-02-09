let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];

let withMarmaduke = Array.from(petNames)

withMarmaduke.push('Marmaduke')

console.log(withMarmaduke)

console.log(petNames)

let userChoice = prompt('Select an option from the following \n 1. Remove Vinny \n 2. Remove Marty \n 3. Add Nancy to Beginning \n 4. Add Your Name to End \n 5. See the index of Riley \n 6. See index of Cindy \n 7. See withMarmaduke data \n 8. Remove first entry of petNames \n 9. Add Barney to Beginning \n 10. Add Ted, Fred, Jed, Ned, Ed, Zed to end of petNames and create new array allPets \n 11. Use .join to create a string variable \n 12. Add Agnes to Beginning of petNames')
switch (userChoice) {
case '1':
  let removeVinny = petNames.splice(5, 1);
  console.log(`The action taken was: Remove Vinny \n The remaining data is: ${petNames}`);
  break;
case '2':
  let removeMarty = petNames.splice(3, 1);
  console.log(`The action taken was: Remove Marty \n The remaining data is: ${petNames}`);
  break;
case '3': 
  let addNancy = petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy to Beginning \n The remaining data is: ${petNames}`)
  break;
case '4':
  let yourName = prompt('Enter Your Name')
  let addYourName = petNames.push(yourName)
  console.log(`The action taken was: Add ${yourName} to End \n The remaining data is: ${petNames}`)
  break;
case '5':
  let rileyIndex = petNames.indexOf('Riley')
  console.log(`The index of Riley is: ${rileyIndex} \n The action taken was: See the index of Riley \n The remaining data is: ${petNames}`)
  break;
case '6':
  let cindyIndex = petNames.indexOf('Cindy')
  console.log(`The index of Cindy is: ${cindyIndex} \n The action taken was: See the index of Cindy \n The remaining data is: ${petNames}`)
  break;
case '7':
  console.log(`The action taken was: See withMarmaduke data \n withMarmaduke data is: ${withMarmaduke}`)
  break;
case '8':
  let shiftNames = petNames.shift()
  console.log(`The action taken was: Remove first entry of petNames \n The remaining data is: ${petNames}`)
  break;
case '9':
  let addBarney = petNames.unshift('Barney')
  console.log(`The action taken was: Add Barney to Beginning \n The remaining data is: ${petNames}`)
  break;
case '10':
  let allPets = Array.from(petNames)
  allPets.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed')
  console.log(`The action taken was: Add Ted, Fred, Jed, Ned, Ed, Zed to end of petNames and create new array allPets \n The data is: ${allPets}`)
  break;
case '11':
  let stringPets = petNames.join()
  console.log(`The action taken was: Use .join to create a string variable\n The string is: ${stringPets}`)
  break;
case '12':
  let addAgnes =petNames.unshift('Agnes')
  console.log(`The action taken was: Add Agnes to Beginning of petNames \n The remaining data is: ${petNames}`)
  break;
}




