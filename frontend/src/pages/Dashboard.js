import { useEffect,useState } from "react";
import API from "../api/api";
import Layout from "../layout/Layout";
import SkillCard from "../components/SkillCard";

function Dashboard(){

  const [skills,setSkills]=useState([]);
  const [newSkill,setNewSkill]=useState("");

  useEffect(()=>{
    API.get("skills/")
      .then(res=>setSkills(res.data));
  },[]);

  const addSkill = async () => {

    const res = await API.post("skills/",{
      name:newSkill,
      category:"General"
    });

    setSkills([...skills,res.data]);
    setNewSkill("");
  };

  return (
    <Layout>

      <h2>Dashboard</h2>

      <div>
        <input
          placeholder="Add skill"
          value={newSkill}
          onChange={(e)=>setNewSkill(e.target.value)}
        />

        <button onClick={addSkill}>Add Skill</button>
      </div>

      <div style={{display:"flex",flexWrap:"wrap"}}>
        {skills.map(skill=>(
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

    </Layout>
  );
}

export default Dashboard;
