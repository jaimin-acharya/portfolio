"use client";

import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
  MailIcon,
} from "lucide-react";
import { contact } from "../site";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", href: contact.socials.linkedin, Icon: Linkedin },
    { name: "GitHub", href: contact.socials.github, Icon: Github },
    { name: "Instagram", href: contact.socials.instagram, Icon: Instagram },
    { name: "X", href: contact.socials.x, Icon: Twitter },
    { name: "Facebook", href: contact.socials.facebook, Icon: Facebook },
    { name: "E-Mail", href: `mailto:${contact.email}`, Icon: MailIcon },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-foreground/10 dark:border-foreground/20 scroll-mt-24 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold  tracking-tight mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Contact with me
          </h2>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {socialLinks.map(({ name, href, Icon }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${name} profile`}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg 
                 border border-foreground/10 transition-all duration-300 
                 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 
                 hover:bg-foreground/5 hover:-translate-y-1 
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            >
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-foreground text-background group-hover:scale-105 transition-transform duration-200">
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground text-sm sm:text-base truncate">
                  {name}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-foreground/40 group-hover:text-foreground/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
