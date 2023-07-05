function quickSort(arr){
    if (arr.length <= 1 ) {
        return arr
    }
    let key = arr[arr.length -1];
    let left = [];
    let right=[];
    for(let i = 0 ; i < arr.length -1 ; i++){
        if(arr[i]<key){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),key,...quickSort(right)]
}

const arr=[2,4,-5,1,8]

console.log(quickSort(arr))