import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  );
}
