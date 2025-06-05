import { FC, useState } from 'react';

const faqs = [
  {
    question: 'What types of computer issues do you repair?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
  {
    question: 'What is personalized nutrition counseling?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
  {
    question: 'What should I expect during my first consultation?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
  {
    question: 'How often will I need to meet with my nutritionist?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
  {
    question: 'Are the nutrition plans provided by Nutrizen evidence-based?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
  {
    question: 'Do I need to follow a strict diet plan?',
    answer:
      'Nutrizen provides tailored nutrition advice and support designed to help you reach your specific health goals, whether it’s weight management, increased energy, or improved overall well-being.',
  },
];

const About: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Introductory Section */}
      <section className="introductory-section">
        <div className="container">
          <div className="introductory-content-block">
            <div className="introductory-head">
              <div className="breadcrumb">
                <div className="button-text-lg font-600">Home / </div>
                <div className="button-text-lg font-600">About us</div>
              </div>
              <div className="introductory-title-block">
                <div className="introductory-title-wrap">
                  <h1 className="h1 font-berkshire">About us</h1>
                </div>
                <div className="introductory-text-wrap is-about">
                  <p className="text-xl">
                    At Nutrizen, wellness begins with your diet. Our goal is to help you live a healthier, vibrant life through personalized nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introductory-decorative-group">
          <div className="introductory-decorative-one">
            <img
              src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/6759864e5f6bae487081d4ef_top-view-frame-with-green-leaves%201.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="introductory-decorative-two">
            <img
              src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675987e3f784913c7fea9abd_hero-eclipse-5.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="introductory-decorative-three">
            <img
              src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675986d998aec26d74c31788_top-view-frame-with-green%202.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="introductory-decorative-four">
            <img
              src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675d01bb3c445d932b103362_Introductory%20shape-4.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="introductory-decorative-five">
            <img
              src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67598aa92c61e78ae0e8ceec_hero-eclipse-1.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="intro-video-section">
        <div className="container">
          <div className="content-layout-block">
            <div className="content-head is-content">
              <div className="content-title-block is-content-title-block">
                <div className="badge">Nutrition Counseling</div>
                <h2 className="h2">
                  More Than Nutrition, It’s a Complete Lifestyle Transformation
                </h2>
              </div>
              <div className="content-text-block is-content">
                <p className="text-lg">
                  At Nutrizen, we offer more than just dietary advice; we provide a holistic approach to achieving your health goals. Our expert guidance goes beyond nutrition to encompass.
                </p>
              </div>
            </div>
            <a href="#" className="content-video-block">
              <div className="video-image-block">
                <img
                  src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675adb0e5e392b548113a2cb_video-img.webp"
                  alt="Video Thumbnail"
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="play-button-block">
                  <div className="play-button-icon-block">
                    <img
                      src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675adb6d01e966495f2c7469_play-button.svg"
                      alt="Play Button"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section Two */}
      <section className="content-section-two">
        <div className="container">
          <div className="content-layout-block">
            <div className="content-head is-content-two">
              <div className="content-title-block is-content-two">
                <div className="badge">Our Story</div>
                <h2 className="h2">Nurturing Health, One Plate at a Time</h2>
              </div>
              <div className="content-text-block is-content-two">
                <div className="row-gap-16">
                  <p className="text-lg">
                    At the heart of our journey is a commitment to transforming lives through personalized nutrition. Our story began with a simple belief: that everyone deserves a holistic approach to wellness.
                  </p>
                  <p className="text-lg">
                    Through evidence-based methods and a genuine passion for helping others, we empower our clients to embrace healthier habits, one small step at a time. Our mission is not just about food but about cultivating a sustainable lifestyle that enriches every stage of life.
                  </p>
                </div>
                <div className="counter-widget-wrapper">
                  <div className="counter-widget">
                    <div className="inner-counter-block">
                      <div className="first-counter">
                        <h2 className="counter-text">5</h2>
                      </div>
                      <h2 className="counter-text">+</h2>
                    </div>
                    <div className="text-lg">Years Experience</div>
                  </div>
                  <div className="counter-widget">
                    <div className="inner-counter-block">
                      <div className="first-counter">
                        <h2 className="counter-text">5</h2>
                      </div>
                      <h2 className="counter-text">K+</h2>
                    </div>
                    <div className="text-lg">Satisfied Customers</div>
                  </div>
                  <div className="counter-widget">
                    <div className="inner-counter-block">
                      <div className="first-counter">
                        <h2 className="counter-text">8</h2>
                      </div>
                      <h2 className="counter-text">%</h2>
                    </div>
                    <div className="text-lg">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section Two */}
      <section className="service-section-two">
        <div className="container">
          <div className="service-layout">
            <div className="section-head">
              <div className="section-title-block">
                <div className="badge">Our Values</div>
                <h2 className="h2 font-600">
                  Transforming Lives<br />with nutrigen
                </h2>
              </div>
            </div>
            <div className="service-widget-wrapper">
              <div className="service-card-two">
                <div className="service-card-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611c0ddd836b3d804eadd2_service-icon-1.png"
                    alt="Service Icon 1"
                    className="service-card-icon-one"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611c0d369629b18e586b80_service-icon-1-w.png"
                    alt="Service Icon 1 White"
                    className="service-card-icon-two"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <div className="title-dark">
                    <h4 className="h4 font-600">Sustainable Weight Loss</h4>
                  </div>
                  <div className="text-lg">
                    Learn how to achieve and maintain a healthy weight through balanced eating and lifestyle adjustments.
                  </div>
                </div>
              </div>
              <div className="service-card-two">
                <div className="service-card-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611f02cf570c181b2ccefd_service-icon-2-p.png"
                    alt="Service Icon 2"
                    className="service-card-icon-one"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611f02274a9abc65dbe973_service-icon-2-w.png"
                    alt="Service Icon 2 White"
                    className="service-card-icon-two"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <div className="text-color-neutral-2">
                    <h4 className="h4 font-600">Enhanced Energy & Vitality</h4>
                  </div>
                  <div className="text-lg">
                    Customized programs to improve energy levels, mental clarity, and overall well-being.
                  </div>
                </div>
              </div>
              <div className="service-card-two">
                <div className="service-card-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611f02938ea5af8c1302b3_service-icon-3-p.png"
                    alt="Service Icon 3"
                    className="service-card-icon-one"
                    loading="lazy"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/67611f01321a8fe75d947ee1_service-icon-3-w.png"
                    alt="Service Icon 3 White"
                    className="service-card-icon-two"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <div className="text-color-neutral-2">
                    <h4 className="h4 font-600">Support for Specific Goals</h4>
                  </div>
                  <div className="text-lg">
                    Whether it’s managing medical conditions, improving athletic performance with recovery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-content-layout">
            <div className="section-head is-faq">
              <div className="section-title-block">
                <div className="badge">Our Mission</div>
                <h2 className="h2">
                  Transforming Lives Through Personalized Nutritionwith nutrigen
                </h2>
              </div>
            </div>
            <div className="accordion-wrapper">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="faq-head-block">
                    <div className="faq-tab-icon-block">
                      <img
                        src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675afedaae6c52546fc67a98_plus.svg"
                        alt="Open Icon"
                        className="faq-open-icon"
                        loading="lazy"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675aff2e4b4bfe4def9714fa_minus.svg"
                        alt="Close Icon"
                        className="faq-close-icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="h4 font-600">{faq.question}</div>
                  </div>
                  <div className="accordion-body">
                    <div className="accordion-description">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;