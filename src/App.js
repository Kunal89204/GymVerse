import "./App.css";
import {Route, Routes,useNavigate} from "react-router-dom";
import News from "./pages/News"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fitness from "./pages/Fitness";
import Aibot from "./pages/Aibot";
import ExerciseDetail from "./pages/ExerciseDetail";
import Bmi from "./pages/Bmi";
import Games from "./pages/Games";
import Memory from "./components/games/memory";
import Catch from "./components/games/Catch";
import Tracker from "./pages/Tracker";
import "./index.css"

function App() {
  return (
    <div>


<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/news" element={<News/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Fitness" element={<Fitness/>}/>
<Route path="/Bmi" element={<Bmi/>}/>
<Route path="/Fitness/exercise/:id" element={<ExerciseDetail />} />
<Route path="/Aibot" element={<Aibot/>}/>
<Route path="/Games" element={<Games/>}    />
<Route path="/Memory" element={<Memory/>}    />
<Route path="/Catch" element={<Catch/>}    />
<Route path="/Tracker" element={<Tracker/>}    />
</Routes>
    </div>

  );
}

export default App;
