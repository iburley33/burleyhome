import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import Profile from "./pages/profile/Profile";
import Landing from "./pages/landing/Landing";
import Store from "./pages/store/Store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
