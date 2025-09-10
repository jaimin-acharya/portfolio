"use client";

import { Linkedin, Github, Twitter, MailIcon, Instagram } from "lucide-react";
import { contact } from "../site";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const socialLinks = [
    { name: "X", href: contact.socials.x, Icon: Twitter },
    { name: "GitHub", href: contact.socials.github, Icon: Github },
    { name: "LinkedIn", href: contact.socials.linkedin, Icon: Linkedin },
    {name: "Instagram", href: contact.socials.instagram, Icon: Instagram},
  ];

  return (
    <section
      id="contact"
      className="py-24 dark:border-foreground/20 scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto px-4 text-center space-y-10">
        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="text-3xl text-center font-semibold tracking-tight mb-8 font-sans bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.a>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-foreground/70 mt-10">
            I&apos;m always excited to collaborate on interesting projects or
            just have a great tech conversation!
          </p>
        </motion.div>

        {/* Email Box */}
        <motion.div
          className="flex items-center justify-between px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-sm sm:text-base font-medium">
            {contact.email}
          </span>
          <a href={`mailto:${contact.email}`}>
            <MailIcon className="text-blue-500" size={18} />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4"
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
              aria-label={`Open ${name}`}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Response Note */}
        <motion.div
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-foreground/5 text-sm text-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          💬 I typically respond within 30 Minutes!
        </motion.div>
      </div>
    </section>
  );
}
