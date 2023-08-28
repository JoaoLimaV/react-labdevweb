import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from '../components/Home'
// import FindAllCustomer from '../components/FindAllCustomer';
// import SaveCustomer from '../components/SaveCustomer'
// import FindCustomer from '../components/FindCustomer'
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';


function IndexRoutes() {

    return (
       <>
            <Router>
                <Routes>
                    <Route path="/"  element={<Login />} />
                    <Route path="*"  element={<Login />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/cliente" element={<FindAllCustomer />} />
                    <Route path="/cliente/find/:id_usuario"  element={<FindCustomer />}/>
                    <Route path="/cliente/save" element={<SaveCustomer />} />
                    <Route path="/cliente/update"  />
                    <Route path="/cliente/delete"  /> */}
                    <Route path="/home" element={<Home />} />
                    {/* element={<Register />} */}
                </Routes>
            </Router>
        </>
    );
} 

export default IndexRoutes;