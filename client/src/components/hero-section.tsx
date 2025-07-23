import { Button } from '@/components/ui/button';
const logoPath = '/logo.png';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="mb-8">
            <div className="h-32 w-32 mx-auto rounded-2xl bg-white/20 p-4 mb-6">
              <img 
                src={logoPath} 
                alt="The KALP.AI Logo" 
                className="h-full w-full object-contain filter brightness-0 invert"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The KALP.AI
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Statistical Service Simplified
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
            Professional Academic Research, Data Analysis, and AI/ML Solutions for Students and Researchers Worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors backdrop-blur-sm"
            >
              Submit Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
