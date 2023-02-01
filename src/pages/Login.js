import React,{useEffect,useState} from "react";
import jwt_decode  from 'jwt-decode'

function Login() {
   const [user,setUser]  = useState({});
    function handleCallbackResponse(response){
        //function that gives access to the response upon some one loging in  using our google client 
        console.log(`Encoded jwt id token:  ${response.credential}`)
        var userObj = jwt_decode(response.credential)
        setUser(userObj)
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
        <div className="container-fluid">
        <div  className="row">
                 <div  className="col-md-4 mx-auto  mt-5">
                        <div id="loginDiv"></div>
                        {Object.keys(user).length !== 0  && 
                            <button  onClick={handleSignOut}>Log Out</button>
                        }
                        {user && 
                        <div>
                            <img  src={user.picture}/>
                            <h3>{user.name}</h3>
                            <h2>{process.env.CLIENT_ID}</h2>
                        </div>
                        }
                 </div>
        </div>
        </div>
    )
}

export default Login;