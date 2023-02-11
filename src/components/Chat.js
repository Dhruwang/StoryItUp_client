import React, { useEffect, useRef, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./Chat.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// const host = "http://localhost:8000"  
  const host = "https://storyitupbackend.onrender.com" 


firebase.initializeApp({
  apiKey: "AIzaSyDtBDgvVdpMZE02BifbUNrCqqjX9W-cZ6I",
  authDomain: "chatapp-db327.firebaseapp.com",
  projectId: "chatapp-db327",
  storageBucket: "chatapp-db327.appspot.com",
  messagingSenderId: "199115468636",
  appId: "1:199115468636:web:13dfa2a7357f1b7c6d9b99",
  measurementId: "G-YB56FQ7CJJ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function decodeToken(token) {
  var ca = token;
  var base64Url = ca.split(".")[1];
  var decodedValue = JSON.parse(window.atob(base64Url));
  return decodedValue.user;
}
const handleSearch= async ()=>{
    console.log("submitted")
    const response = await fetch(`${host}/api/auth/aisearch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search:"suggest some movie for business"})

      });
      const json = await response.text()
      
      }



function checkRole() {
  if (localStorage.getItem("token")) {
    if (
      decodeToken(localStorage.getItem("token")).role !== "investor" ||
      "startupowner"
    ) {
      redirect("/");
    }
  }
}

function findReceiver() {
  const index = window.location.href.lastIndexOf("/");
  let id = "";
  if (decodeToken(localStorage.getItem("token")).role !== "investor") {
    id = window.location.href.slice(index + 25);
  } else {
    id = window.location.href.slice(index + 21, index + 25);
  }
  return id;
}

function Chat() {
  useEffect(() => {
    checkRole();
  }, []);
  const [formValue, setFormValue] = useState("");

  return (
    <div className="Chat">
      <div className="vectorBackground">
        <div className="chatContainer">
          <section>
            <ChatRoom setFormValue={setFormValue}/>
          </section>
        </div>
      </div>
    </div>
  );
}


function ChatRoom(props) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // const { uid } = auth.currentUser;
    const uid = decodeToken(localStorage.getItem("token")).id;
    console.log(findReceiver());

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      chatId: window.location.href.slice(
        window.location.href.lastIndexOf("/") + 1
      ),
      // photoURL
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSearch= async (e)=>{
    e.preventDefault()
    const response = await fetch(`${host}/investor/paraphrase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: `paraphrase ${formValue}`})

      });
      const json = await response.text()
      setFormValue(json)
      
      }
      const handleAisearch= async (e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/investor/paraphrase`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({search: `${formValue}`})
    
          });
          const json = await response.text()
          setFormValue(json)
          
          }
    


  return (
    <>
      <main>
        {console.log(messages)}

        {messages &&
          messages
            .filter(
              (ele) =>
                ele.chatId ===
                window.location.href.slice(
                  window.location.href.lastIndexOf("/") + 1
                )
            )
            .map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
        id="aisearch"
          value={formValue}
          className="chatInput"
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button className="chatSendBtn" type="submit" disabled={!formValue}>
        SEND
        </button>
        <button className="paraPhraseBtn" type="submit" onClick={handleSearch}>
        Paraphrase
        </button>
        <button className="aisearchBtn" type="submit" onClick={handleAisearch}>
        Aisearch
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  const messageClass =
    uid === decodeToken(localStorage.getItem("token")).id ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />   */}
        <span>{text}</span>
      </div>
    </>
  );
}

export default Chat;