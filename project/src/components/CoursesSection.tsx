import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedByLogo: React.FC<{ }> = () => {
  return (
    <motion.div 
      className="trusted-by-logo"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src='/images/trusted.png'></img>

    </motion.div>
  );
};

const CourseCard: React.FC<{
  image: string;
  price: string;
  title: string;
  instructor: { name: string; avatar: string };
  tags: Array<{ name: string; duration?: string; className: string; icon:string; }>;
  delay: number;
  comingSoon?: boolean;
}> = ({ image,price, title, instructor, tags, delay, comingSoon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      viewport={{once:false}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="course-card"
    >
      <div className="course-image">
        <img src={image} alt={title} />
        <div className="course-tags">
          {tags.map((tag, index) => (
            <div key={index} className={`course-tag`}>
              <img src={tag.icon} className='coursetagicon'></img>
              {tag.name}
              {tag.duration && <span>{tag.duration}</span>}
            </div>
          ))}
        </div>
        {comingSoon && <div className="coming-soon">Coming soon</div>}
      </div>
      <div className="course-content">
        <div className="course-price">{price}</div>
        <h3 className="course-title">
          <a href="#">{title}</a>
        </h3>
        <div className="course-instructor">
          <div className="instructor-avatar">
            <img src={instructor.avatar} alt={instructor.name} />
          </div>
          <div className="instructor-name">{instructor.name}</div>
        </div>
        <div className="course-footer">
          <a href="#" className="read-more">
            Read more <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchRef, searchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="courses-section">
      <Container>
        <div className="trusted-by">
          <span className="trusted-by-label">Trusted by</span>
          <TrustedByLogo/>
        </div>

        <div className="title-container" ref={titleRef}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.6 }}
          >
            Explore our professional courses
            <motion.svg 
              className="title-underline" 
              width="100%" 
              height="10" 
              viewBox="0 0 400 10" 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{once:false}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <path 
                d="M0,5 C100,0 300,10 400,5" 
                stroke="#4cc9f0" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.h2>
        </div>

        <div ref={searchRef}>
          <motion.div 
            className="search-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="search-input">
              <Search size={20} className="search-icon" />
              <input type="text" placeholder="Search for courses..." />
            </div>
            <div className="filter-dropdown">
              <button>
                <img src='/images/bookmark.png'></img>
                <span>&nbsp;Category</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="filter-dropdown">
              <button>
                <img src='/images/person.png'></img>
                <span>&nbsp;Teacher</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        <Row className='g-4'>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card1.png"
              price="₹ 499.00 INR"
              title="Introduction to lighting on illustration"
              instructor={{ name: "John Carter", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }}
              tags={[
                { name: "Illustration", className: "tag-illustration",icon:"/images/illustration.png" },
                { name: "8hr 21m", className: "tag-duration" ,icon:"/images/clock.png"}
              ]}
              delay={1}
            />
          </Col>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card2.png"
              price="₹ 599.00 INR"
              title="Design 101: How to design a great brand"
              instructor={{ name: "Lily Woods", avatar: "https://randomuser.me/api/portraits/women/44.jpg" }}
              tags={[
                { name: "Design", className: "tag-design",icon:"/images/pencil.png"},
                { name: "10hr 30m", className: "tag-duration",icon:"/images/clock.png"}
              ]}
              delay={2}
            />
          </Col>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card3.png"
              price="₹ 599.00 INR"
              title="Tech stack 101: How to choose the right framework"
              instructor={{ name: "Mike Warren", avatar: "https://randomuser.me/api/portraits/men/86.jpg" }}
              tags={[
                { name: "Development", className: "tag-development",icon:"/images/developer.png" },
                { name: "12hr 40m", className: "tag-duration" ,icon:"/images/clock.png"}
              ]}
              delay={3}
            />
          </Col>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card4.png"
              price="₹ 299.00 INR"
              title="Marketing 101: Inbound marketing strategies"
              instructor={{ name: "Sophie Moore", avatar: "https://randomuser.me/api/portraits/women/65.jpg" }}
              tags={[
                { name: "Marketing", className: "tag-marketing",icon:"/images/market.png"},
                { name: "8hr 20m", className: "tag-duration",icon:"/images/clock.png" }
              ]}
              delay={4}
            />
          </Col>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card5.png"
              price="₹ 499.00 INR"
              title="Photography 101: Exposure and white balance"
              instructor={{ name: "Matt Cannon", avatar: "https://randomuser.me/api/portraits/men/22.jpg" }}
              tags={[
                { name: "Photography", className: "tag-photography",icon:"/images/camera.png" },
                { name: "12hr 40m", className: "tag-duration",icon:"/images/clock.png" }
              ]}
              delay={5}
              comingSoon={true}
            />
          </Col>
          <Col lg={4} md={6}>
            <CourseCard 
              image="/images/card6.png"
              price="₹ 649.00 INR"
              title="Introduction to personal finances for freelancers"
              instructor={{ name: "Andy Smith", avatar: "https://randomuser.me/api/portraits/men/57.jpg" }}
              tags={[
                { name: "Business", className: "tag-business",icon:"/images/store.png" },
                { name: "9hr 40m", className: "tag-duration",icon:"/images/clock.png" }
              ]}
              delay={6}
            />
          </Col>
        </Row>

        <div className="btn-container">
          <motion.a 
            href="#" 
            className="explore-all-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore all courses
          </motion.a>
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;