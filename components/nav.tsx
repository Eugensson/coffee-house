import { motion } from "framer-motion";

import { NavList } from "@/components/nav-list";

const heightAnimation = {
  initial: { height: 0 },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

export const Nav = () => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-30 -top-full w-full"
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <NavList />
      </div>
    </motion.nav>
  );
};
