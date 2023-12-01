import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import EmployeeSearch from './Components/EmployeeList';


const App = () => {
    const employeeData = [
        { id: 1, name: 'Lewis Hamilton', dob: '7 January 1985', role: 'Developer' },
        { id: 2, name: 'Max Vestapan', dob: '30 September 1997', role: 'Designer' },
      ];
    return (
    <>
    <Router>
    <Routes>
    <Route path='/' element=<Login/>></Route>
    <Route path='/dashboard' element=<Dashboard/>></Route>
    <Route path='/employee' element=<EmployeeSearch employees={employeeData} />></Route>

    </Routes>
    </Router>
        
        
    </>
    );
};

export default App;
