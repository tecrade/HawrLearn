import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/EventGrid.css";

interface Event {
  id: number;
  date: { day: string; month: string };
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    date: { day: "16", month: "SEP" },
    title: "Brand & Identity Design QA with Sophie Moore",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    date: { day: "19", month: "SEP" },
    title: "Social Media Marketing Masterclass",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    date: { day: "14", month: "OCT" },
    title: "Landing Page Optimization Masterclass",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    date: { day: "20", month: "OCT" },
    title: "Business Analytics Free Webinar",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    date: { day: "21", month: "NOV" },
    title: "Business Master Class",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 6,
    date: { day: "30", month: "NOV" },
    title: "Advanced Marketing Conference",
    description:
      "Convallis vivamus ut cras porta nish velit aliquam eget in faucibus risus.",
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

function EventGrid() {
  return (
    <div className="events-grid-container">
      <Row>
        <Col md={5} className="titlecol">
          <motion.h1
            className="event-title"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="images/ovalpath.png" alt="Decorative oval" />
            Upcoming <p>Events</p>
          </motion.h1>
        </Col>
        <Col md={7} className="grid-container">
          <div className="event-grid">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="date-badge">
                    <span className="date-day">{event.date.day}</span>
                    <span className="date-month">{event.date.month}</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="event-heading">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <motion.button
                    className="join-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join event <ArrowRight className="arrow-icon" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
           
          </div>
          <motion.button
            className="event-button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next
          </motion.button>
        </Col>
      </Row>
    </div>
  );
}

export default EventGrid;