import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Family Contacts</h1>
      <Card
        name="BlukoMedi"
        img="./BM.jpg"
        phone="4254425290"
        email="hosana@live.com"
      />
      <Card
        name="Nabu"
        img="./Nabu2.jpg"
        phone="4252138648"
        email="nabubruk@live.com"
      />
      <Card
        name="Noli"
        img="./Noli.jpg"
        phone="4252138648"
        email="Nolibruk@live.com"
      />
    </div>
  );
}

export default App;
