import "../styles/LetsLearn.css";
import PropTypes from "prop-types"; // Prop-types'ı import ediyoruz
import courses from "../data/LetsLearnData";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Helper function to split courses into groups of 4
const groupCourses = (courses) => {
  const groups = [];
  for (let i = 0; i < courses.length; i += 4) {
    const group = courses.slice(i, i + 4);
    while (group.length < 4) {
      group.push(null);
    }
    groups.push(group);
  }
  return groups;
};

// Yıldız rating komponenti
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.round(parseFloat(rating));

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className='star-icon'>
          {index < fullStars ? (
            <IoStarSharp className='filled-star' />
          ) : (
            <IoStarOutline className='empty-star' />
          )}
        </span>
      ))}
      <span className='rating-number'>({rating})</span>
    </div>
  );
};

// PropTypes tanımlaması
StarRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

function LetsLearn() {
  const groupedCourses = groupCourses(courses);

  return (
    <div className='course-container'>
      <Carousel
        className='carousel-container'
        nextIcon={
          <FaChevronRight className='carousel-button-icon carouselNextIcon' />
        }
        prevIcon={
          <FaChevronLeft className='carousel-button-icon carouselPrevIcon' />
        }
        interval={null}>
        {groupedCourses.map((group, index) => (
          <Carousel.Item key={index}>
            <div className='carousel-group'>
              <h1 className='course-group-title'>
                Kaydolmak isteyebileceğiniz diğer kurslar
              </h1>
              <div className='course-grid'>
                {group.map((course, courseIndex) =>
                  course ? (
                    <Card key={course.id} className='course-card'>
                      <Card.Img variant='top' src={course.courseImage} />
                      <Card.Body>
                        <Card.Title>{course.courseTitle}</Card.Title>
                        <Card.Text>{course.courseTeacher}</Card.Text>
                      </Card.Body>
                      <ListGroup className='list-group-flush'>
                        <ListGroup.Item className='list-group-flush-item'>
                          <StarRating rating={course.coursePoint} />
                        </ListGroup.Item>
                        <ListGroup.Item className='list-group-flush-item'>
                          <strong>Price:</strong> {course.coursePrice}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  ) : (
                    <div
                      key={`empty-${index}-${courseIndex}`}
                      className='course-card empty-card'
                    />
                  )
                )}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default LetsLearn;
