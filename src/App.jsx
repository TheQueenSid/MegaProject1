import {Route,Routes} from 'react-router-dom';
import Login from './Component/login';
import Home from './Component/home';
import AllJobs from './Component/allJobs';
import NotFound from './Component/NotFound';


const App=()=> 
(
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Jobs' element={<AllJobs/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
  </Routes>
)
export default App