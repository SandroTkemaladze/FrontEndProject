function checkPass() {  
    var pass1 = document.getElementById("pass");  
    var pass2 = document.getElementById("conf_pass");  
    if(pass1 != pass2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
}  