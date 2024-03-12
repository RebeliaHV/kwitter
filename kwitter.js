var firebaseConfig = {
  apiKey: "AIzaSyBt4pgRV6SR7eQr55UOT3nl_Oqu4jR82lo",
  authDomain: "kwitter-1c4a3.firebaseapp.com",
  databaseURL: "https://kwitter-1c4a3-default-rtdb.firebaseio.com",
  projectId: "kwitter-1c4a3",
  storageBucket: "kwitter-1c4a3.appspot.com",
  messagingSenderId: "92243126866",
  appId: "1:92243126866:web:554c35ba7101cd11ac0d8b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
