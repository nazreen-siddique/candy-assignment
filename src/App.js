import './App.css'
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import {Home ,Category,Error} from './Pages';

function App() {
 
  
  return (
   <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='category' element={<Category/>}/>
       <Route path="*" element = {<Error/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
