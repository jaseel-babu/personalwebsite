
function validate(){
    var ragex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Sender.value.match(ragex)){
        true
    }else{
        document.getElementById("Sender").style.border=" 1px solid red";
        document.getElementById("Email").style.display="block";
        return false
    }

}

function form(){
    
    
    if(Name.value==""){
        document.getElementById("Name").style.border=" 1px solid red";
        document.getElementById("names").style.display="block";
        return false
        
    }
     else if(Name.value.length<3){
        document.getElementById("Name").style.border=" 1px solid red";
        document.getElementById("fivecharctres").style.display="block";
        return false
        
    }
    else if(Sender.value==""){
        document.getElementById("Sender").style.border=" 1px solid red";
        document.getElementById("Email").style.display="block";
        return false
        
    }
    else{
        
        true;
    }

    
}



