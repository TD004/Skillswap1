function SkillCard({ skill }) {
    return (
      <div style={{
        border:"1px solid #ddd",
        borderRadius:"10px",
        padding:"15px",
        margin:"10px",
        width:"250px"
      }}>
        <h3>{skill.name}</h3>
        <p>{skill.category}</p>
        <button>Request Swap</button>
      </div>
    );
  }
  
  export default SkillCard;
  