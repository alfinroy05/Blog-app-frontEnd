import React from 'react'

const Nav = () => {
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
                    <a class="nav-link" href="#">View my post</a>
                </li>
               
            </ul>
        </div>
    )
}

export default Nav