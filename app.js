function dropDown(){
    let x = document.getElementById("dropDown");
    if(x.className=="navBar"){
         x.className+=" responsive";
         /* changing topbar to be responsive*/
    }
    else{
        x.className = "navBar";
    }
}