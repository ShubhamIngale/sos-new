import firebase from '../firebaseConfig'
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();


const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
                console.log('user', user)
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        });
}

const googleSignup = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(`token: ${token}`)
                console.log(`user: ${JSON.stringify(user)}`)
        })
        .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

                console.log(errorCode, errorMessage)
              });
}

const logout = () => {
        auth.signOut()
        .then(() => console.log('sign out'))
}