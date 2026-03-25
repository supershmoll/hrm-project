const CourseCard = ({ course }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        marginBottom: '10px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{course.title}</h4>
        <small style={{ color: '#888' }}>{course.type}</small>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>Category</p>
        <strong>{course.category}</strong>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
          Number of Students
        </p>
        <strong>{course.studentsCount || 'Unknown'}</strong>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
          Passed education
        </p>
        <strong>{course.passedCount || 'Unknown'}</strong>
      </div>
    </div>
  );
};

export default CourseCard;
