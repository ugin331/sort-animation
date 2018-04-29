/*
 * MEEEEERP!!!
 * There is definitely nothing wrong with me.
 * Hey, it's some code!
 */

var array = [1000, 4000, 6000, 3000, 2000, 5000, 7000, 10000, 8000, 9000];
var newarray = [];
function left_child(i){
    var reet = 2*i+1;
    return reet;
}
function right_child(i){
    var reeto = 2*i+2;
    return reeto;
}
function detectleft_child(arraypos){
    if(left_child(arraypos)>array.length-1){
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
function sorting(rootnum){
    console.log(rootnum);
    while(detectleft_child===true){
        detectleft_child(rootnum);
        console.log(detectleft_child(rootnum));
        if(detectleft_child===null){
            break;
        }
        heapify(left_child(rootnum));
        heapify(left_child(rootnum));
    }
    SiftDown(rootnum);
    console.log(array);
}
function heapify(placeholder){
    
}
function SiftDown(i){
        var left = left_child(i);
        var right = right_child(i);
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