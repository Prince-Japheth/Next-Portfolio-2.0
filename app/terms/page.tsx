import React from 'react';

export const metadata = {
  title: 'Terms of Service | Japheth Jerry',
  description: 'Terms of Service for Japheth Jerry portfolio and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 text-white max-w-4xl pt-32">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property Rights</h2>
          <p>Other than the content you own, under these Terms, Japheth Jerry and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Publishing any Website material in any other media.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
            <li>Publicly performing and/or showing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website in any way that impacts user access to this Website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. No Warranties</h2>
          <p>This Website is provided "as is," with all faults, and Japheth Jerry express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
          <p>In no event shall Japheth Jerry, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Japheth Jerry, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Severability</h2>
          <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Variation of Terms</h2>
          <p>Japheth Jerry is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law & Jurisdiction</h2>
          <p>These Terms will be governed by and interpreted in accordance with the laws of the applicable jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the jurisdiction for the resolution of any disputes.</p>
        </section>
      </div>
    </div>
  );
}
