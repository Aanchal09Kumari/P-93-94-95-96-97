const firebaseConfig = {
    apiKey: "AIzaSyDRaAmMO9KtZDDElWUBpA63JpPQmUn8nrg",
    authDomain: "lets-chat-90de5.firebaseapp.com",
    databaseURL: "https://lets-chat-90de5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-90de5",
    storageBucket: "lets-chat-90de5.appspot.com",
    messagingSenderId: "1090507578348",
    appId: "1:1090507578348:web:3240e35e26006704383ec9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user=localStorage.getItem("UserName");
  document.getElementById("userNa").innerHTML="welcome "+user+"!";

  function room(){
    var Room_name= document.getElementById("adroom").value;
    console.log(Room_name);
    firebase.database().ref("/").child(Room_name).update({
     purpose: "adding room name"
    });
    localStorage.setItem("room",Room_name);
    window.location="LCWA_page.html";
    document.getElementById("adroom").value
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Roomnames = childKey;
   //Start code
   console.log(Roomnames)
      var room="<div class='room_name' id='"+Roomnames+"' onclick='redirect(this.id)'>#"+Roomnames+"</div><hr>";
      document.getElementById("output").innerHTML+=room;
   //End code
   });});};
getData();
function redirect(name){
    console.log(name);
    localStorage.setItem("room",name);
    window.location="LCWA_page.html";

}
