import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Navbar from './Navbar';
import MainCont from './MainCont';

function App() {
    const location = useLocation(); 


    const showBaseComponents = location.pathname === '/';

    return (
        <>
            {showBaseComponents && (
                <>
                    <Navbar />
                    <MainCont />
                </>
            )}
            <Routes>
                <Route path="/about" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import AboutUs from './AboutUs';
// import Menu from './Menu';
// import Reservations from './Reservations';
// import OrderOnline from './OrderOnline';
// import Login from './Login';
// // import Layout from './Layout';
// import Navbar from './Navbar';
// import MainCont from './MainCont';

// function App() {
//     let component
//     switch (window.location.pathname) {
//         case "/menu":
//             component = <Menu />
//             break;

//         case "/about":
//             component = <AboutUs />
//             break;
//     }
//     return (
//         <>

//             <Navbar />
//             {component}
//             <MainCont />
//         </>
//     );
// }

// export default App;

