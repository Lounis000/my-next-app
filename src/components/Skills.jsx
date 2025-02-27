// src/components/Skills.jsx
import { useEffect } from "react";
import Image from 'next/image';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>Je possède une solide expertise dans le développement web, la création d'applications mobiles et la conception UI/UX. Mon parcours académique et professionnel m'a permis d'acquérir des compétences diversifiées et de réaliser de nombreux projets dans différents domaines.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Image src={meter1} alt="Image" />
                  <h5>Développement Web</h5>
                </div>
                <div className="item">
                  <Image src={meter2} alt="Image" />
                  <h5>Développement mobile</h5>
                </div>
                <div className="item">
                  <Image src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <Image src={meter1} alt="Image" />
                  <h5>Microsoft Office</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;
