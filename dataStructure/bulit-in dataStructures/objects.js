// objects are key-value pairs data
// objects are not iterable cannot use for loops
// to access objects you can use . notation , bracket [] notation , Object.key(),Object.values(),Object.entries()
let obj = {
    fName:'Mostafa',
    lName:'mohamed',
    sayHi:()=>{
        console.log(obj.fName + obj.lName)
    }
}
for(let [key,value] in Object.entries(obj)){
    console.log(`${key} + ${value}`)
}
// to add a property you can use . notation
obj.job = 'frontend Developer'
obj.sayHi()
console.log(obj)