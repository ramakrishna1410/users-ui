import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <nav>
    <Link to="/">Dashboard</Link>
    {"|"}
    <Link to="/users">Users</Link>
    {"|"}
    <Link to="/users/add">Add user</Link>
        </nav>
    );
}
export default Navbar;