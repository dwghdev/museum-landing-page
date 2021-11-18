const navbar = `
<nav>
  <img src="img/logo.svg" style="height: 75px; cursor: pointer"/>
  <ul>
    <li><a href="">home</a></li>
    <li><a href="">about</a></li>
    <li><a href="">events</a></li>
    <li><a href="">more</a></li>
  </ul>
</nav>`;

const navMenu = `
<div id="navmenu">
  <div class="list-container">
    <button class="more-button">
      <div class="menu-icon-wrapper">
        <span></span><span></span><span></span>
      </div>
    </button>
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">gallery</a></li>
      <li><a href="#">places</a></li>
    </ul>
  </div>
</div>`

document.body.innerHTML += navMenu