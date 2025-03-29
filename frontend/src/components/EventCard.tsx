import { motion } from 'framer-motion';

interface EventCardProps {
  date: { day: number; month: string };
  title: string;
  description: string;
  image: string;
}

export function EventCard({ date, title, description, image }: EventCardProps) {
  return (
    <motion.div 
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 md:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-md">
          <div className="text-2xl font-bold text-center">{date.day}</div>
          <div className="text-sm uppercase text-gray-600">{date.month}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
          Join event
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}