import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import "./style.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Card />
        <Card />
      </main>

      <Footer />
    </>
  );
}
