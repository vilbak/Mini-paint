import firebase from 'firebase'


const config = {
  apiKey: 'AIzaSyCSK13ChfYZNC_Ci3C6Zkc1kQC6i64SJMk',
  authDomain: 'mini-paint-ec668.firebaseapp.com',
  projectId: 'mini-paint-ec668',
  storageBucket: 'mini-paint-ec668.appspot.com',
  messagingSenderId: '847187219000',
  appId: '1:847187219000:web:ebe6f578f2abf37790cccd',
}
firebase.initializeApp(config)


const database = firebase.database()

export {
  firebase,
  database as default,
}
