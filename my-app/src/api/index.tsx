import firebase from 'firebase'


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'mini-paint-ec668.firebaseapp.com',
  projectId: 'mini-paint-ec668',
  storageBucket: 'mini-paint-ec668.appspot.com',
  messagingSenderId: '847187219000',
  appId: '1:847187219000:web:ebe6f578f2abf37790cccd',
}
firebase.initializeApp(config)


export const database = firebase.firestore()
export const storageRef = firebase.storage().ref()


