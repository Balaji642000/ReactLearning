import Contacts from "../contact/contacts";
import Header from "../header/header";
import "./home.css"
import peoplesData from "../../assets/peoplesData";


function Home(){
    console.log(peoplesData);
    const ContactDetails = peoplesData.map( (person, index) => {
        return <Contacts key={index} name={person.name} mob={person.mobile} email={person.email} age={person.age}/>
    })
    return(
        <>
           <Header/>
           <div className="contacts-container">
           {ContactDetails}
           {ContactDetails} 
           </div>
        </>
    )
}

export default Home;