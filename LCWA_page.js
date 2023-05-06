const firebaseConfig = {
    apiKey: "AIzaSyBMvM7ZqRkz2q6nI63yExWZGAn_DbV54JA",
    authDomain: "kwitter-c27db.firebaseapp.com",
    databaseURL: "https://kwitter-c27db-default-rtdb.firebaseio.com",
    projectId: "kwitter-c27db",
    storageBucket: "kwitter-c27db.appspot.com",
    messagingSenderId: "246150818748",
    appId: "1:246150818748:web:27c1654698a8a287bf59b9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var userN=localStorage.getItem("UserName");
    var ro=localStorage.getItem("room");

    function sent(){
      var msg=document.getElementById("sed").value;
      firebase.database().ref(ro).push({
          userna:userN,
          masg:msg,
          like:0
      });
      document.getElementById("sed").value="";
    }

    function getData() { firebase.database().ref("/"+ro).on('value', function(snapshot) { document.getElementById("out").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        var user=message_data["userna"];
        var mes=message_data["masg"];
        var li=message_data["like"];
        var nameHtml="<h4>"+user+"<img src='tick.png' class='ustick'></h4>";
        var message="<h4 class='message_h4'>"+mes+"</h4>";
        var likebutton="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+li+"' onclick='updatelike(this.id)'>";
        var spanHTML="<span class='glyphicon glyphicon-thumbs-up'>Like :"+li+"</span></button><hr>";
        var row=nameHtml+message+likebutton+spanHTML;
        document.getElementById("out").innerHTML +=row;
//End code
     } });  }); }
getData();
function updatelike(meass){
 console.log(meass);
 var currlike=document.getElementById(meass).value;
 var updated=Number(currlike)+1;
 firebase.database().ref(ro).child(meass).update({
   like:updated
 });
}
function logo(){
     localStorage.removeItem("userName");
     localStorage.removeItem("room");
     window.location="index.html";
 }