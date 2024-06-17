import {Route,Routes} from 'react-router-dom';
import Login from './Component/login';
import Home from './Component/home';
import AllJobs from './Component/allJobs';
import NotFound from './Component/NotFound';
import ProtectedRoute from './Component/protectedRoute';
import jobitemDetails from './Component/jobitemDetails';


const App=()=> 
(
  <Routes>
    <Route path='/' element={<ProtectedRoute Component={Home}/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Jobs' element={<ProtectedRoute Component={AllJobs}/>}></Route>
    <Route path='/Jobs/:id' element={<ProtectedRoute Component={jobitemDetails}/>}></Route>
    <Route path='/*' element={<NotFound/>}></Route>
  </Routes>
)
export default App