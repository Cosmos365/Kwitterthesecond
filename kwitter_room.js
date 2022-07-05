
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBQziHeI8MDDlKaTZRuvTSdyn1ambwu0M0",
      authDomain: "kwitter-1f954.firebaseapp.com",
      databaseURL: "https://kwitter-1f954-default-rtdb.firebaseio.com",
      projectId: "kwitter-1f954",
      storageBucket: "kwitter-1f954.appspot.com",
      messagingSenderId: "73761586817",
      appId: "1:73761586817:web:6554ed12ca5f7bd26ad780"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

function addRoom() {
      room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_names",room_names);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            console.log("room name - "+Room_names);
            row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
            document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_names",name);
      window.location = "kwitter_page.html"
}