// set a collection of values
// values must be unqiue [cannot have same value twice]
// sets can hold mixed data [objects, arrays , strings, number,etc]
// sets are iterable [which means it can be looped into]

// declare

const set = new Set([1,2,3]) //values

for(const values of set){
    console.log(values);
}
// output 1 2 3
// to add a value 
set.add(value)
// to delete a value
set.delete(value)
// to check where the set has a certain value
console.log(set.has(value)) // return true or false depends on value found or not
// to get the size of set
console.log(set.size) // output 3
// to delete the whole set
set.clear()