import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/header'
import Main from './components/main/main'
import Home from "./components/home/home";
import Contacts from "./components/contact/contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header/>
      <Main/> */}
      {/* <Contacts/> */}
      <Home/>
    </>
  );
}

export default App;
