const styles = {
    project: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'inline-block',
      width: '20rem',
      height: '20rem',
      padding: '0 20px',
      backgroundColor: '#f5f5f5',
    },
    projectTitle: {
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#333',
      margin: '20px 0',
    },
    projectDescription: {
      fontSize: '1.2em',
      color: '#333',
      margin: '20px 0',
    },
    projectImage: {
      width: '100%',
      height: 'auto',
      margin: '20px 0',
    },
    projectLink: {
      fontSize: '1.2em',
      color: '#333',
      margin: '20px 0',
    },
};
  
function Card() {
    return (
        <div style={styles.project}>
        <h1 style={styles.projectTitle}>Project Title</h1>
        <p style={styles.projectDescription}>Project Description</p>
        <img
            style={styles.projectImage}
            src="https://via.placeholder.com/800x400"
            alt="Project"
        />
        <a
            style={styles.projectLink}
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            Project Link
        </a>
        </div>
    );
}
  
export default Card;