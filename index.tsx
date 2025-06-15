import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Md Hamidul Islam</h1>
        <p className="text-xl mb-6">IT Infrastructure Manager | Cloud & Cybersecurity Specialist</p>

        <Card className="mb-6">
          <CardContent className="p-4">
            <p className="mb-2">Experienced IT professional with 23+ years in cloud, cybersecurity, and IT operations. Proven success in digital transformation, Azure migration, and reducing system downtime. Adept at disaster recovery, team leadership, and aligning IT with business goals.</p>
          </CardContent>
        </Card>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Core Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-8">
            <li>Azure Cloud</li>
            <li>Cybersecurity</li>
            <li>IT Infrastructure</li>
            <li>DevOps</li>
            <li>Disaster Recovery</li>
            <li>Project Management</li>
            <li>Team Leadership</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Experience Highlights</h2>
          <ul className="space-y-2">
            <li><strong>MSC Shipping (2018-2023):</strong> Managed IT across 15+ branches; reduced threats by 80%, led Azure migration.</li>
            <li><strong>NEXTECH (2015-2018):</strong> Maintained secure government networks.</li>
            <li><strong>Nexus Securities (2012-2015):</strong> Server & trading platform management.</li>
            <li><strong>ARISTOPHARMA (2008-2012):</strong> AD and proxy service administration.</li>
            <li><strong>NORBAN Fashion (2005-2008):</strong> Led ERP training, installed PBX systems.</li>
            <li><strong>BDCOM (2002-2005):</strong> NOC support for embassies & govt. agencies.</li>
            <li><strong>INS Ltd. (2001-2002):</strong> Broadband & cabling support.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education & Certifications</h2>
          <ul className="list-disc list-inside">
            <li>BSc in CSE - Darul Ihsan University, Dhaka</li>
            <li>Microsoft Azure Administrator (AZ-104)</li>
            <li>CCNA, MCITP, RHCSA</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Mail className="mr-2" /> h.islam24@outlook.com</li>
            <li className="flex items-center"><Phone className="mr-2" /> +880 1511444333</li>
            <li className="flex items-center"><Linkedin className="mr-2" /> <a href="https://www.linkedin.com/in/hamidul-islam-hamid/" className="text-blue-600 hover:underline">LinkedIn Profile</a></li>
          </ul>
        </section>
      </section>
    </main>
  );
}
