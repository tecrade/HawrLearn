import React from 'react'
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

function EventBanner() {
  return (
    <>
      <div className='Eventbanner'>
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
              }}></motion.div>
        <Container className='Eventbannercontent'>
            <Row>
                <Col lg={6} md={12}>
                 <motion.h1
                             initial={{ scale: 0.9, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             viewport={{once:false}}
                             transition={{ duration: 0.6, delay: 0.2 }}
                            >Our Events</motion.h1>
                </Col>
                <Col>
                <motion.p
                             initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
                             whileInView={{ opacity: 1, x: 0 }} // Slide to the correct position
                             transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                             viewport={{ once: false, amount: 0.2 }} >
                              Auctor egestas risus eget dictum nunc quisque necolmerel habitant potenti sit sit euismod pellentes.
                            </motion.p>
                </Col>
            </Row>
        </Container>
      </div>
      <Row className='Eventfloatdiv'>
            <Col lg={6} md={12} className='eventbannerimg-container'>
            <motion.img 
                         src="images/eventfloatimg.png" 
                         alt="Student learning" 
                         className="img-fluid"
                         style={{ maxWidth: '100%' }}
                         initial={{ scale: 0.9, opacity: 0 }}
                         whileInView={{ scale: 1, opacity: 1 }}
                         viewport={{once:false}}
                         transition={{ duration: 0.6, delay: 0.2 }}
                       />
              <div className='floatinnerdiv'>
              <motion.h1
                             initial={{ scale: 0.9, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             viewport={{once:false}}
                             transition={{ duration: 0.6, delay: 0.2 }}
                            >Brand & Identity Design QA with Sophie Moore</motion.h1>
              <motion.p
                             initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
                             whileInView={{ opacity: 1, x: 0 }} // Slide to the correct position
                             transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                             viewport={{ once: false, amount: 0.2 }} >
                              Auctor egestas risus eget dictum nunc quisque necolmerel habitant potenti sit sit euismod pellentes.
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
                             whileInView={{ opacity: 1, x: 0 }} // Slide to the correct position
                             transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                             viewport={{ once: false, amount: 0.2 }}>Join event<img src='images/arrow-right.png'></img></motion.p>
              </div>
            </Col>
        </Row> 
      </>
  )
}

export default EventBanner