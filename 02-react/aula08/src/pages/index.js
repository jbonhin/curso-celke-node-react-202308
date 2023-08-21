import { useState } from "react";

function Home() {

  const [name, setName] = useState("João");
  return (
    <main>
      <p>{name}</p>
      <button onClick={() => setName("João Fernando")}>Alterar</button>
    </main>
  );
}

export default Home;