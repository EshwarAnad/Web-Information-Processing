function randomise() {

    var table = document.getElementById("table");

    for (var i = 2; i < table.rows.length; i++) {

        for (var j = 2; j < table.rows[i].cells.length-1; j++) {

            var x = document.getElementById("table").rows[i].cells;
            x[j].innerHTML= Math.floor(Math.random()*101);
            }
        }
    }
    calculate();

function checkValidity(){
    var table = document.getElementById("table");
    for (var i = 2; i < table.rows.length; i++) {
        for(var j = 2; j < table.rows[i].cells.length-1; j++){
            var temp = Number(document.getElementById("table").rows[i].cells[j].innerHTML);
            if(j === 1){
                if ((temp) < 0 || isNaN(temp))
                    document.getElementById("table").rows[i].cells[j].innerHTML = "";
            }
            else{
                if ((temp) < 0 || (temp) > 100 || isNaN(temp)) {
                    document.getElementById("table").rows[i].cells[j].innerHTML = "-";
                    document.getElementById("table").rows[i].cells[j].style.background = "yellow";
                }else{
                    document.getElementById("table").rows[i].cells[j].style.background = "white";
                }

            }
        }

    }
}
var clicked = false;
function clicked() {
    if(clicked){

        checkValidity();

    }
}


function calculate() {

    var table = document.getElementById("table");
    var counter = 0;
    var sum = 0;
    for (var i = 2; i < table.rows.length; i++) {
        var x = document.getElementById("table").rows[i].cells;
        sum =0;

        for (var j = 2; j < table.rows[i].cells.length; j++) {

            var val = parseFloat(table.rows[i].cells[j].innerHTML);
            if(!isNaN(val) && val >0){
                sum+=val;
            }

            if(x[j].innerHTML === "-"){
                counter++;
                x[j].style.background= "yellow";
            }
            document.getElementById("unsub").innerHTML = "There are a total of " + (counter) + " unsubmitted assignments.";
        }

        var avg = Math.round(sum/5);

        x[7].innerHTML= (String(avg)) +"%";

        if (avg < 40) {

            x[7].style.background = "red";
            x[7].style.color = "white";

        }else{
            x[7].style.background = "white";

        }
    }
}

function cSV(){
    var table = document.getElementById("table");
    var path = "";
    for(var i = 2; i < table.rows.length; i++){
        for(var j = 0; j<table.rows[i].cells.length; j++){
            if(j === 7){
                if(document.getElementById("table").rows[i].cells[j].innerHTML === "")
                    path = path + " ";
                else
                    path = path + document.getElementById("table").rows[i].cells[j].innerHTML;
            }
            else {
                if (document.getElementById("table").rows[i].cells[j].innerHTML === "")
                    path = path + " ,";
                else
                    path = path + document.getElementById("table").rows[i].cells[j].innerHTML + " , ";
            }
        }
        if(i !== 11)
            path = path + "\n";
    }
    document.getElementById("CSV").innerHTML = path;
}