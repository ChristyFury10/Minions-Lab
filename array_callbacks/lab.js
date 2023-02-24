const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  const here = minions.forEach(name =>{
    //console.log(name + "? Here!")
  }
    );

// const otherArray =[];

//     const result = minions.map(name => {
//         if (name != 'kevin') {
//             const str = name;
//             const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//             return str2;
//         }
//         if (name == "kevin"){
//             otherArray.push(name)
//             return name
//         }
//     })
//  console.log(otherArray)
//  console.log(result)

const capitalizedMinions = minions.map((minion) =>{
    if (minion === "kevin"){
    return minion
}
else {
    return minion.charAt(0).toUpperCase() + minion.slice(1);
}
 })

 //console.log(capitalizedMinions);

 const actuallyCapitalizedMinions = capitalizedMinions.filter((minion) => {
    return minion.charAt(0) === minion.charAt(0).toUpperCase();
 })

 //console.log(actuallyCapitalizedMinions);

 const allNamesCap = actuallyCapitalizedMinions.every((minion)=>{
        return minion.charAt(0) === minion.charAt(0).toUpperCase();
 })

 //console.log(allNamesCap);


const uncapitalizedMinions = capitalizedMinions.find((minion)=>{
    return minion.charAt(0) != minion.charAt(0).toUpperCase();
})

//console.log(uncapitalizedMinions);


const findKevin = capitalizedMinions.findIndex((minion)=>{
    return minion.charAt(0) != minion.charAt(0).toUpperCase();
});
//console.log(findKevin)  

capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toUpperCase()+ capitalizedMinions[1].slice(1);

//console.log(capKevin)

//console.log(capitalizedMinions)

const isCapitalized = capitalizedMinions.every((minion)=>{
    return minion.charAt(0) === minion.charAt(0).toUpperCase();
})

//console.log(isCapitalized)

const namesSix = capitalizedMinions.some((minion)=>{
    return minion.length >= 6
})

//console.log(namesSix)

const namesSeven = capitalizedMinions.some((minion)=>{
    return minion.length >= 7
})
//console.log(namesSeven)

const minionNameLengths = capitalizedMinions.map((minion)=>{
    return minion.length
})
const sum = minionNameLengths.reduce((acc, minion)=>{
    return acc + minion
} ,0)

//console.log(minionNameLengths)
//console.log(sum)


const comparedMinions = capitalizedMinions.sort((currentMinion, nextMinion)=>{
    currentValue = currentMinion.length;
    nextValue = nextMinion.length;
    return currentValue - nextValue //returns a number that leaves the object or moves it (positive result vs negative result)
})

console.log(comparedMinions)