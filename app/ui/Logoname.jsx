"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LogoName({ siteMeta }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // adjust scroll threshold
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex gap-3 items-center text-md font-medium"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/180756712?v=4"
              alt="Jaimin Acharya"
            />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <span>{siteMeta.name}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
