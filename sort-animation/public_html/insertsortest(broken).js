/* 
 * MEEEEERP!!!
 * There is definitely nothing wrong with me.
 * Hey, it's some code!
 */


var cnvs3 = document.getElementById("sorter");
var dista3 = cnvs3.getContext("2d");
var dwidth = cnvs3.width;
var array = [1000, 4000, 6000, 3000, 2000, 5000, 7000, 10000, 8000, 9000];
var array2 = [-1, 8, 7, 5, 3, -12, 1, 100, 70];
var buttonpressed = false;
var timeout = false;
document.onkeydown = Keydet;
var i = 0;
function getscalenum(value, max_value) {
    var scaledwidth = ((1.0 * dwidth / 2) * Math.abs(value)) / max_value;
    //console.log(scaledwidth);
    return scaledwidth;
}
function getLargest() {
    var largest = 0;
    for (e = 0; e < array.length; e++) {
        if (array[e] > largest) {
            largest = array[e];
        }
    }
    return Math.abs(largest);
}
function drawfromcenter() {
    console.log("draw");
    var cnvs = document.getElementById("sorter");
    var dista = cnvs.getContext("2d");
    var len = array.length;
    var barheight = (cnvs.height - (len + 1) * 10) / len;
    var largesto = getLargest();
    for (a = 0; a < array.length; a++) {
        var scaleamt = getscalenum(array[a], largesto);
        if (array[a] >= 0) {
            dista.beginPath();
            dista.fillStyle = "#00b9f1";
            dista.fillRect(cnvs.height / 2, a * (barheight + 10), scaleamt, barheight);
            dista.stroke();
            console.log("drawn");
        } else {
            dista.beginPath();
            dista.fillStyle = "#00b9f1";
            dista.fillRect((cnvs.height / 2) - scaleamt, a * (barheight + 10), scaleamt, barheight);
            dista.stroke();
            console.log("drawn aussi");
        }
    }
}
function Keydet() { //dis is the sorting thingy
   var cnvs2 = document.getElementById("sorter");
   var dista2 = cnvs2.getContext("2d");
   dista2.clearRect(0, 0, cnvs2.height, cnvs2.width);
   console.log("iteration " + i); //prints current list iteration to console
    for(j = 0; j<array.length-1-i; j++){
        while(true){
            x = 0;
            sortvar= array[x];
            nexvar = array[x+1];
            if(sortvar > nexvar){
                newvar = array[x];
                array[x] = nexvar;
                array[x+1] = newvar;
            }
            else if(sortvar<=nexvar){
                break;
            }
            x++;
            if(x>array.length-1){
                break;
                //how do I get it to draw in between steps in this while loop??
            }
        }
    }
    console.log("drawn");
    drawfromcenter();
    console.log("Step " + i + ": " + array); //logs the array step
    i++;
}
drawfromcenter();