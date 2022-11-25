import React from 'react'

function Header() {
  return (
    <div className="home__header">
        <nav className="home__nav">
            <div className="home__nav-left">
                <div className="home__nav-img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                </div>
                <h1>React Info Site</h1>
            </div>
            <ul className="home__nav-listItems">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header