const dogs = [
    {name: "Fido", age: 5, owner: "Sam", adopted: true},
    {name: "Stella", age: 2, owner: "", adopted: false},
    {name: "Spot", age: 6, owner: "Diane", adopted: true},
    {name: "Clifford", age: 1, owner: "", adopted: false},
    {name: "Bruiser", age: 8, owner: "Sam", adopted: true},
    {name: "Frodo", age: 3, owner: "", adopted: false},
  ]

  //MAP Returns a new array of all the return values from the callback functions


// call map cunction on array clled dogs and sets the to the item in the array and the index is the indx in the array. The map sunction adds an id property to each object in the array. I tniserts it into the new array that is the result of this fucntion being run
// .map function wants two parameters, an object and an index
//   const result = dogs.map((item, index) => {
//     item.id = index;
//     return item
//   })

//   console.log(dogs);
//   console.log(result); // the "result" array that is the dods array with added id parameter


//.filter returns a new array where the new elements are true to the given parameters
// const result = dogs.filter((item, index) => {
//     return item.age < 5
//   })
  
//   console.log(result)


  // some mreturns true if at least one item is true (returns only a true or false)
// const someAdopted = dogs.some((item, index) => {
//     return item.adopted
// })
//   //
// const everyAdopted = dogs.every((item, index) => {
//     return item.adopted
// })

// console.log("Some dogs adopted?:", someAdopted)
// console.log("Every dog adopted?:", everyAdopted)


// const value = dogs.find((item, index) => {
//         return item.owner === "Diane" // finds the first item with an owner named Diane
//     })

//     console.log("Dog Diane Adopted:", value) // returns the value that causes this to be true

//     const index = dogs.findIndex((item, index) => {
//         return item.owner === "Diane"
//     })

//     console.log("Index of the dog:", index)

// const result = dogs.sort( //iterated through array and set each equal to 1 or 2 and compared ot to the next value, 1 or 2 to sort which should be first in the array
//     (currentItem, nextItem)=>{ //sorts 1 in front of 2 to sort dogs by addopted or not
//             const currentValue = currentItem.adopted ? 1 : 2 // 1 id yes, 2 if no
//             const nextValue = nextItem.adopted ? 1 : 2
//             // subtract to see of they should be swapped in the order
//             return currentValue - nextValue
//     }
// )

// console.log(result)

// const result = dogs.reduce( // takes a callback function and a starting value
//     (accumulator, item, index)=>{
//         return item.adopted ? accumulator : accumulator + item.age
//     } ,0)

//     console.log(result) // cmulative age of all not addopted dogs