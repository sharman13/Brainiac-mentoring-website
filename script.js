var click = 0;
var image = 0;
var imageprev = 0;
function Menu(){
    if(window.click == 0){
        // document.getElementById('nav-mobo').className = "animated slideInDown";
        document.getElementById('nav-mobo').style.animationName = "wipeIn";
        document.getElementById('nav-mobo').style.animationDuration = "0.5s";
        document.getElementById('nav-mobo').style.display = "block";
        document.getElementById('nav-mobo').style.zIndex = "100";
        // document.getElementsByClassName('slider')[0].style.display = "none";
        window.click = 1;
    }
    else{
        document.getElementById('nav-mobo').style.animationName = "wipeOut";
        document.getElementById('nav-mobo').style.animationDuration = "0.5s";
        // document.getElementById('nav-mobo').style.display = "none";
        setInterval({}, 2000);
        document.getElementById('nav-mobo').style.zIndex = "-1000";
        window.click = 0;
    }
}
function next(){
    if(image == 0){
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
    imageprev = 1;
    image = 1;
    }
    else{
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.display = "block";
        image = 0;
        imageprev = 0;
    }
}
function Prev(){
    console.log("hello");
    if(imageprev == 0){
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        imageprev = 1;
        }
        else{
            document.getElementById("img2").style.display = "none";
            document.getElementById("img1").style.display = "block";
            imageprev = 0;
        }
}

function AboutUs() {
    window.scrollBy(0, 1900);
}

function howregister() {
    window.scrollBy(0, 1500);
}
function contact() {
    window.scrollBy(0, 4000);
}