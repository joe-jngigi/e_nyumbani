import Header from "./components/Navbar/Navbar";
import {Footer} from "./components/utilsActions/imports";
import HomePage from "./pages/homePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./pages/about_contacts";
import PropertyList from "./pages/property_listing";
import SingleProperty from "./pages/single_property";
import AuthenticateUser from "./pages/user_auth";
import HostAdmin from "./pages/host_admin";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element= {  <HomePage/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path="/property" element = {<PropertyList/>}/>
        <Route path='/about_property' element = {<SingleProperty/>}/>
        <Route path='/authenticate_user' element = {<AuthenticateUser/>}/>
        <Route path='/host_admin' element = {<HostAdmin/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
