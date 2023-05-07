import React from "react";
import { Link } from "react-router-dom";


//import styling
import "./Home.css"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <div className="spacer-tag home" />
      <section className="pages">
        <h1>This is my React app!</h1>
        <Link to="/products">All plants</Link>
        <p>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium.
        </p>
      </section>
    </main>
  );
};
