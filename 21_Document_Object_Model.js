/* Some of the commands used in dom manipiulation are :-*/

// Childrens
console.log(document.body)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr = Array.from(document.body.childNodes)
console.log(arr)

// Siblings and parents
console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)
console.log(a.firstChild.previousSibling)

// Element only navigation 
const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}
let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)

// Tabke Links 
let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)

// Searching in thr DOM 
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)
document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))

// Matches closest contains
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))