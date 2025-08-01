import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {


    const navigate=useNavigate();
    const logout=()=>{
        sessionStorage.clear();
        navigate("/");
    }
    return (
        <div>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/createpost">Create a post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/viewall">View all post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/viewmypost">View my post</a>
                </li>
                <li class="nav-item">
                   <button onClick={logout} className="btn btn-success">Logout</button>
                </li>
               
            </ul>
        </div>
    )
}

export default Nav