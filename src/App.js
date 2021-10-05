import PathChange from "./components/PathChange/PathChange";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <div class="background-image">
        <Container id="path">
          <PathChange />
        </Container>
      </div>
    </>
  );
}

export default App;
