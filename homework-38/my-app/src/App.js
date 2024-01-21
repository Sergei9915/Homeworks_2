function App() {
  return (
    <>
      <header id="header">
        <nav className="nav">
          <ul className="nav__menu">
            <li>My</li>
            <li>First</li>
            <li>App</li>
          </ul>
        </nav>
      </header>
      <section id="section">
        <nav className="asideNav">
          <ul className="asideNav__menu">
            <li>About us</li>
            <li>Messages</li>
            <li>Likes</li>
            <li>Projects</li>
          </ul>
        </nav>
        <div className="card">
          <h1>My history</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            exercitationem corrupti aut quia doloremque voluptatibus harum ex
            deserunt similique nobis cum alias quasi dolor placeat, maxime id
            deleniti quos explicabo.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
