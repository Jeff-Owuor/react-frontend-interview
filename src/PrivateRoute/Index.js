import  React from 'react'
import { Navigate } from 'react-router-dom'


const  PrivateRoute = ({children}) => {
      const jwt = JSON.parse(window.localStorage.getItem("jwt"))
      return jwt?children:<Navigate to="/"/>
}

export default PrivateRoute;