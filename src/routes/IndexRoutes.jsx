import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from '../layout/NavBar';

import Home from '../components/Home'
import FindAllCustomer from '../components/FindAllCustomer';
import SaveCustomer from '../components/SaveCustomer'


function IndexRoutes() {

    return (
       <>
            <Router>
            <NavBar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/cliente" element={<FindAllCustomer />} />
                    <Route path="/cliente/find"  />
                    <Route path="/cliente/save" element={<SaveCustomer />} />
                    <Route path="/cliente/update"  />
                    <Route path="/cliente/delete"  />
                    {/* element={<Register />} */}
                </Routes>
            </Router>
        </>
    );
} 

export default IndexRoutes;