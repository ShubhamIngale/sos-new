import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAjaYsgxsggHf3mz-wXn45IKZAqQk1Hgyg",
  authDomain: "careerbest-dev.firebaseapp.com",
  projectId: "careerbest-dev",
  storageBucket: "careerbest-dev.appspot.com",
  messagingSenderId: "633697571831",
  appId: "1:633697571831:web:870cdc10fcd41aca8814f2",
};

firebase.initializeApp(firebaseConfig);

export default firebase