import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Provider } from "./context/provider";

function App() {
  return (
      <Provider>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Provider>
  )
}

export default App;
