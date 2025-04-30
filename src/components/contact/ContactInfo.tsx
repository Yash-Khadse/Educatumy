import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
        <p className="text-gray-300">
          Have questions about our educational services? Fill out the form or contact us directly using the information below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <a 
              href="mailto:info@educatumy.com" 
              className="text-gray-300 hover:text-primary transition"
            >
              info@educatumy.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <a 
              href="tel:+15551234567" 
              className="text-gray-300 hover:text-primary transition"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Address</h4>
            <address className="text-gray-300 not-italic">
              123 Education Street,<br />
              Learning City, 10001
            </address>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Hours of Operation</h4>
        <p className="text-gray-300">
          Monday - Friday: 9am - 6pm<br />
          Saturday: 10am - 2pm<br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;