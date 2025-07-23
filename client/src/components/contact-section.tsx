import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Instagram, Upload, Briefcase } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our expert team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
            
            {/* WhatsApp */}
            <Card className="mb-6 bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+91 7846960664</p>
                    <a 
                      href="https://wa.me/917846960664" 
                      className="text-green-600 hover:text-green-700 text-sm inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send Message →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="mb-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">thekalpai2025@gmail.com</p>
                    <a 
                      href="mailto:thekalpai2025@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="mb-6 bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-gray-600">@TheKALP.AI</p>
                    <a 
                      href="https://instagram.com/TheKALP.AI" 
                      className="text-purple-600 hover:text-purple-700 text-sm inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow Us →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submission Requirements */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">For Service Requests</h4>
                <p className="text-gray-700 mb-4">Please send a detailed request including:</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Your name and contact details</li>
                  <li>• Designation, Department & Institution</li>
                  <li>• Detailed description of analysis needed</li>
                  <li>• WhatsApp contact number</li>
                  <li>• Timeline requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Submission Form Link */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Submit Your Request</h3>
            
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-8">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Upload className="w-16 h-16 text-blue-200 mx-auto" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Submission Form</h4>
                <p className="text-blue-100 mb-6">
                  Click the link below to visit our Google Form for submitting detailed analysis requirements
                </p>
                <Button 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    // This would link to the actual Google Form
                    alert('Google Form link would be configured here');
                  }}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Open Submission Form
                </Button>
              </CardContent>
            </Card>

            {/* Hiring Notice */}
            <Card className="bg-amber-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 mr-3" />
                  <h4 className="text-xl font-bold">We Are Hiring!</h4>
                </div>
                <p className="mb-4">
                  Interested candidates with expertise in statistics, data analysis, and AI/ML modeling can join our team.
                </p>
                <p className="text-sm opacity-90">
                  Looking for part-time data-driven work opportunities? Email us at 
                  <strong> thekalpai2025@gmail.com</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
