import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/images/image 3.png";
import pic from "../assets/images/image 3 (1).png";

function HeroSection() {
  return (
    <Carousel slide={false}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={image}
          alt='i'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={pic}
          alt='i'
        />
      </Carousel.Item>
    </Carousel>
    </Carousel>
  );
}

export default HeroSection;