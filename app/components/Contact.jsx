import { Mail, Linkedin, Github, Instagram, Twitter, Facebook, ArrowUpRight, Phone } from "lucide-react";
import { contact } from "../site";

export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", href: contact.socials.linkedin, Icon: Linkedin },
    { name: "GitHub", href: contact.socials.github, Icon: Github },
    { name: "Instagram", href: contact.socials.instagram, Icon: Instagram },
    { name: "X (Twitter)", href: contact.socials.x, Icon: Twitter },
    { name: "Facebook", href: contact.socials.facebook, Icon: Facebook },
    { name: "Phone", href: `tel:${contact.phone}`, Icon: Phone },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-foreground/10 dark:border-foreground/20 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <h2
            className="text-3xl font-bold tracking-tight mb-4
           bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60  bg-clip-text text-transparent"
          >
            Contact with me
          </h2>
          {/* <p className="text-xl text-foreground/70 leading-relaxed">
            {contact.availability}
          </p> */}
        </div>

        {/* Social Links */}
        <div>

          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 p-4 rounded-lg  border border-foreground/10 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full
                 bg-foreground text-background
                  group-hover:scale-105 transition-transform duration-200"
                >
                  <Icon size={18} className="bg-foreground text-background" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">{name}</div>
                  {/* <div className="text-sm text-foreground/50">
                    Connect on {name.toLowerCase()}
                  </div> */}
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-foreground/40 group-hover:text-foreground/70
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
