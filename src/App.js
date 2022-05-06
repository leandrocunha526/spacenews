import { Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/article/detail/:id" element={<Detail/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
