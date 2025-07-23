import { Book, BarChart3, PenTool, HandHeart, Bot, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      icon: Book,
      title: "Complete Thesis Solution",
      description: "End-to-end thesis writing and research support for all academic levels.",
      color: "bg-blue-600",
      features: [
        "Postgraduation/Masters: Rs. 25,000",
        "Super-Specialization: Rs. 50,000",
        "PhD: Custom pricing based on complexity"
      ],
      timeline: "Timeline: 30-45 days for standard projects"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Professional statistical analysis with comprehensive reporting.",
      color: "bg-green-600",
      features: [
        "Basic Analysis: Rs. 8,000*",
        "Advanced Statistical Methods",
        "Custom Visualizations"
      ],
      timeline: "Timeline: 7-10 days (complexity dependent)"
    },
    {
      icon: PenTool,
      title: "Journal Article Writing",
      description: "Publication-ready research articles with expert formatting.",
      color: "bg-amber-500",
      features: [
        "Standard Article: Rs. 12,000*",
        "Bulk discounts available",
        "Journal-specific formatting"
      ],
      timeline: "Timeline: 7-10 days"
    },
    {
      icon: HandHeart,
      title: "End-to-End Journal Support",
      description: "Complete writing support with grammar and plagiarism checking.",
      color: "bg-purple-600",
      features: [
        "Rs. 15,000 + Journal APC",
        "Grammar & Plagiarism Check",
        "Journal-specific Formatting"
      ],
      timeline: "Timeline: 10-12 days"
    },
    {
      icon: Bot,
      title: "AI/ML Integration",
      description: "Advanced machine learning models for your research.",
      color: "bg-indigo-600",
      features: [
        "Additional Rs. 10,000 per request",
        "Predictive Models",
        "Classification & Regression"
      ],
      timeline: "Integrated with analysis services"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Professional grammar checking and plagiarism reporting.",
      color: "bg-red-600",
      features: [
        "Grammar & Plagiarism: Rs. 3,000",
        "Plagiarism < 20%",
        "Professional Corrections"
      ],
      timeline: "Standalone or bundled service"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive research and analysis solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`${service.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500">
                  {service.timeline}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Services</h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <strong>Data Set Cleanup:</strong> Rs. 1000 for 20 columns, Rs. 75/additional column
            </div>
            <div>
              <strong>Journal Article Derivation:</strong> 30% additional cost for first paper, 40% for two papers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
