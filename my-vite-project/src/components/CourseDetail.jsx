import { useParams } from "react-router-dom";
import courses from "../data/LetsLearnData"; // Kurs verileri

function CourseDetail() {
  const { id } = useParams(); // URL parametresindeki kurs ID'sini al
  const course = courses.find((course) => course.id === parseInt(id)); // ID'ye göre kursu bul (id'yi sayıya dönüştür)

  if (!course) {
    return <div>Kurs bulunamadı.</div>;
  }

  return (
    <div className='course-detail-container'>
      <div className='course-detail'>
        <h1>{course.courseTitle}</h1>
        <img src={course.courseImage} alt={course.courseTitle} />
        <p>
          <strong>Instructor:</strong> {course.courseTeacher}
        </p>
        <p>
          <strong>Price:</strong> {course.coursePrice}
        </p>
        <p>
          <strong>Rating:</strong> {course.coursePoint}
        </p>
        <p>{course.courseDescription}</p>
      </div>
    </div>
  );
}

export default CourseDetail;
