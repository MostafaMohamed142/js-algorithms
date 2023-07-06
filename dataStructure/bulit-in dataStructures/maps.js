// maps are unordered key values collections 
// keys and values could be any data type 
// maps are iterable [it can be looped into]

// declare 
const map = new Map([['a',1],['b',2]]) //[key,value]
for(const [key,value] of map){
    console.log(`key : ${key} , value : ${value}`)
}
// output 
// key:  a , value : 1
// key:  b , value : b

// to add a new key value pair
map.set([key,value])
// to check where a map has a key 
console.log(map.has(key))

// to delete a key 
map.delete(key)
// to clear a map
map.clear()
// to check the size
console.log(map.size)