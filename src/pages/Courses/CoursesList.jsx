import CourseCard from '../../components/CourseCard/CourseCard';
const CoursesList = ({ courses }) => {
  return (
    <>
      <p>{courses.length} courses found</p>
      <div className="courses-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default CoursesList;
