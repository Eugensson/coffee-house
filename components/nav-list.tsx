import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const letterAnimation = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
  }),
};

const getLetter = (name: string) => {
  const letters: React.ReactNode[] = [];

  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

export const NavList = () => {
  return (
    <ul className="flex flex-col items-center gap-8 font-primary text-4xl font-semibold text-accent uppercase">
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="flex justify-center items-center gap-2 py-4 overflow-hidden hover:text-white transition-all"
        >
          <Link href={link.href}>
            <span>{getLetter(link.name)}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
