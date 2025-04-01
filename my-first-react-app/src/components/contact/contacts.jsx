import Header from "../header/header";
import "./contacts.css";

export default function Contacts(val) {
//   const {name, mob, email, age} = val;  
  // console.log(val);
  return (
    <>
      {/* <div className="container"> */}
      <div className="card">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <div className="details">
          <span>{val.name}</span>
          <span>Mobile Number: {val.mob}</span>
          <span>Email ID: {val.email}</span>
          <span>Age: {val.age}</span>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
