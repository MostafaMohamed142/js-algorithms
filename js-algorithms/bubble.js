function bubble(arr){
    let swaped;
    do{
        let swaped = false
        for(let i =0; i < arr.length -1 ;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true;
            }
        }
    }while(swaped);
}
const arr = [2,-6,-2,3,10]
bubble(arr);
console.log(arr)