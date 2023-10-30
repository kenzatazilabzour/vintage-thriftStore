import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/profile">My Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/">Product List</Link>
      &nbsp; | &nbsp;
      <Link to="/products/new">Add clothing</Link>
      &nbsp;&nbsp;
      <Link to="/cart">Shopping Cart</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
