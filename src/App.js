import { useEffect, useState } from "react";
import './App.css';
import Search from "./Search";
import List from './Liste';


function App() {

  const [newListe, setNList] = useState(null);
  const [isPending, setPending] = useState(true);
  const [search, setSearch] = useState(false);
  const [tmp, setTmp] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      fetch('http://localhost:8000/Liste')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setNList(data)
        });
      setPending(false);

    }, 2000

    )

  }, [newListe]);

  function Recherche(value) {

    setSearch(true);
    if (value == "") {
      setSearch(false);
    }

    const tmp1 = newListe.filter(elm => elm.title.toLowerCase().includes(value.toLowerCase()));
    setTmp(tmp1);
    console.log(tmp, search, value);
  }



  return (
    <div className="App">
      {isPending && <div id="Load">Loading...</div>}
      {!isPending && <h3>To do list</h3>}
      {!isPending && <Search p2={Recherche} />}
      {search && newListe && <List tasks={tmp} />}
      {!search && newListe && <List tasks={newListe} p2={Recherche} />}

    </div>
  );
}

export default App;
