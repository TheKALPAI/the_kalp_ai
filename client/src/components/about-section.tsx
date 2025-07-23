import { GraduationCap, TrendingUp, Clock, Shield } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Premier Training",
      description: "Led by MD professionals trained at INIs like AIIMS, with deep academic and technical foundations",
      color: "bg-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Data Excellence",
      description: "Advanced statistical analysis and machine learning expertise",
      color: "bg-green-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines without compromising quality",
      color: "bg-amber-500"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous quality checks and plagiarism-free content",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About The KALP.AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of experienced researchers, data scientists, and academic writers dedicated to helping students and professionals achieve their research goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`${feature.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
