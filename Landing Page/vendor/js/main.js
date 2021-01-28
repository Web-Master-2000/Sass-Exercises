

function toggle(){
    let z = document.getElementById("navbar");
    if(z.className === "navbar"){
         z.className += "responsive"
    }else{
        z.className = "navbar"
    }
}