function mergeSort(arr){
    if(arr.length < 2 ){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    const resultArr = [];
    while (left.length && right.length ) {
        // compare the first elements of both arrays and add to new array in ascending order
        if (left[0] <= right[0]) {
            resultArr.push(left.shift());
        }
        else{
            resultArr.push(right.shift())
        }
    }
    return [...resultArr,...left,...right]
}
const arr=[2,10,21,5,6]
console.log(mergeSort(arr))