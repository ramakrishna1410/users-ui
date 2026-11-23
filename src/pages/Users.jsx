import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";

function Users()
{
    const navigate = useNavigate();
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState("");

    useEffect(()=>{
        getUsers()
        .then((response)=>{
            setUsers(response.data);
        })
        .catch((requestError)=>{
            console.error("Failed to load users:", requestError);
            setError("Could not load users. Check the API connection and try again.");
        })
        .finally(()=>{
            setLoading(false);
        });
    },[])

    return(
        <div>
            <h2>Users page</h2>
            {loading && <p>Loading users...</p>}
            {error && <p role="alert">{error}</p>}
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                        <th>Actions</th>                        
                    </tr>
                </thead>
                <tbody>
                    {!loading && !error && users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>
                                <button onClick={()=>navigate(`/users/edit:${user.id}`)}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {!loading && !error && users.length === 0 && (
                        <tr>
                            <td colSpan="5">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Users;