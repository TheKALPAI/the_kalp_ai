import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Packages</h2>
          <p className="text-xl text-gray-600">Transparent pricing with no hidden costs</p>
        </div>

        {/* Student Discounts Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Save Your Money!</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">20% OFF</div>
              <div className="text-blue-100">For Bachelors/Undergraduates*</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10% OFF</div>
              <div className="text-blue-100">For Masters/Postgraduation Students*</div>
            </div>
          </div>
          <p className="text-sm text-blue-200 mt-4">*Upload valid ID card while submitting form to avail discount</p>
        </div>

        {/* Pricing Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Complete Thesis Solution */}
          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="text-2xl">Complete Thesis Solution</CardTitle>
              <p className="text-blue-100">Comprehensive thesis writing services</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Postgraduation/Masters</div>
                    <div className="text-sm text-gray-600">30-45 days delivery</div>
                  </div>
                  <div className="font-bold text-xl text-blue-600">Rs. 25,000</div>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Super-Specialization</div>
                    <div className="text-sm text-gray-600">30-45 days delivery</div>
                  </div>
                  <div className="font-bold text-xl text-blue-600">Rs. 50,000</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">PhD Scholars/Post-Doctoral</div>
                    <div className="text-sm text-gray-600">Custom timeline</div>
                  </div>
                  <Badge variant="secondary">Custom Quote</Badge>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Derivation of journal articles from thesis costs additional 30% (first paper) or 40% (two papers) of thesis cost.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Other Services */}
          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="text-2xl">Additional Services</CardTitle>
              <p className="text-green-100">Specialized research and analysis</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Basic Data Analysis</div>
                    <div className="text-sm text-gray-600">7-10 days delivery</div>
                  </div>
                  <div className="font-bold text-xl text-green-600">Rs. 8,000*</div>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">Journal Article Writing</div>
                    <div className="text-sm text-gray-600">7-10 days delivery</div>
                  </div>
                  <div className="font-bold text-xl text-green-600">Rs. 12,000*</div>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <div className="font-semibold">End-to-End Journal Support</div>
                    <div className="text-sm text-gray-600">10-12 days delivery</div>
                  </div>
                  <div className="font-bold text-xl text-green-600">Rs. 15,000+</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">AI/ML Integration</div>
                    <div className="text-sm text-gray-600">Per request</div>
                  </div>
                  <div className="font-bold text-xl text-green-600">Rs. 10,000</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>*Terms applied based on database size and complexity</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Medical Student Offer */}
          <Card className="border-2 border-blue-600">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Medical Students</h4>
                  <p className="text-sm text-gray-600">Special discount available</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Use coupon code <strong className="text-blue-600">"medica10n"</strong> for an additional 10% discount on your order.</p>
            </CardContent>
          </Card>

          {/* Referral Program */}
          <Card className="border-2 border-green-600">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Referral Program</h4>
                  <p className="text-sm text-gray-600">Refer and save money</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Use coupon code <strong className="text-green-600">"referral10"</strong> if referred by a friend or family member for 10% off.</p>
            </CardContent>
          </Card>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            <p className="text-red-800 font-semibold text-lg">
              Prices are non-negotiable unless under extraordinary circumstances
            </p>
          </div>
          <p className="text-red-700 text-sm mt-2">
            *Only one coupon can be availed per service request
          </p>
        </div>
      </div>
    </section>
  );
}
