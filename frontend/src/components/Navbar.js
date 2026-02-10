import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background:"#1f2937",
      color:"white",
      padding:"15px",
      display:"flex",
      justifyContent:"space-between"
    }}>
      <h2>SkillSwap</h2>

      <div>
        <Link to="/dashboard" style={{color:"white",marginRight:"15px"}}>Dashboard</Link>
        <Link to="/" style={{color:"white"}}>Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
