import { Button } from '@/components/ui/button';
// Logo will be replaced with SVG temporarily due to import issues
// import logoPath from '@assets/logo__1753286867730.PNG';

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
            <div className="h-24 w-24 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <svg viewBox="0 0 100 100" className="h-16 w-16 text-white">
                <circle cx="50" cy="50" r="45" fill="currentColor" />
                <text x="50" y="60" textAnchor="middle" className="text-3xl font-bold fill-blue-800">K</text>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The KALP.AI
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            What you get is more than what you pay
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
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
