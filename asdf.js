function smallerImage() {
    document.getElementById("image1").style.width = "20%";
    document.getElementById("image1").style.cursor = "zoom-in";
}
function biggerImage() {
    document.getElementById("image1").style.width = "40%";
    document.getElementById("image1").style.cursor = "zoom-out";
}
function normalImage() {
    document.getElementById("image1").style.width = "30%";
    document.getElementById("image1").style.cursor = "zoom-in";
}
function showTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var finishedSeconds = 0;
    var totalSeconds = 12*3600;
    //when day shift
    if(document.getElementById("shift").value == "day"){
        if(hours<8){
            finishedSeconds = 0;
        }else if(hours>20){
            finishedSeconds = totalSeconds;
        }else{
            finishedSeconds = seconds + minutes*60 + (hours-8)*3600;
        }
    //when night shift
    }else{
        if(hours>8&&hours<12){
            finishedSeconds = totalSeconds;
        }else if(hours<20&&hours>=12){
            finishedSeconds = 0;
        }else{
            //before and after midnight
            if(hour>8)
            {
                finishedSeconds = seconds + minutes*60 + (hours-20)*3600;
            }else{
                finishedSeconds = seconds + minutes*60 + (hours+8)*3600;
            }
        }
    }
    var money = (108.72*finishedSeconds / totalSeconds).toFixed(5);
    var percent = 100*finishedSeconds / totalSeconds
    //night shift money bonus
    if(document.getElementById("shift").value == "night"){
        money = (money*13,6/12).toFixed(5);
    }
    document.getElementById("time1").innerHTML = finishedSeconds + "/" + totalSeconds + "(" + percent.toFixed(2) + "%)";
    document.getElementById("cash1").innerHTML = money + "PLN";
    document.getElementById("bar1").value = percent;

}
function toggleImage() {
    var x = document.getElementById('image1');
    if (x.style.width === "40%") {
        x.style.width = '30%';
        x.style.cursor = "zoom-in";
    } else {
        x.style.width = "40%";
        x.style.cursor = "zoom-out";
    }
}
function add(x, y){
    return x + y;
}
