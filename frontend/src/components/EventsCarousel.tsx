import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EventCard } from './EventCard';

const events = [
  {
    date: { day: 20, month: 'OCT' },
    title: 'Business Analytics Free Webinar',
    description: 'Convallis vivamus at eras porta nibh velit aliquam eget in faucibus mique.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'
  },
  {
    date: { day: 16, month: 'SEP' },
    title: 'Brand & Identity Design QA with Sophie Moore',
    description: 'Convallis vivamus at eras porta nibh velit aliquam eget in faucibus mique.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    date: { day: 19, month: 'SEP' },
    title: 'Social Media Marketing Masterclass',
    description: 'Convallis vivamus at eras porta nibh velit aliquam eget in faucibus mique.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    date: { day: 25, month: 'SEP' },
    title: 'Digital Marketing Workshop',
    description: 'Convallis vivamus at eras porta nibh velit aliquam eget in faucibus mique.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  }
];

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <motion.div 
      className="w-full py-12 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold relative">
            Related events
            <div className="absolute -left-4 -right-4 -bottom-2 h-3 bg-blue-100 -z-10 rounded-full" />
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-full">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EventCard {...event} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}