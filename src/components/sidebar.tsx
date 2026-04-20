import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>

      <ul className="menu">
        <li><NavLink to="/" className={({isActive})=>isActive?"active":""}>Dashboard</NavLink></li>
        <li><NavLink to="/users" className={({isActive})=>isActive?"active":""}>Users</NavLink></li>
        <li><NavLink to="/reports" className={({isActive})=>isActive?"active":""}>Reports</NavLink></li>
       
      </ul>
    </div>
  );
};

export default Sidebar;