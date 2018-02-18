/* 
 * MEEEEERP!!!
 * There is definitely nothing wrong with me.
 * Hey, it's some code!
 */


var cnvs3 = document.getElementById("sorter");
var dista3 = cnvs3.getContext("2d");
var dwidth = cnvs3.width;
var array = [1000, 4000, 6000, 3000, 2000, 5000, 7000, 10000, 8000, 9000];
var masterarray = [];
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
function drawfromcenter(num) {
    console.log("draw");
    var cnvs = document.getElementById("sorter");
    var dista = cnvs.getContext("2d");
    var len = array.length;
    var barheight = (cnvs.height - (len + 1) * 10) / len;
    var largesto = getLargest();
    var temparray = masterarray[num];
    console.log(temparray);
    for (a = 0; a < array.length; a++) {
        var scaleamt = getscalenum(temparray[a], largesto);
        if (temparray[a] >= 0) {
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
    for (x = 0; x < array.length - 1 - i; x++) { //runs through the list x times, up until the length of the array -i-1 ...
        //... as the last few are going to be sorted- saves resources
        var nexvar = array[x + 1]; //saves array[x+1] as a var, also saves resources
        if (array[x] > nexvar) { //checks if the current variable is greater than the next one
            index2 = x + 1;
            array[x + 1] = array[x]; //if so, it replaces it with the first one
            console.log(array[x] + "<--->" + nexvar + "(positions " + x + " and " + index2 + ")");
            array[x] = nexvar; //sets the original array spot with the swapped one
        }
    }
    console.log("drawn");
    masterarray.push(array);
    drawfromcenter();
    console.log("Step " + i + ": " + array); //logs the array step
    i++;
    console.log(masterarray);
}
/*function checkkeyval(e) {
    e = e || window.event;
    num = 0;
    if (e.keyCode === '37') {
        if (num > 0) {
            num--;
            drawfromcenter(num);
        }
    } else if (e.keyCode === '39') {
        num++;
        drawfromcenter(num);
    }
}*/
