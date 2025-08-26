"use client";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { contact } from "../site";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: contact.socials.github, Icon: Github },
    { name: "LinkedIn", href: contact.socials.linkedin, Icon: Linkedin },
    { name: "Email", href: `mailto:${contact.email}`, Icon: Mail },
    { name: "Instagram", href: contact.socials.instagram, Icon: Instagram },
    { name: "Twitter", href: contact.socials.x, Icon: Twitter },
    { name: "Facebook", href: contact.socials.facebook, Icon: Facebook },
  ];

  return (
    <footer className="mt-0 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <a
            href="#"
            className="
             flex items-center gap-2 bg-foreground text-background font-sans px-4 py-2 rounded-lg
             shadow-lg 
             transition-all duration-200 text-sm font-medium"
          >
            <ArrowUp size={16} />
            Back to Top
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
              >
                <Icon className="w-6 h-6" size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} {contact.author ?? "Jaimin Acharya"}
          </div>
        </div>
      </div>
    </footer>
  );
}
