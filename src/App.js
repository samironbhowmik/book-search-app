import BookSearch from "./components/booksearch";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/booksearch" element={<BookSearch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
