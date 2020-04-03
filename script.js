var click = 0;
function Menu(){
    if(window.click == 0){
        document.getElementById('nav-mobo').style.display = "block";
        window.click = 1;
    }
    else{
        document.getElementById('nav-mobo').style.display = "none";
        console.log();
        window.click = 0;
    }
}

function register() {
    window.scrollBy(0, 500);
}