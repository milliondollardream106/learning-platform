import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="pt-16 text-blue-500 text-[32px] font-bold mb-6">Terms of Service</h1>
        <div>
          {/* Last Updated */}
          <div className="mb-8 text-gray-600">
            Last Updated: November 15, 2024
          </div>

          {/* Introduction */}
         <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to code2career. By accessing our website and using our services, you agree to these Terms of Service. Please read them carefully before using our platform.
            </p>
         

          {/* Acceptance of Terms */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">2. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using code2career's services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </div>

          {/* User Accounts */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">3. User Accounts</h2>
            <p className="text-gray-600">
              When creating an account, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password. code2career cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </div>

          {/* Service Usage */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">4. Service Usage</h2>
            <p className="text-gray-600">
              Our services are provided "as is" and "as available." You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage, disable, overburden, or impair our servers or networks.
            </p>
          </div>

          {/* Intellectual Property */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, features, and functionality on our platform, including but not limited to text, graphics, logos, and software, are owned by code2career and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          {/* Payment Terms */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">6. Payment Terms</h2>
            <p className="text-gray-600">
              For paid services, you agree to pay all fees or charges to your account based on our fees, charges, and billing terms in effect at the time. If you dispute any charges, you must notify us within thirty (30) days after the date of billing.
            </p>
          </div>

          {/* Termination */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">7. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>
          </div>

          {/* Contact Information */}
         <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">8. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600">Email: support@code2career.com</p>
            {/* <p className="text-gray-600">Address: [Your Company Address]</p> */}
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
