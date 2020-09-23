function musicvisualchange(){
  var obt=document.getElementById("musicvisualchange");
  var odiv=document.getElementById("container");
  
    if(odiv.style.display=="none"){
       odiv.style.display="flex";
      obt.innerHTML="<i class='fa fa-eye-slash'></i>&nbspHIDE";
    }
    else{
     odiv.style.display="none";
      obt.innerHTML="<i class='fa fa-eye'></i>&nbspSHOW";
    }
 
}