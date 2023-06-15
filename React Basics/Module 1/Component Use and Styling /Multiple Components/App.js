import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card is h2" h3="First card is h3"/>
      <Card h2="second card's h2" h3="Second card's h2"/>
      <Card h2="Third card's h2" h3="Third card's h2"/>
    </div>
  );
}

export default App;

