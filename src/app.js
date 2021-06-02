//var, let, const
let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
console.log(student);

function save(ogrenci, puan = 10) {

  console.log(ogrenci.name + " "+ puan)
    
}
//save(student, 100);
let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak"]

//console.log(students)

let students2 = [student, {id:2, name:"Halit"}, "Ankara", {city:"İstanbul"} ]

//console.log(students2)

//rest = geriye kalan = üç nokta olarak belirtilmektedir.
//params
//varArgs
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
    
}

//console.log(typeof showProducts)
// showProducts(10, "elma", "armut", "karpuz")

//spread = ayrıştırmak
let points = [1,2,3,4,50,60,4,14]
console.log(...points)

console.log(Math.max(...points))
console.log(..."ABC", ..."D", ..."EFG","H")

//Destructuring = elimizdeki arraylarin değerlerini değişkenlere atama yöntemi 

let populations = [10000, 20000, 30000,[40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
function someFunction([small1], number) {
    console.log(small1)
    
}
someFunction(populations)


