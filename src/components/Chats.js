import React, { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './Chat.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useCollectionData } from 'react-firebase-hooks/firestore';


let duplicate = []
  const host = "http://localhost:8000"  
//   const host = "https://storyitupbackend.onrender.com" 

const handleSearch= async ()=>{
    const response = await fetch(`${host}/api/auth/aisearch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search:"suggest some movie for business"})

      });
      const json = await response.text()
      console.log(json)
      }


firebase.initializeApp({
    apiKey: "AIzaSyDtBDgvVdpMZE02BifbUNrCqqjX9W-cZ6I",
    authDomain: "chatapp-db327.firebaseapp.com",
    projectId: "chatapp-db327",
    storageBucket: "chatapp-db327.appspot.com",
    messagingSenderId: "199115468636",
    appId: "1:199115468636:web:13dfa2a7357f1b7c6d9b99",
    measurementId: "G-YB56FQ7CJJ"
})

function decodeToken(token) {
    var ca = token;
    var base64Url = ca.split('.')[1];
    var decodedValue = JSON.parse(window.atob(base64Url));
    return decodedValue.user
}
const firestore = firebase.firestore();

function Users() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.where("rid", "==", decodeToken(localStorage.getItem("token")).id);
    const [messages] = useCollectionData(query, { idField: 'id' });
    let uniqueChars = [];
    messages.forEach((c) => {
    if (!uniqueChars.includes(c.uid)) {
        uniqueChars.push(c);
    }
});

    return (
        <>
            <div className='chatContainerDiv'>
                

                    { uniqueChars && uniqueChars.filter((ele,index) => messages.indexOf(ele.uid) === index).map((msg)=>{
                        return <>
                        <div>{msg.uid}</div><button className='btn'>Open</button></>
                    })
                }
                           
                
            </div>

        </>
    )
}

export default function Chats() {

    return (
        <div className='chats'>
            <div className='vectorBackground storiesMain'>
                <div className='chatsInner'>
                    <h1 className='text-secondary'>Chats</h1>
                    <div className='chatsContainer'>
                        <Users />
                    </div>
                </div>
            </div>
        </div>
    )

}
