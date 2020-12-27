import { useEffect } from "react";
import { Card } from "react-bootstrap";

import Navigation from "./components/Navigation";
import ParallaxContainer from "./components/ParallaxContainer";
import ServicesCard from "./components/ServicesCard";
import Contact from "./components/Contact";
import Map from "./components/Map";
import ReservationForm from "./components/ReservationForm";
import SocialLinks from "./components/SocialLinks";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  useEffect(() => {}, []);

  const services = [
    {
      id: "1",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "2",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "3",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "4",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "5",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "6",
      image:
        "https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp",
      title: "Breakfast",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
  ];

  const reviews = [
    {
      id: "8",
      content:
        "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    },
    {
      id: "9",
      content: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      id: "10",
      content:
        "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”",
    },
  ];

  const galleryImages = [
    {
      id: "1",
      image:
        "https://static.wixstatic.com/media/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.webp",
    },
    {
      id: "2",
      image:
        "https://static.wixstatic.com/media/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.webp",
    },
    {
      id: "3",
      image:
        "https://static.wixstatic.com/media/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.webp",
    },
    {
      id: "8",
      image:
        "https://static.wixstatic.com/media/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.webp",
    },
    {
      id: "11",
      image:
        "https://static.wixstatic.com/media/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.webp",
    },
    {
      id: "21",
      image:
        "https://static.wixstatic.com/media/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.webp",
    },
    {
      id: "31",
      image:
        "https://static.wixstatic.com/media/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.jpg/v1/fill/w_396,h_788,al_c,q_80,usm_0.66_1.00_0.01/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.webp",
    },
  ];

  return (
    <div className="App" id="top">
      <SocialLinks />
      <nav>
        <Navigation />
      </nav>
      <header className="header center" style={{ margin: "1rem 0" }}>
        <h1>Ferofly</h1>
        <h5>--- Magnify your journey ---</h5>
      </header>
      <main>
        <section>
          <ParallaxContainer></ParallaxContainer>
        </section>
        <section id="about" className="center">
          <ReservationForm />
        </section>
        <section
          className="flex__center"
          // id="about"
          style={{
            height: "60vh",
          }}
        >
          <div>
            <Card
              className="p-3"
              style={{ maxWidth: "600px", color: "#000", border: "none" }}
            >
              <Card.Body>
                <Card.Title className="mb-4" style={{ textAlign: "center" }}>
                  ABOUT
                </Card.Title>
                <Card.Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        <section id="rooms">
          <ParallaxContainer
            messageContainer="true"
            title="OUR ROOMS"
            content="I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you."
          ></ParallaxContainer>
        </section>
        <section id="services" bg="primary" className="flex__center center">
          <div className="services__heading">
            <h5 className="card-title h5">OUR SERVICES</h5>
          </div>
          <div className="services__body">
            {services.map((element) => (
              <ServicesCard
                key={element.id}
                title={element.title}
                content={element.content}
                image={element.image}
              />
            ))}
          </div>
        </section>
        <section id="gallery" bg="primary" className="flex__center center">
          <Gallery title="GALLERY" images={galleryImages} />
        </section>
        <section id="reviews">
          <ParallaxContainer
            reviews={reviews}
            title="GUEST REVIEWS"
            carousal="true"
          ></ParallaxContainer>
        </section>
        <section id="things_to_do" className="flex__center center">
          <div className="services__heading">
            <h5 className="card-title h5">THINGS TO DO</h5>
          </div>
          <div className="services__body">
            {services.map((element) => (
              <ServicesCard
                key={element.id}
                title={element.title}
                content={element.content}
              />
            ))}
          </div>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="map" className="center">
          <Map />
        </section>
      </main>
    </div>
  );
}

export default App;
