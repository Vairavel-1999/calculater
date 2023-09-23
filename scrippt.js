var displaynum = 0;
var arr = [];
var is_sum = false;

var container = document.createElement("div");
container.setAttribute("class", "container");

var row0 = document.createElement("div");
row0.setAttribute("class", "row px-2");

var col = document.createElement("div");
col.setAttribute("class", "col p-1");
var lable = document.createElement("div");
lable.setAttribute("class", "w-100 h-40 dispalynum");
lable.id = "lbldisplay";
lable.style.backgroundColor = "#a29f9f";
lable.innerHTML = displaynum;
col.append(lable);
row0.append(col);
container.append(row0);




var row1 = document.createElement("div");
row1.setAttribute("class", "row px-2");

var col = document.createElement("div");
col.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.innerHTML = "C";
button.onclick = function () { Cancel(); }
col.append(button);
row1.append(col);
container.append(row1);

var col2 = document.createElement("div");
col2.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { remove(); }
button.innerHTML = "←";

col2.append(button);
row1.append(col2);
container.append(row1);

var col3 = document.createElement("div");
col3.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("."); }
button.innerHTML = ".";
col3.append(button);
row1.append(col3);
container.append(row1);

var col4 = document.createElement("div");
col4.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("*"); }
button.innerHTML = "*";
col4.append(button);
row1.append(col4);
container.append(row1);



var row2 = document.createElement("div");
row2.setAttribute("class", "row px-2");

var col5 = document.createElement("div");
col5.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.innerHTML = "7";
button.onclick = function () { calculatenumber(7); }
col5.append(button);
row2.append(col5);
container.append(row2);

var col6 = document.createElement("div");
col6.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(8); }
button.innerHTML = "8";
col6.append(button);
row2.append(col6);
container.append(row2);

var col7 = document.createElement("div");
col7.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(9); }
button.innerHTML = "9";
col7.append(button);
row2.append(col7);
container.append(row2);

var col8 = document.createElement("div");
col8.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("/"); }
button.innerHTML = "/";
col8.append(button);
row2.append(col8);
container.append(row2);


var row3 = document.createElement("div");
row3.setAttribute("class", "row px-2");

var col9 = document.createElement("div");
col9.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.onclick = function () { calculatenumber(4); }
button.innerHTML = "4";
col9.append(button);
row3.append(col9);
container.append(row3);

var col10 = document.createElement("div");
col10.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(5); }
button.innerHTML = "5";
col10.append(button);
row3.append(col10);
container.append(row3);

var col11 = document.createElement("div");
col11.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(6); }
button.innerHTML = "6";
col11.append(button);
row3.append(col11);
container.append(row3);

var col12 = document.createElement("div");
col12.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("-"); }
button.innerHTML = "-";
col12.append(button);
row3.append(col12);
container.append(row3);



var row4 = document.createElement("div");
row4.setAttribute("class", "row px-2");

var col13 = document.createElement("div");
col13.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.onclick = function () { calculatenumber(1); }
button.innerHTML = "1";
col13.append(button);
row4.append(col13);
container.append(row4);

var col14 = document.createElement("div");
col14.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(2); }
button.innerHTML = "2";
col14.append(button);
row4.append(col14);
container.append(row4);

var col15 = document.createElement("div");
col15.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber(3); }
button.innerHTML = "3";
col15.append(button);
row4.append(col15);
container.append(row4);

var col16 = document.createElement("div");
col16.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("+"); }
button.innerHTML = "+";
col16.append(button);
row4.append(col16);
container.append(row4);



var row5 = document.createElement("div");
row5.setAttribute("class", "row px-2");


var col17 = document.createElement("div");
col17.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.onclick = function () { calculatenumber(0); }
button.innerHTML = "0";
col17.append(button);
row5.append(col17);
container.append(row5);

var col18 = document.createElement("div");
col18.setAttribute("class", "col p-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-light w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { calculatenumber("00"); }
button.innerHTML = "00";
col18.append(button);
row5.append(col18);
container.append(row5);


var col19 = document.createElement("div");
col19.setAttribute("class", "col-6 px-1 py-1");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-primary w-100 h-40");
button.setAttribute("type", "button");
button.onclick = function () { sum(); }
button.innerHTML = "=";
col19.append(button);
row5.append(col19);
container.append(row5);



document.body.append(container);


function calculatenumber(calc) {
    if(is_sum){
        arr = [];
        is_sum = false;
    }
    displaynum = calc;
    arr.push(calc);
    assignValue();
}

function Cancel() {
    arr = [];
    assignValue();
}

function remove() {
    arr = arr.slice(0, -1);
    assignValue();
}

function assignValue() {
    var dis = document.getElementById("lbldisplay");
    if (arr.length > 0) {
        dis.innerHTML = "";
        arr.forEach(element => {
            dis.innerHTML += element;
        });
    } else {
        dis.innerHTML = "0";
    }
}

function sum() {
    var total = 0;
    var dis = document.getElementById("lbldisplay");
    total = eval(dis.innerHTML);
    is_sum = true;
    // if (arr.length > 0) {
    //     dis.innerHTML = "";
    //     arr.forEach(element => {
    //         debugger;
    //         if(element === "+"){
                
    //         }else{
    //             total = total   parseFloat(element);
    //         }
    //     });
        dis.innerHTML = total;
    
}

