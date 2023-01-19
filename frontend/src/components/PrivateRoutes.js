import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes(props) {
    const loggedIn = true
    return (
        loggedIn ? <Outlet/>  : <Navigate to="/login" />
    )
}
