import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const handleSubmit = () => {
    setUsers([...users,user])
  };

  return (
    <div className="form-Row">
      <div>
        <h2>Registration Form</h2>
        <p><input type="text" placeholder='Enter name' onChange={(e) => setUser({...user, name:e.target.value})}></input></p>
        <p><input type="email" placeholder='Email address' onChange={(e) => setUser({...user, Email:e.target.value})}></input></p>
        <p><input type="password" placeholder='New password' onChange={(e) => setUser({...user, Password:e.target.value})}></input></p>
        <p className="s"><button onClick={handleSubmit}>Submit</button></p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
      <div>
        <h4><u>User details</u></h4>
        <table border="1">
          {users && 
          users.map((value, index) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.Email}</td>
              <td>{value.Password}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}