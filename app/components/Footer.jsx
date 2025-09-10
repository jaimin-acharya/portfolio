"use client";
import { ArrowUp } from "lucide-react";
import { contact } from "../site";

export default function Footer() {
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

          {/* Copyright */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()}{" "}
            {contact.author ?? (
              <>
                Made with <span className="text-red-500">❤️</span> by Jaimin
                Acharya
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
