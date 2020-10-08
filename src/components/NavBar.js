import React from "react";


function NavBar() {
    return <header>
        
        <nav class="navbar navbar-expand-lg navbar-light" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="../Pages/Landing.js">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../Pages/AboutMe.js">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../Pages/Portfolio.js">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class = "nav-link" href="./Assets/CodingResume-9-20.pdf">Resume</a>
        </li>
        {/* <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li> */}
      </ul>
    </div>
</nav>
    </header>
}

export default NavBar;