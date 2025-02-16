import Container from "react-bootstrap/esm/Container";
import Header from "./components/navbar";
import Title from "./components/title";
import ButtonGroub from "./components/ButtonsGroub";
import Cards from "./components/Card";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [stateData, setData] = useState(data);
  const catgorys = ["الكل", ...new Set(data.map((i) => i.catgory))];
  let fillterItems = (cat) => {
    if (cat === "الكل") {
      setData(data);
    } else {
      const newItmes = data.filter((e) => e.catgory === cat);
      setData(newItmes);
    }
  };
  let wordFilter = (w) => {
    if (w !== "") {
      const newWord = data.filter((e) => e.titles === w);
      setData(newWord);
    }
  };
  return (
    <div className="font">
      <Header wordFilter={wordFilter} />
      <Container>
        <Title />
        <ButtonGroub fillterItems={fillterItems} catgorys={catgorys} />
        <Cards items={stateData} />
      </Container>
    </div>
  );
}

export default App;
