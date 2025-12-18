import heroBackground from 'figma:asset/c913181e7e3b3ebe940d6c896db23cf13f66548d.png';
import logo from 'figma:asset/51b82a0b3b5c6608207ad1ad2e70020684c6e369.png';
import logoIcon from 'figma:asset/21e1cdde3dd7a6024ee5c79395670512f81b3459.png';
import founderImage from 'figma:asset/9dfa6d0c0fba57f27f7dfedb735e21f14a8076e9.png';
import petraAvatar from 'figma:asset/e54df7909ffdfdee3e0b7e251ae1050f2b57306c.png';
import practicalBg from 'figma:asset/a4dfac81a0457216dc1aca3e23d8dbe7efe8d6b1.png';
import partnershipBg from 'figma:asset/00ef410b113c1e535e197fa1657b4dbfc4725728.png';
import servicesBg from 'figma:asset/9481c6503360ed0342340203280a6bddb9eca20e.png';
import servicesImage from 'figma:asset/64f011c490a937142b779eeefe38fa02a136062f.png';
import missionBg from 'figma:asset/41a5ce14b7b1a97b58848c8b0152a228538b42fa.png';
import missionOffice from 'figma:asset/25576e3d21547ee13856f2ebacd12f447a37b17a.png';
import futureBg from 'figma:asset/1309be81d7ca13997f377edf40d11397e0584f8c.png';
import teamPhoto from 'figma:asset/7152fee14929793bf9dddf4c0b81d4ed4cfa3b18.png';
import ctaBg from 'figma:asset/a1a7065c5d09a9f1283387e950afbb2589aed52d.png';
import { Instagram, Twitter, Linkedin, Phone, ArrowRight, CheckCircle2, ShoppingBag, TrendingUp, ShoppingCart, Receipt, Facebook, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Navigation */}
        <nav className="px-4 md:px-12 py-6">
          <div className="flex items-center justify-between border-b border-purple-400/50 pb-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#benefits" className="text-white hover:text-purple-300 transition-colors">Benefits</a>
              <a href="#services" className="text-white hover:text-purple-300 transition-colors">Services</a>
              <a href="#results" className="text-white hover:text-purple-300 transition-colors">Results</a>
              <a href="#mission" className="text-white hover:text-purple-300 transition-colors">Mission & Vision</a>
              <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Social Icons & Phone */}
            <div className="flex items-center gap-2 md:gap-4">
              <a href="#" className="text-white hover:text-purple-300 transition-colors hidden md:block">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors hidden md:block">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors hidden md:block">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors hidden md:block">
                <Facebook size={20} />
              </a>
              <a 
                href="tel:+38630697105" 
                className="flex items-center gap-2 px-3 md:px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-purple-900 transition-colors text-sm"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">+386 30 697 105</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#benefits" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
              <a href="#services" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#results" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Results</a>
              <a href="#mission" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Mission & Vision</a>
              <a href="#about" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-white hover:text-purple-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="flex items-center gap-4 pt-4 border-t border-purple-400/50">
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-300 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-16 md:pb-24">
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12 gap-3 md:gap-4">
            <img src={logoIcon} alt="BandKAi Icon" className="h-20 w-20 md:h-32 md:w-32" />
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-white text-4xl md:text-7xl tracking-wide">BandKAi</h2>
              <p className="text-white text-sm md:text-base tracking-widest uppercase">Where Business Meets AI</p>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-white text-2xl md:text-5xl mb-4 max-w-5xl mx-auto leading-tight px-4">
              Know Exactly Where AI Can Create
              <br />
              Real Business Impact — <span className="text-purple-400 font-bold">in Just 14 Days</span>
            </h1>
            <p className="text-white text-base md:text-lg max-w-4xl mx-auto opacity-90 px-4">
              Our AI Opportunity Assessment gives you a strategic snapshot of where AI can save time, reduce costs, and boost performance — before you invest in tools or tech.
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 text-center">
              <p className="text-white text-sm md:text-base">
                Discover the highest-impact AI use cases across your company
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 text-center">
              <p className="text-white text-sm md:text-base">
                Get a department-by-department opportunity map
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 text-center">
              <p className="text-white text-sm md:text-base">
                Build your company roadmap to real, measurable AI value
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center px-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-all duration-300 text-base md:text-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 transform w-full md:w-auto justify-center">
              Start Your AI Opportunity Scan
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-purple-50 py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl text-center mb-2 text-purple-600">What Our Clients Say</h2>
          <p className="text-gray-600 text-center text-sm md:text-base">Real results from real businesses</p>
        </div>
        
        <div className="relative">
          <div className="flex gap-4 md:gap-6 animate-marquee hover:animation-paused">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Thanks to BandKAi we cut admin time by 35%,</span>
                </p>
                <p className="text-base md:text-xl">
                  I was able to move forward with clarity and confidence.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                Their support throughout the process was outstanding—I always felt heard and guided, even during the most challenging moments.
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={petraAvatar} 
                  alt="Petra" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <span className="font-semibold text-sm md:text-base">Petra</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Our team saved 20 hours per week</span>
                </p>
                <p className="text-base md:text-xl">
                  after implementing BandKAi's recommendations.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                The AI roadmap was clear, actionable, and perfectly tailored to our needs. We saw results within the first month.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  M
                </div>
                <span className="font-semibold text-sm md:text-base">Mark, CEO</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Finally, someone who speaks both business and AI.</span>
                </p>
                <p className="text-base md:text-xl">
                  No jargon, just practical solutions.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                BandKAi helped us identify AI opportunities we didn't even know existed. The assessment was eye-opening.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  S
                </div>
                <span className="font-semibold text-sm md:text-base">Sarah, Operations Director</span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Reduced costs by 40% in logistics</span>
                </p>
                <p className="text-base md:text-xl">
                  while improving accuracy and speed.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                The strategic approach made all the difference. We knew exactly what to implement first and why.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  J
                </div>
                <span className="font-semibold text-sm md:text-base">James, Logistics Manager</span>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">The clarity we gained was invaluable.</span>
                </p>
                <p className="text-base md:text-xl">
                  We went from confused to confident in just 14 days.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                BandKAi's structured approach gave us a roadmap that the entire leadership team could rally behind.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  A
                </div>
                <span className="font-semibold text-sm md:text-base">Anna, COO</span>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Thanks to BandKAi we cut admin time by 35%,</span>
                </p>
                <p className="text-base md:text-xl">
                  I was able to move forward with clarity and confidence.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                Their support throughout the process was outstanding—I always felt heard and guided, even during the most challenging moments.
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={petraAvatar} 
                  alt="Petra" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <span className="font-semibold text-sm md:text-base">Petra</span>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Our team saved 20 hours per week</span>
                </p>
                <p className="text-base md:text-xl">
                  after implementing BandKAi's recommendations.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                The AI roadmap was clear, actionable, and perfectly tailored to our needs. We saw results within the first month.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  M
                </div>
                <span className="font-semibold text-sm md:text-base">Mark, CEO</span>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg min-w-[280px] md:min-w-[500px] flex-shrink-0">
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-xl mb-2">
                  <span className="text-purple-600">Finally, someone who speaks both business and AI.</span>
                </p>
                <p className="text-base md:text-xl">
                  No jargon, just practical solutions.
                </p>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-base">
                BandKAi helped us identify AI opportunities we didn't even know existed. The assessment was eye-opening.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200 flex items-center justify-center font-semibold text-purple-700 text-sm md:text-base">
                  S
                </div>
                <span className="font-semibold text-sm md:text-base">Sarah, Operations Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practical AI Section */}
      <div 
        className="py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${practicalBg})` }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            AI isn't just theory - it's a practical tool for sectors like
            <br className="hidden md:block" />
            retail and logistics.
          </h2>
          <p className="text-white text-base md:text-lg opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Less manual work. Smarter processes. Up to 50% lower costs
          </p>
        </div>
      </div>

      {/* Benefits and Results Section */}
      <div className="bg-gray-50 py-12 md:py-20" id="benefits">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <p className="text-gray-500 text-xs md:text-sm tracking-wider uppercase mb-4 text-center">
            BENEFITS AND RESULTS
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            Save Time. Cut Costs. <span className="text-purple-600">Grow Faster.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-center text-base md:text-lg mb-8 md:mb-12">
            Practical AI solutions that save you time and money.
          </p>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <div className="bg-[#0f0a2e] text-white rounded-xl p-6 md:p-8 text-center">
              <p className="text-xl md:text-2xl"><span style={{ color: '#CA8FFF' }}>30%</span> Less Admin</p>
            </div>
            <div className="bg-[#0f0a2e] text-white rounded-xl p-6 md:p-8 text-center">
              <p className="text-xl md:text-2xl"><span style={{ color: '#CA8FFF' }}>15%</span> Lower Costs</p>
            </div>
            <div className="bg-[#0f0a2e] text-white rounded-xl p-6 md:p-8 text-center">
              <p className="text-xl md:text-2xl"><span style={{ color: '#CA8FFF' }}>40%</span> Faster Onboarding</p>
            </div>
            <div className="bg-[#0f0a2e] text-white rounded-xl p-6 md:p-8 text-center">
              <p className="text-xl md:text-2xl"><span style={{ color: '#CA8FFF' }}>2×</span> Faster Decisions</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 md:mb-16">
            <button className="border-2 border-purple-600 text-purple-600 px-6 md:px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2 font-bold w-full md:w-auto justify-center text-sm md:text-base max-w-sm">
              Take the 5-Minute Self-Check
              <ArrowRight size={20} className="flex-shrink-0" />
            </button>
          </div>

          {/* Transformation Heading */}
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center mb-8 md:mb-12">
            Here's How It Transforms Your Workweek:
          </h3>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Clarity & Focus */}
            <div>
              <h4 className="text-lg md:text-xl mb-4 md:mb-6">Clarity & Focus</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Clarity where there was confusion</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Data-driven decisions, not guesswork</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">A trusted partner at every step</p>
                </div>
              </div>
            </div>

            {/* Time & Efficiency */}
            <div>
              <h4 className="text-lg md:text-xl mb-4 md:mb-6">Time & Efficiency</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">More time for strategy and growth</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Manual work replaced by automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">A trusted partner at every step</p>
                </div>
              </div>
            </div>

            {/* Impact & Growth */}
            <div>
              <h4 className="text-lg md:text-xl mb-4 md:mb-6">Impact & Growth</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Minimal disruption. Maximum results.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Real momentum toward future-readiness</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 text-sm md:text-base">Sustainable competitive advantage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Work With BandKAi Card */}
          <div 
            className="mt-12 md:mt-20 rounded-3xl bg-center bg-no-repeat relative max-w-6xl mx-auto overflow-hidden"
            style={{ 
              backgroundImage: `url(${partnershipBg})`,
              backgroundSize: '100% 100%'
            }}
          >
            <div className="bg-gradient-to-r from-black/60 to-transparent py-12 md:py-20 lg:py-24 px-4 md:px-8 min-h-[350px] md:min-h-[450px] flex items-center justify-center">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
                {/* Left Side */}
                <div>
                  <p className="text-white text-xs tracking-widest uppercase mb-4 md:mb-6 opacity-80">
                    WHY WORK WITH BANDKAI?
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 leading-tight">
                    Real Partnership.<br />
                    Clear Results, No Hype.
                  </h3>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 md:px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm md:text-base w-full md:w-auto justify-center">
                    Explore the BandKAi 5-Step AI Method
                    <ArrowRight size={20} className="flex-shrink-0" />
                  </button>
                </div>

                {/* Right Side */}
                <div className="text-white">
                  <p className="text-sm md:text-base leading-relaxed">
                    <span className="font-semibold">At BandKAi, we don't sell hype. We bring clarity, structure, and support that helps you adopt AI with confidence.</span> We walk with you every step of the way, turning complexity into results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Transformation Section */}
      <div className="bg-white py-12 md:py-20" id="results">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-16">
              {/* Left Side - Heading */}
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                  Real Transformation Backed By <span className="text-purple-600">Industry Trends</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-8">
                  AI is no longer experimental—it's essential. And the numbers prove it.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors text-base md:text-lg">
                  Download the 2025 AI Impact Report for Your Industry
                </a>
              </div>

              {/* Right Side - Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Retail AI Boom */}
                <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingBag className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-purple-600 text-lg md:text-xl mb-2">Retail AI Boom</h3>
                  <p className="mb-2 text-sm md:text-base"><strong>$55.5B by 2030</strong></p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    The global AI in retail market will grow from $5.9B in 2022 to $55.5B by 2030 (CAGR: 28.7%).
                  </p>
                </div>

                {/* AI Boosts Revenue */}
                <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-purple-600 text-lg md:text-xl mb-2">AI Boosts Revenue</h3>
                  <p className="mb-2 text-sm md:text-base"><strong>+19% Revenue</strong></p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Retailers using AI report an average revenue increase of 19%.
                  </p>
                </div>

                {/* Checkout Gets Smarter */}
                <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-purple-600 text-lg md:text-xl mb-2">Checkout Gets Smarter</h3>
                  <p className="mb-2 text-sm md:text-base"><strong>40% Faster</strong></p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    AI-powered checkout reduces wait times by 30% and speeds up transactions by 40%.
                  </p>
                </div>

                {/* Cost Savings in Repetitive Tasks */}
                <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Receipt className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-purple-600 text-lg md:text-xl mb-2">Cost Savings in Repetitive Tasks</h3>
                  <p className="mb-2 text-sm md:text-base"><strong>Up to 50% Savings</strong></p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Automation can reduce manual repetitive tasks—cutting operational costs by up to 50%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services That Drive Results Section */}
      <div 
        className="py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${servicesBg})` }}
        id="services"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <p className="text-purple-200 text-xs tracking-widest uppercase mb-4 md:mb-6">
              OUR SERVICES
            </p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl">
              Services That Drive <span className="text-purple-400">Results</span>
            </h2>
          </div>

          {/* Services Journey Image */}
          <div className="max-w-6xl mx-auto mb-12 md:mb-20">
            <img 
              src={servicesImage} 
              alt="BandKAi AI Journey - 5 Steps from Assessment to Partnership" 
              className="w-full h-auto"
            />
          </div>

          {/* Footer Text and CTA */}
          <div className="text-center">
            <p className="text-white text-base md:text-lg mb-6 md:mb-8 px-4">
              Let's start making AI work for you, one smart step at a time.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 flex items-center gap-2 mx-auto text-sm md:text-base">
              Explore Your AI Transformation Journey Today!
              <ArrowRight size={20} className="flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div 
        className="py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${missionBg})` }}
        id="mission"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="border-t border-purple-300/30 flex-1 max-w-xs"></div>
              <p className="text-purple-200 text-xs tracking-widest uppercase">
                MISSION & VISION
              </p>
              <div className="border-t border-purple-300/30 flex-1 max-w-xs"></div>
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-4 md:mb-6 px-4">
              Built on Purpose. <span className="text-purple-400">Driven by Progress.</span>
            </h2>
            <p className="text-white text-center text-base md:text-lg px-4">
              We help traditional companies take bold, confident steps with AI—without the confusion.
            </p>
          </div>

          {/* Office Image */}
          <div className="max-w-5xl mx-auto mb-12 md:mb-16">
            <img 
              src={missionOffice} 
              alt="Modern office with futuristic AI technology" 
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="border-t border-purple-300/30 pt-6 mb-4">
                <h3 className="text-white text-xl md:text-2xl mb-4">
                  BandKAi goes beyond technology.
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                AI isn't optional anymore—it's a business necessity. We help companies cut through the noise with clear strategy, empowered teams, and real results.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="border-t border-purple-300/30 pt-6 mb-4">
                <h3 className="text-white text-xl md:text-2xl mb-4">
                  Our vision is simple.
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                To be the trusted AI partner for companies that act—not wait. We don't sell tools. We simplify AI, unlock real value, and move fast.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Future Section */}
      <div 
        className="py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${futureBg})` }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-3">
            The future isn't coming.
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl">
            It's already here—you just need the right guide.
          </p>
        </div>
      </div>

      {/* About BandKAi Section */}
      <div className="bg-gray-50 py-12 md:py-20" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div>
                <p className="text-gray-500 text-xs tracking-wider uppercase mb-6 pb-6 border-b border-gray-300">
                  ABOUT BANDKAI
                </p>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 leading-tight">
                  Rooted In Real-World Experience. <span className="text-purple-600">Built For Progress.</span>
                </h2>

                <div className="space-y-3 md:space-y-4 mb-6 text-sm md:text-base">
                  <p className="text-gray-800">
                    <strong>Born from the field—not the boardroom.</strong>
                  </p>
                  <p className="text-gray-800">
                    <strong>Practical AI that's fast, clear, and team-friendly.</strong>
                  </p>
                  <p className="text-gray-800">
                    <strong>Serving people, not just processes.</strong>
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  We work with leaders who care about their teams and long-term success. With clarity and step-by-step guidance, big change feels not just possible—but sustainable.
                </p>
              </div>

              {/* Right Side - Team Photo */}
              <div>
                <img 
                  src={teamPhoto} 
                  alt="BandKAi team of three professionals" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Move CTA Section */}
      <div 
        className="py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${ctaBg})` }}
        id="contact"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-gray-900 max-w-4xl mx-auto">
            Ready to Move <span className="font-normal">from Hesitation to</span> <strong>Momentum?</strong>
          </h2>
          
          <p className="text-gray-800 text-base md:text-lg mb-6 md:mb-8 px-4">
            Your first step is a Personalized AI Opportunity Assessment — clear, practical, and focused on ROI.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 flex items-center gap-2 mx-auto mb-4 md:mb-6 text-sm md:text-base max-w-md justify-center">
            Book your personalized AI Opportunity Assessment
            <ArrowRight size={20} className="flex-shrink-0" />
          </button>

          <p className="text-gray-700 mb-2 text-sm md:text-base px-4">
            Not ready yet? Prefer a no-pressure conversation?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              Connect directly with Boštjan
            </a>
          </p>

          <p className="text-gray-600 text-xs md:text-sm">
            Spots are limited – book your assessment today.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a0f3d] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Section - Logo and Tagline */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
              <img src={logoIcon} alt="BandKAi Icon" className="h-16 w-16 md:h-20 md:w-20" />
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-wide">BandKAi</h3>
            </div>
            <p className="text-white text-sm md:text-base tracking-widest uppercase opacity-80">
              WHERE BUSINESS MEETS AI
            </p>
          </div>

          {/* Middle Section - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-8 md:mb-12">
            {/* Navigation Column */}
            <div>
              <h4 className="text-white uppercase text-xs md:text-sm mb-4 md:mb-6 border-b border-purple-500/30 pb-3">
                NAVIGATION
              </h4>
              <div className="grid grid-cols-2 gap-x-6 md:gap-x-8">
                <ul className="space-y-3">
                  <li><a href="#benefits" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">Benefits</a></li>
                  <li><a href="#services" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">Services</a></li>
                  <li><a href="#results" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">Results</a></li>
                </ul>
                <ul className="space-y-3">
                  <li><a href="#mission" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">Mission & Vision</a></li>
                  <li><a href="#about" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">About</a></li>
                  <li><a href="#contact" className="text-white hover:text-purple-400 transition-colors text-xs md:text-sm">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Reach Us Column */}
            <div>
              <h4 className="text-white uppercase text-xs md:text-sm mb-4 md:mb-6 border-b border-purple-500/30 pb-3">
                REACH US
              </h4>
              <ul className="space-y-3">
                <li className="text-white text-xs md:text-sm">
                  <span className="opacity-70">P:</span> <a href="tel:+38630697105" className="hover:text-purple-400 transition-colors">+386 30 697 105</a>
                </li>
                <li className="text-white text-xs md:text-sm break-all">
                  <span className="opacity-70">E:</span> <a href="mailto:info@bandkai.com" className="hover:text-purple-400 transition-colors">info@bandkai.com</a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h4 className="text-white uppercase text-xs md:text-sm mb-4 md:mb-6 border-b border-purple-500/30 pb-3">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-purple-500/20 mb-6 md:mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
            <p className="text-white opacity-70 text-center md:text-left">
              © 2025 — <span className="text-purple-400">BandKAi</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-white hover:text-purple-400 transition-colors opacity-70">Impressum</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors opacity-70">Privacy Policy</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors opacity-70">Terms</a>
            </div>
            <p className="text-white opacity-70 text-center md:text-right">
              Designed & Developed by <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Katalyst CRM</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}