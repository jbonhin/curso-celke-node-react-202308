import { useState } from "react";

function Home() {

  const [name, setName] = useState("Cesar");

  return (
    <main>
      <p>{name}</p>
      <button onClick={() => setName("Kelly")}>Alterar</button>
    </main>
  );
}

export default Home;
