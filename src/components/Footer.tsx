"use client";

import Link from "next/link";

const footerLinks = {
  sana: {
    title: "Sana",
    links: [
      { label: "Overview", href: "#" },
      { label: "AI agents", href: "#" },
      { label: "Enterprise search", href: "#" },
      { label: "iOS app", href: "#" },
      { label: "Solutions", href: "#", hasDropdown: true },
      { label: "Integrations", href: "#" },
      { label: "Events", href: "#" },
      { label: "Security", href: "#" },
      { label: "Stories", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  sanaLearn: {
    title: "Sana Learn",
    links: [
      { label: "Overview", href: "#" },
      { label: "Learning management", href: "#" },
      { label: "Content creation", href: "#" },
      { label: "AI tutor", href: "#" },
      { label: "Solutions", href: "#", hasDropdown: true },
      { label: "Customer stories", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Events", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Sana AI Summit 2026", href: "#" },
      { label: "Strange Loop Podcast", href: "#" },
      { label: "Swedish AI Reform", href: "#" },
      { label: "Mission", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Cookie settings", href: "#" },
    ],
  },
};

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="6" fill="currentColor"/>
                <circle cx="30" cy="10" r="6" fill="currentColor"/>
                <circle cx="20" cy="30" r="6" fill="currentColor"/>
                <circle cx="20" cy="10" r="6" fill="currentColor"/>
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter</p>
          </div>

          {/* Sana */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{footerLinks.sana.title}</h3>
            <ul className="space-y-3">
              {footerLinks.sana.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sana Learn */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{footerLinks.sanaLearn.title}</h3>
            <ul className="space-y-3">
              {footerLinks.sanaLearn.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-gray-600">
              A workday company
            </Link>
            <span className="text-sm text-gray-400">Sana Labs AB 2026</span>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
