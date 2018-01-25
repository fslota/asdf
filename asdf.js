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
    document.getElementById("time1").innerHTML=Date().slice(0, 25);

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
