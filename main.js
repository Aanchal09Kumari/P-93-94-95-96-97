function log(){
    var userN=document.getElementById("user").value;
    localStorage.setItem("UserName",userN);
    window.location="LCWA_room.html";
  }