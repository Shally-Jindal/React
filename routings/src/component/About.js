import React from 'react';
import {Outlet,Link} from 'react-router-dom';
export default function About(){
    return(
        <>
        <div>HII FROM ABOUT PAGE</div>
        <ul>
        <li>
                <Link to="team">Team</Link>
                </li>
        </ul>
        <Outlet/>
        </>
    )
}