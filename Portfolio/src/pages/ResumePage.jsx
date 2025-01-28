import { FaFileDownload, FaBookOpen, FaCode, FaGraduationCap } from 'react-icons/fa';

export default function ResumePage() {
  const resumeUrl = "/resume/Lenworth Miller FSD Resume.pdf";

  const skills = {
    technical: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication"],
    tools: ["VS Code", "GitHub", "Gitlab", "PostMan"]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
    <div style={{ margin: '1rem', alignContent: 'center', justifyContent: 'center', textAlign: 'start', marginRight: '1rem', maxWidth: '800px', padding: '2rem' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Resume</h1>
          <p style={{ color: '#4A5568' }}>My skills and qualifications</p>
        </div>
        <a
          href={resumeUrl}
          download
          style={{
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3182CE',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2B6CB0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182CE'}
        >
          <FaFileDownload size={20} />
          Download Resume
        </a>
      </div>

      {/* Skills Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        {/* Technical Skills */}
        <section style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <FaCode style={{ color: '#2B6CB0' }} size={24} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Technical Skills</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.technical.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#EBF8FF',
                  color: '#2B6CB0',
                  borderRadius: '1rem',
                  fontSize: '0.875rem'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <FaBookOpen style={{ color: '#48BB78' }} size={24} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Tools & Technologies</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#F0FFF4',
                  color: '#38A169',
                  borderRadius: '1rem',
                  fontSize: '0.875rem'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
          
          {/* Soft Skills */}
        <section style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <FaGraduationCap style={{ color: '#805AD5' }} size={24} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Soft Skills</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.softSkills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#F5F3FF',
                  color: '#9F7AEA',
                  borderRadius: '1rem',
                  fontSize: '0.875rem'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
