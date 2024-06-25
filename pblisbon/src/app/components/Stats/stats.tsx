import { motion } from "framer-motion";
import React from "react";

interface StatItem {
  delay: number;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  { delay: 0, value: "350+", description: "Successful projects" },
  { delay: 0.2, value: "50+", description: "Team members" },
  { delay: 0.4, value: "100+", description: "Happy clients" },
  { delay: 0.6, value: "100%", description: "Client satisfaction" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="md:px-[126px] md:bg-[#F8F8F8] relative top-[10rem] py-20 gap-y-20 m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: stat.delay }}
            className="text-center flex flex-col items-center"
          >
            <h1 className="md:text-4xl text-3xl font-bold text-[var(--orange)]">{stat.value}</h1>
            <p className="pt-3 md:text-2xl text-md text-center tracking-wider">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
