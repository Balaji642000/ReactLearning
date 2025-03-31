import Contacts from "../contact/contacts";
import Header from "../header/header";
import "./home.css"

function Home(){
    return(
        <>
           <Header/>
           <div className="contacts-container">
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="SivaKavin" mob="1234567890" email="sivakavin642000@gmail.com" age="25" />
           <Contacts name="Thulasi" mob="0987654321" email="thulasi642000@gmail.com" age="25" />
           <Contacts name="Indhu" mob="6379151323" email="Indhu642000@gmail.com" age="25" />
           <Contacts name="Ruba" mob="6379151323" email="Ruba642000@gmail.com" age="25" />
           <Contacts name="Sindhu" mob="6379151323" email="sindhu642000@gmail.com" age="25" />
           <Contacts name="Nandi" mob="6379151323" email="nandi642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" />
           <Contacts name="Balaji" mob="6379151323" email="balajik642000@gmail.com" age="25" /> 
           </div>
        </>
    )
}

export default Home;