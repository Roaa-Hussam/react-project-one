function Skills() {
  return (
    <div className="Skills-section container">
       <h3 className="Title">SKILLS</h3>
    <div className="skill-item">
        <span>Photoshop</span>
        <input type="range" min="0" max="100" value="90" disabled/>
    </div>
    <div className="skill-item">
        <span>Illustrator</span>
        <input type="range" min="0" max="100" value="80" disabled/>
    </div>
    <div className="skill-item">
        <span>InDesign</span>
        <input type="range" min="0" max="100" value="70" disabled/>
    </div>
    <div className="skill-item">
        <span>Dreamweaver</span>
        <input type="range" min="0" max="100" value="60" disabled/>
    </div>
    <div className="skill-item">
        <span>After Effects</span>
        <input type="range" min="0" max="100" value="75" disabled/>
    </div>

</div>
  );
}

export default Skills;
