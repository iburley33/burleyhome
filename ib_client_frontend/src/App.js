import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Gallery from "./pages/gallery/Gallery";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<div>Landing PAge</div>} />
        <Route path ='/gallery' element={<Gallery />} />
        <Route path ='/profile' element={<Profile /> }/>
        
      </Routes>
    </div>
  );
}

export default App;
