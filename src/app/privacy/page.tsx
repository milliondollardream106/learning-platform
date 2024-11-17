import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="pt-16 text-blue-500 text-[32px] font-bold mb-6">Privacy Policy</h1>
        <div>
        
           {/* Last Updated */}
           <div className="mb-8 text-gray-600">
            Last Updated: November 15, 2024
          </div>

        <div className="space-y-8">
          <p className="text-black">
            At code2career ("code2career" "we" or "us") is committed to protecting your privacy. 
            This Privacy Policy explains the methods and reasons we collect, use, disclose, 
            transfer, and store your information. If you have any questions about the contents 
            of this policy, don't hesitate to contact us.
          </p>

          <p className="text-black">
            If you do not consent to the collection and use of information from or about you 
            in accordance with this Privacy Policy, then you are not permitted to use code2career 
            or any services provided on https://code2career.com.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Applicable Law</h2>
            <p className="text-black">
              code2career is headquartered in the United States of America. By viewing any content 
              or otherwise using the services offered by code2career, you consent to the transfer 
              of information to the United States of America to the extent applicable, and the 
              collection, storage, and processing of information under USA law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Information We Collect</h2>
            <p className="text-black">Information you submit: We store information you provide on this site 
            via forms, surveys, or any other interactive content. This information commonly 
            includes, but is not limited to, name and email address.</p>

            <p className="text-black">Log Files: We collect information when you use services provided 
            on our site. This information may include your IP address, device and software 
            characteristics, page views, referral URLs, and carrier information.</p>

            <p className="text-black">Cookies: We use cookies and related technologies to keep track 
            of user preferences and activity. Most Internet browsers automatically accept 
            cookies.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Third Party Services</h2>
            <p className="text-black">
              This site contains links to other websites not owned by code2career. We are not 
              responsible for the privacy policies of third-party services. Third-party services 
              will only collect, use, and disclose your information to the extent necessary to 
              allow them to perform their intended services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Children and COPPA</h2>
            <p className="text-black">
              code2career is committed to complying with the Children's Online Privacy Protection 
              Act (COPPA). We do not use our services to intentionally solicit data from or 
              market to children under the age of 13.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Your Choices</h2>
            <p className="text-black">Do Not Track Settings: If you enable Do Not Track settings 
            in your browser, code2career will not use information about websites you visit, 
            other than our site.</p>

            <p className="text-black">Email Communication Opt-Out: You can unsubscribe from promotional 
            emails by clicking the Unsubscribe link at the bottom of every email.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-blue-500">Contact Us</h2>
            <p className="text-black">
              If you would like additional information about this privacy policy, please 
              visit our homepage at https://code2career.com or contact us at privacy@code2career.com.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
