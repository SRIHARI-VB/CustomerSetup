import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddFacilities from './components/AddFacilities';


function App() {
  return (
    <div> 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/addfacilities' element={<AddFacilities/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
