import { motion } from "framer-motion";
import Image from "next/image";

interface Item {
  delay: number;
  text: string;
}

const items: Item[] = [
  { delay: 0.2, text: "Project Portfolio \n Showcase" },
  { delay: 0.4, text: "Project Portfolio \n Showcase" },
  { delay: 0.6, text: "Project Portfolio \n Showcase" },
  { delay: 0.8, text: "Project Portfolio \n Showcase" },
];

const Counting: React.FC = () => {
  return (
    <section className='md:px-[126px] max-w-[2560px] md:bg-[#F8F8F8] relative top-[5rem] py-20 gap-x-5 gap-y-10 parentTwo m-auto'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: item.delay }}
          className='rounded-full py-5 px-7 flex flow-row border border-[var(--light-grey)] items-center'
        >
          <div className='rounded-full bg-[var(--light-grey)] w-8 h-8 flex justify-center items-center'>
            <Image width={30} height={30} className='w-4' src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uv7gqqnre6rlfjtzqc8w" alt="done icon" />
          </div>
          <h1 className='pl-5 md:text-[14px] text-md'>{item.text.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}</h1>
        </motion.div>
      ))}
    </section>
  );
};

export default Counting;
