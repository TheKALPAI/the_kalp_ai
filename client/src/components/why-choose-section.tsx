import { GraduationCap, Award, Rocket, MessageCircle, Brain, Percent } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Expert Team",
      description: "Our team consists of PhD scholars and industry professionals with extensive research experience across multiple domains.",
      color: "bg-blue-600"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We ensure plagiarism-free content with comprehensive quality checks and professional formatting standards.",
      color: "bg-green-600"
    },
    {
      icon: Rocket,
      title: "Fast Turnaround",
      description: "Quick delivery times without compromising quality, with expedited options available for urgent requirements.",
      color: "bg-amber-500"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Round-the-clock customer support through multiple channels including WhatsApp, email, and phone.",
      color: "bg-purple-600"
    },
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Advanced artificial intelligence and machine learning solutions integrated with traditional research methodologies.",
      color: "bg-indigo-600"
    },
    {
      icon: Percent,
      title: "Student Discounts",
      description: "Special pricing for students with up to 20% off for undergraduates and 10% off for postgraduate students.",
      color: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose The KALP.AI?</h2>
          <p className="text-xl text-gray-600">Experience the difference of working with industry experts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <div className={`${reason.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
