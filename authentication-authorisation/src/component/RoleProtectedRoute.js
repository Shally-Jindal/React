import React from 'react';
import { Navigate } from 'react-router-dom';
export default function RoleProtectedRoute({children,allowedRoles}){
    const token = localStorage.getItem('token');
    const userRole = token ? JSON.stringify(atob(token.split('.')[1])).role : null;

    if(!token){
        return <Navigate to="/"/>
    }
    if(!allowedRoles.includes(userRole)){
        return <Navigate to="/unauthorised"/>
    }
    return children;
}