import skills from "../data/skills";
import SectionTitle from "../components/SectionTitle";

import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="My Skills" subtitle="Here is some of my skills" />
      <div className="skill-container card">
        {skills.map((skill) => (
          
            <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
