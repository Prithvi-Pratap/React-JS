import { useContext } from "react";
import { userContext } from "../context/UserContext";

function Profile(){
const {user}=useContext(userContext)

if(!user) return <div>Login Please</div>

return (
  <div>
    <h3>Welcome {user.username}</h3>
    your password is {user.password}
  </div>
)
}

export default Profile