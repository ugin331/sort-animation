/*
 * MEEEEERP!!!
 * There is definitely nothing wrong with me.
 * Hey, it's some code!
 */

var array = [1000, 4000, 6000, 3000, 2000, 5000, 7000, 10000, 8000, 9000];
var newarray = [];
function leftroot(i){
    var reet = 2*i+1;
    return reet;
}
function rightroot(i){
    var reeto = 2*i+2;
    return reeto;
}
function detectleftroot(arraypos){
    if(leftroot(arraypos)>array.length-1){
        return false;
    }
    else{
        return true;
    }
}
function swap(swap1, swap2){
    var nexvar = array[swap2];
    array[swap2] = array[swap1]; //if so, it replaces it with the first one
    console.log(array[swap2] + "<--->" + nexvar + "(positions " + swap1 + " and " + swap2 + ")");
    array[swap1] = nexvar; //sets the original array spot with the swapped one
    console.log(array);
}
function heapify(rootnum){
    console.log(rootnum);
    while(detectleftroot===true){
        detectleftroot(rootnum);
        console.log(detectleftroot(rootnum));
        if(detectleftroot===null){
            break;
        }
        heapify(leftroot(rootnum));
        heapify(leftroot(rootnum));
    }
    SiftDown(rootnum);
    console.log(array);
}
function SiftDown(i){
        var left = leftroot(i);
        var right = rightroot(i);
    if(array[left] > array[i]){
        swap(left, i);
    }
    else if(array[right] > array[i]){
        swap(right, i);
    }
    else{
        console.log("nothing to do");
    }
}
heapify(0);