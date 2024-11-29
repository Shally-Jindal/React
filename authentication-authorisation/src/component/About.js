import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export default function About(){
    return(<>
    <div>
    HII FROM ABOUT
    </div>
    <ul>
        <Link to="admin"/>
    </ul>
    <Outlet/>
    
    </>
    )
}