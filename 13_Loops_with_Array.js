let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name1 = "Harry"
let arr = Array.from(name1)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}