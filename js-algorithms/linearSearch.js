function linearSearch(arr,target){
    for (let i = 0;i < arr.length ; i++) {
        if (arr[i] === target) return i; //if element is found in array
    }
    return -1
}
console.log(linearSearch([10,20,30],30))
console.log(linearSearch([10,20,30],50))
