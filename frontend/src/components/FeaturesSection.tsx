import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';



const Features: React.FC = () => {
  const features = [
    {
      icon: "/images/playbutton.png",
      title: "Curated content",
      description: "Vitae aenean scelerisque sed pharetra ac pharetra."
    },
    {
      icon: "/images/rupees.png",
      title: "Affordable fees",
      description: "Vitae aenean scelerisque sed pharetra ac pharetra."
    },
    {
      icon: "/images/sms.png",
      title: "Notifications",
      description: "Vitae aenean scelerisque sed pharetra ac pharetra."
    }
  ];

  return (
    <motion.div 
      className="features-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className='footercircle one'
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}
      viewport={{ once: true, amount: 0.2 }}></motion.div>
      <motion.div className='footercircle two'
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}
      viewport={{ once: true, amount: 0.2 }}></motion.div>
      <motion.div className='footercircle three'
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}
      viewport={{ once: true, amount: 0.2 }}></motion.div>

      <motion.div className='footercircle four'></motion.div>

      <Container>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} lg={4} md={6} xs={12}>
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};


const FeatureSection: React.FC<{ reversed?: boolean }> = ({ reversed }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="feature-section">
      <Container>
        <div className="title-container" ref={titleRef}>
          <motion.h2 
            className="section-title"
            initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{once:false}}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unveiling innovative features and strategies
            <br />
            for enhanced learning in the digital age
          </motion.h2>
        </div>

        <Row className={`align-items-center ${reversed ? 'flex-row-reverse' : ''}`}>
          <Col lg={6} md={12} className="feature-image-col">
            <div className="feature-image-container" ref={imageRef}>
              <motion.div 
                className="feature-image-circle"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once:false}}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src="/images/feature1.png"
                  alt="Woman with laptop"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>
            </div>
          </Col>
          
          <Col lg={6} md={12} ref={textRef}>
            <motion.div 
              className="feature-content"
              initial={{ opacity: 0, x: reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:false}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="feature-heading">Experienced faculties</h3>
              <img src='/images/dottedwave.png'></img>
              <p className="feature-text">
                Ullamcorper sapien netus porta varius tellus ac. Nisi magna leo morbi faucibus amet potenti. Viverra libero posuere habitant consectetur mattis.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <div className="section-divider"></div>
        
        <Row className={`align-items-center ${!reversed ? 'flex-row-reverse' : ''}`}>
          <Col lg={6} md={12} className="feature-image-col">
            <div className="feature-image-container" ref={imageRef}>
              <motion.div 
                className="feature-image-circle students"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1}}
                viewport={{once:false}}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src="/images/feature2.png"
                  alt="Students"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>
            </div>
          </Col>
          
          <Col lg={6} md={12} ref={textRef}>
            <motion.div 
              className="feature-content"
              initial={{ opacity: 0, x: !reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:false}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="feature-heading">Student discussion forum</h3>
              <img src='/images/dottedwave.png'></img>
              
              <div className="feature-point">
                <h4>Personalize your brand</h4>
                <p>Effortlessly tailor your testing interface with your brand's logo.</p>
              </div>
              
              <div className="feature-point">
                <h4>Attract ideal candidates</h4>
                <p>Use branding to select candidates who align with your organization.</p>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row className={`align-items-center ${reversed ? 'flex-row-reverse' : ''}`}>
          <Col lg={6} md={12} className="feature-image-col">
            <div className="feature-image-container" ref={imageRef}>
              <motion.div 
                className="feature-image-circle"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView= {{ scale: 1, opacity: 1 }}
                viewport={{once:false}}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src="/images/feature3.png"
                  alt="Woman with laptop"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                
              </motion.div>
            </div>
          </Col>
          
          <Col lg={6} md={12} ref={textRef}>
            <motion.div 
              className="feature-content"
              initial={{ opacity: 0, x: reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:false}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="feature-heading">Purposeful assignments</h3>
              <img src='/images/dottedwave.png'></img>
              <p className="feature-text">
              Vitae aenean scelerisque sed pharetra ac pharetra a nisl arcu. Arcu a pretium semper est sed metus. Ut in sit risus egestas ultricies.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <div className="section-divider"></div>
        
        <Row className={`align-items-center ${!reversed ? 'flex-row-reverse' : ''}`}>
          <Col lg={6} md={12} className="feature-image-col">
            <div className="feature-image-container" ref={imageRef}>
              <motion.div 
                className="feature-image-circle students"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once:false}}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src="/images/feature4.png"
                  alt="Students"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>
            </div>
          </Col>
          
          <Col lg={6} md={12} ref={textRef}>
            <motion.div 
              className="feature-content"
              initial={{ opacity: 0, x: !reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{once:false}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="feature-heading">Placement guide</h3>
              <img src='/images/dottedwave.png'></img>
              <p className='feature-text'>
              Eu magna viverra interdum leo amet adipiscing. Facilisis lorem vel tincidunt egestas urna.
              </p>
              <ul className='feature-text ul'>
                <li> Event Tracking & Conversion Analysis</li>
                <li> College, Degree, & CGPA Filters</li>
                <li> CV Access & Assessment Scores</li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Container>
        <motion.div>
          <motion.div>
            
            <h4></h4>

          </motion.div>
          <motion.div></motion.div>
          <motion.div></motion.div>

        </motion.div>
      </Container>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <>
      <FeatureSection />
      <Features/>
    </>
  );
};

export default FeaturesSection;