import "../styles/skillCard.css";
function SkillCard({ skill }) {
  return (
    <div className="skill-card" >
      <div className="skill-header">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${skill.level}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;