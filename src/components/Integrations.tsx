"use client";

import Link from "next/link";

const integrations = [
  { name: "Coursera", icon: "https://ext.same-assets.com/2498465380/3017350618.svg" },
  { name: "Google Drive", icon: "https://ext.same-assets.com/2498465380/2077239634.svg" },
  { name: "HiBob", icon: "https://ext.same-assets.com/2498465380/3704450312.svg" },
  { name: "Cornerstone", icon: "https://ext.same-assets.com/2498465380/1354498901.svg" },
  { name: "Degreed", icon: "https://ext.same-assets.com/2498465380/3354964158.svg" },
  { name: "Okta", icon: "https://ext.same-assets.com/2498465380/1868447331.svg" },
  { name: "SAP Litmos", icon: "https://ext.same-assets.com/2498465380/3571243667.svg" },
  { name: "Salesforce", icon: "https://ext.same-assets.com/2498465380/2060124673.svg" },
  { name: "Microsoft Teams", icon: "https://ext.same-assets.com/2498465380/2306857801.svg" },
  { name: "Personio", icon: "https://ext.same-assets.com/2498465380/1137533228.svg" },
  { name: "Workday", icon: "https://ext.same-assets.com/2498465380/1045756354.svg" },
  { name: "Slack", icon: "https://ext.same-assets.com/2498465380/3198422737.svg" },
];

const security = [
  { name: "Custom user roles", icon: "https://ext.same-assets.com/2498465380/1191175940.svg" },
  { name: "SCORM compliant", icon: "https://ext.same-assets.com/2498465380/21317658.svg" },
  { name: "Flexible groups", icon: "https://ext.same-assets.com/2498465380/3925634868.svg" },
  { name: "User provisioning", icon: "https://ext.same-assets.com/2498465380/3011344389.svg" },
  { name: "SOC 2 Type 2", icon: "https://ext.same-assets.com/2498465380/21597514.svg" },
  { name: "GDPR compliant", icon: "https://ext.same-assets.com/2498465380/1246315854.svg" },
  { name: "ISO 27001", icon: "https://ext.same-assets.com/2498465380/1257408313.svg" },
  { name: "SAML single sign-on", icon: "https://ext.same-assets.com/2498465380/2138389388.svg" },
  { name: "Advanced permissions", icon: "https://ext.same-assets.com/2498465380/2957259189.svg" },
  { name: "2FA with email codes", icon: "https://ext.same-assets.com/2498465380/3122632568.svg" },
  { name: "Regional deploys", icon: "https://ext.same-assets.com/2498465380/2035017529.svg" },
  { name: "Audit logging", icon: "https://ext.same-assets.com/2498465380/2165582932.svg" },
];

export default function Integrations() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <p className="text-sm text-gray-500 text-center mb-4">Enterprise-grade integrations and security</p>

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
          Connect your daily tools.<br />Automatically and securely.
        </h2>

        {/* Integrations Card */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">Connect your daily tools automatically</h3>
              <Link href="#" className="btn-secondary text-sm">
                See full integrations list
              </Link>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {integrations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">Security you can stand by</h3>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {security.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3">
                    <img src={item.icon} alt={item.name} className="w-5 h-5 opacity-60" />
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
