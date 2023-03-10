import React,{useEffect,useState} from "react";
import jwt_decode  from 'jwt-decode'
import  './Landing.css'
import Navbar from './Navbar'

function LandingPage() {
   const [user,setUser]  = useState({});
    function handleCallbackResponse(response){
        //function that gives access to the response upon some one loging in  using our google client 
        console.log(`Encoded jwt id token:  ${response.credential}`)
        var userObj = jwt_decode(response.credential)
        setUser(userObj)
        window.localStorage.setItem('jwt',JSON.stringify(response.credential))
        document.getElementById('loginDiv').hidden = true
    }
    
    function handleSignOut(){
        setUser({})
        document.getElementById('loginDiv').hidden = false
    }

    useEffect(()=>{
           /*global google*/
          
            google.accounts.id.initialize({
                client_id:"702957455606-sgllv9sjltai2magudf732oqul33k6hc.apps.googleusercontent.com",
                callback:handleCallbackResponse
            })
            
            google.accounts.id.renderButton(
                document.getElementById("loginDiv"),
                {theme:"outline", size:"large"}
            )

    },[])
    //if user is available: show the log out button 
    // if user is not available show the sign in button
    return (
               <div>
               <Navbar user={user}/>
               <h1>Photo Album</h1>
                 <div  className="containerEl">
                    <p style={{textAlign:"center"}}>Browse through a list of users and  have a sneak peek of the number of albums
                    they have.
                        </p>
                        <p style={{textAlign:"center"}}> Click the user 
                           to get more information about them including a list 
                           of all the albums in their name.</p>
                        <p style={{textAlign:"center"}}> Select an album to 
                           see all the photos in that particular album and edit the title of the photo to your liking by clicking the title of the photo</p>
                        <div id="loginDiv"></div>
                        {Object.keys(user).length !== 0  && 
                            <button  onClick={handleSignOut}  className="btn btn-secondary mt-3">Log Out</button>
                        }
                        
                 </div>
                 </div>
    )
}

export default LandingPage;