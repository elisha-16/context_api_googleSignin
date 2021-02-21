import React,{ useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {auth,provider} from './firebase.util'
import { useStateValue } from "./StateProvider"; 
import Header from './components/Header'

function App() {
  const [{ user,age }, dispatch] = useStateValue();

  const signin = () =>{              //when we try login 
    auth                          //a popup window shows up
    .signInWithPopup(provider)      //this func is for that popup
  .then(result => {                 //that we can see before logging in
    console.log(result.user)
  })
  .catch(err => {
    alert(err.message)
  })
  } 

  const signout = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  }
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {     
      console.log("THE USER IS >>> ", authUser.displayName);
//if the user is already logged in then if we refresh the page
//it will still show the user as loggedin until we logout
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser.displayName
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    
  }, [dispatch])
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {!user && 
         <button onClick={signin}>Signin with Google</button> 
        }
        {user &&  <h1>{user?.displayName} {age}</h1>}
        {user && <button onClick={signout}>Sign out</button>}
      </header>
    </div>
  );
}

export default App;
