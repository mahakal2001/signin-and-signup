import React from "react";

function Hero({ handleLogout }) {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome User</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
}

export default Hero;
