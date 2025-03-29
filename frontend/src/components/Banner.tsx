import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

interface FeatureTagProps {
  url: string;
  x: number;
  y: number;
}

const BannerTag: React.FC<FeatureTagProps> = ({ url,x, y}) => {

  return (
    <motion.div
      className="banner-tag"
      style={{ 
        right: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, y: 50 }}  // Start from 50px below
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{once:false}} // Move to actual position
      transition={{ duration: 1.0, delay: 0.1 }}
    >
    <img src={url}></img>
    </motion.div>
  );
};


const Banner: React.FC = () => {
  return (
    <div className="banner">
      <motion.div className="circle circle-1"
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      viewport={{once:false}}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}></motion.div>
      <motion.div className="circle circle-2"
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      viewport={{once:false}}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}></motion.div><motion.div className="circle circle-3"
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      viewport={{once:false}}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}></motion.div><motion.div className="circle circle-4"
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      viewport={{once:false}}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}></motion.div><motion.div className="circle circle-5"
      initial={{ opacity: 0, scale: 0.5, y: 20 }} // Start faded out and slightly below
      viewport={{once:false}}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0, // Moves to actual position
        transition: { duration: 1, ease: "easeOut" }, // Smooth entrance
      }}></motion.div>
    
      
      <Container className="banner-content">
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <motion.h1
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{once:false}}
             transition={{ duration: 0.6, delay: 0.2 }}
            >Your one stop solution to unlock limitless learning</motion.h1>
            <motion.p
             initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
             whileInView={{ opacity: 1, x: 0 }} // Slide to the correct position
             transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
             viewport={{ once: false, amount: 0.2 }} >
              We are focussed on providing modern-day technical skillsets for the
              country's budding talents. We believe in live interactions and project-based
              teaching methods which guarantee proper skill acquisition.
            </motion.p>
            <motion.button className="demo-btn"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{once:false}}
            transition={{ duration: 0.6, delay: 0.2 }}>Schedule a demo</motion.button>
          </Col>
          <Col lg={6} md={12} className="banner-image">
            <BannerTag url="/images/bannertag1.png" x={60} y={30}/>
            <BannerTag url="/images/bannertag2.png" x={5} y={50}/>
            <BannerTag url="/images/bannertag3.png" x={5} y={65}/>
           
           
            <motion.img 
              src="/images/bannermodel.png" 
              alt="Student learning" 
              className="img-fluid rounded-circle"
              style={{ maxWidth: '100%' }}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{once:false}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;