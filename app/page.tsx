"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, ChevronLeft, ChevronRight, MessageCircleCode ,MessageCircle, Instagram ,Facebook} from 'lucide-react';

export default function BusinessCard() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pebbleBayIndex, setPebbleBayIndex] = useState(0);
  const [sobhaPalmCourtIndex, setSobhaPalmCourtIndex] = useState(0);
  const [prestigeLeelaIndex, setPrestigeLeelaIndex] = useState(0);
  const [birlaAlokyaIndex, setBirlaAlokyaIndex] = useState(0);
  const [JpIndex, setJpIndex] = useState(0);

  // const [showGallery, setShowGallery] = useState(true);
  const [showPebbleBay, setShowPebbleBay] = useState(true);
  const [showSobhaPalmCourt, setShowSobhaPalmCourt] = useState(true);
  const [showPrestigeLeela, setShowPrestigeLeela] = useState(true);
  const [showBirlaAlokya, setShowBirlaAlokya] = useState(true);
  const [showJP, setShowJp] = useState(true);

  const [showInquiry, setShowInquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [expanded, setExpanded] = useState({
  testimonial1: false,
  testimonial2: false,
  testimonial3: false
});
  // gallery images links for now will add it in public later
  const pebbleBayImages = [ //kitchen
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.41.jpeg?updatedAt=1753670647138",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.41%20(1).jpeg?updatedAt=1753670647103",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.42.jpeg?updatedAt=1753670647129",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.01.30.jpeg?updatedAt=1753670651309",
  ];

   const sobhaPalmCourtImages = [ //pooja room
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.01.04%20(1).jpeg?updatedAt=1753670647082",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.01.05.jpeg?updatedAt=1753670651360",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.01.04.jpeg?updatedAt=1753670647170",
  ];

    const prestigeLeelaImages = [ //cupboards
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.13%20(1).jpeg?updatedAt=1753670651314",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.13.jpeg?updatedAt=1753670651387",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.14.jpeg?updatedAt=1753670651339",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.14%20(1).jpeg?updatedAt=1753670651394",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.14%20(2).jpeg?updatedAt=1753670651230",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.04.28%20(1).jpeg?updatedAt=1753670655456",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.04.28.jpeg?updatedAt=1753670655386",
  ];

    const birlaAlokyaImages = [ // hall
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.29.jpeg?updatedAt=1753670651361",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.29%20(1).jpeg?updatedAt=1753670651333",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.30.jpeg?updatedAt=1753670654812",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.30%20(1).jpeg?updatedAt=1753670651864",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.03.31.jpeg?updatedAt=1753670654885",
  ];

  const jpImages = [ //draws
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.42%20(1).jpeg?updatedAt=1753670647126",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.43%20(2).jpeg?updatedAt=1753670647173",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.43.jpeg?updatedAt=1753670647135",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.43%20(1).jpeg?updatedAt=1753670647131",
    "https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2012.00.44.jpeg?updatedAt=1753670647140",
  ];

  const companyServices = [
   {
    title: "Commercial & Residential Interior Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Tailored design solutions for both commercial spaces and residential homes, crafted to reflect your style and functionality needs."
  },
  {
    title: "End-to-End Interior Solutions (Turnkey Projects)",
    image: "https://static.wixstatic.com/media/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg",
    description: "Comprehensive interior services under one roof—from concept to completion—making the process seamless and hassle-free."
  },
  {
    title: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    description: "High-quality, custom-designed furniture with premium materials and flawless finishes—all at competitive pricing."
  },
  {
    title: "Residential Construction & Development",
    image: "https://static.wixstatic.com/media/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg/v1/fit/w_2520,h_1330,q_90,enc_avif,quality_auto/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg",
    description: "From architectural planning to construction execution, we deliver quality-built homes on time and with meticulous attention to detail."
  },
  {
    title: "Kitchen Interiors",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    description: "Experts in kitchen design—from sleek, modern layouts to fully customized panels and fittings tailored to your space and lifestyle"
  },
  {
    title: "Interior Renovations",
    image: "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0031.jpg?updatedAt=1751034683982",
    description: "Transform existing interiors with our renovation services—whether it's a complete overhaul or functional upgrades, we bring your space back to life beautifully"
  }
  ];

  // Navigation functions for each gallery
  const nextPebbleBayImage = () => setPebbleBayIndex((prev) => (prev + 1) % pebbleBayImages.length);
  const prevPebbleBayImage = () => setPebbleBayIndex((prev) => (prev - 1 + pebbleBayImages.length) % pebbleBayImages.length);
  
  const nextSobhaPalmCourtImage = () => setSobhaPalmCourtIndex((prev) => (prev + 1) % sobhaPalmCourtImages.length);
  const prevSobhaPalmCourtImage = () => setSobhaPalmCourtIndex((prev) => (prev - 1 + sobhaPalmCourtImages.length) % sobhaPalmCourtImages.length);
  
  const nextPrestigeLeelaImage = () => setPrestigeLeelaIndex((prev) => (prev + 1) % prestigeLeelaImages.length);
  const prevPrestigeLeelaImage = () => setPrestigeLeelaIndex((prev) => (prev - 1 + prestigeLeelaImages.length) % prestigeLeelaImages.length);

  const nextBirlaAlokyaImages = () => setBirlaAlokyaIndex((prev) => (prev + 1) % birlaAlokyaImages.length);
  const prevBirlaAlokyaImages = () => setBirlaAlokyaIndex((prev) => (prev - 1 + birlaAlokyaImages.length) % birlaAlokyaImages.length);

  const nextJpImage = () => setJpIndex((prev) => (prev + 1) % jpImages.length);
  const prevJpImage = () => setJpIndex((prev) => (prev - 1 + jpImages.length) % jpImages.length);

  const handleCall = () => {
    window.location.href = 'tel:+919535953169';
  };

  const handleSaveContact = () => {
    const vCard =`BEGIN:VCARD
VERSION:3.0
FN:V Interior
ORG:V Interior Interiors.
TEL:+919535953169
EMAIL:vinteriorblr@gmail.com
URL:https://www.vinterior.in/
END:VCARD`;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf'; //using vcf format here
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setShowInquiry(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-sm overflow-hidden">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            {/* Logo Container with subtle shine effect */}
              <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src="https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2011.55.38.jpeg?updatedAt=1753672055672" 
                alt="V Interior Interiors Logo"
                className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h1 className="text-4xl font-bold mb-2 font-sans">
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
                V
              </span>
              <span className="text-white ml-2">Interior</span>
            </h1>
            
            {/* Styling a Tagline */}
            <div className="mb-1">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium tracking-wider backdrop-blur-sm border border-white/20">
                EXPERIENCE LUXURIOUS LIVING
              </span>
            </div>
            
            <p className="text-blue-100 text-xs font-medium mt-2 opacity-90">
              Crafting dream spaces with elegance and style
            </p>
          </div>
        </div>  

        {/* adding the links of social media */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="flex justify-center space-x-4">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://wa.me/+919535953169', '_blank')}>
              <MessageCircleCode className="w-4 h-4 text-blue-600" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://www.instagram.com/dadore.in/', '_blank')}>
              <Instagram className="w-4 h-4 text-sky-500" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://www.facebook.com/dadore.interiors.5/', '_blank')}>
              <Facebook className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </div>

        {/* call now and save contact section */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleCall}
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Office
            </button>
            <button 
              onClick={handleSaveContact}
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Save Contact
            </button>
          </div>
        </div>

        {/* PEBBLE BAY GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowPebbleBay(!showPebbleBay)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>KITCHEN</span>
            <span>{showPebbleBay ? '▼' : '▶'}</span>
          </button>
          
          {showPebbleBay && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pebbleBayImages[pebbleBayIndex]} 
                  alt="Pebble Bay Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevPebbleBayImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextPebbleBayImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {pebbleBayImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === pebbleBayIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {pebbleBayImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Pebble Bay Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${pebbleBayIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setPebbleBayIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SOBHA PALM COURT GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowSobhaPalmCourt(!showSobhaPalmCourt)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>POOJA ROOM</span>
            <span>{showSobhaPalmCourt ? '▼' : '▶'}</span>
          </button>
          
          {showSobhaPalmCourt && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={sobhaPalmCourtImages[sobhaPalmCourtIndex]} 
                  alt="Sobha Palm Court Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevSobhaPalmCourtImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSobhaPalmCourtImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {sobhaPalmCourtImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === sobhaPalmCourtIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {sobhaPalmCourtImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Sobha Palm Court Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${sobhaPalmCourtIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setSobhaPalmCourtIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PRESTIGE LEELA RESIDENCY GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowPrestigeLeela(!showPrestigeLeela)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>CUPBOARDS</span>
            <span>{showPrestigeLeela ? '▼' : '▶'}</span>
          </button>
          
          {showPrestigeLeela && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={prestigeLeelaImages[prestigeLeelaIndex]} 
                  alt="Prestige Leela Residency Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevPrestigeLeelaImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextPrestigeLeelaImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {prestigeLeelaImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === prestigeLeelaIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {prestigeLeelaImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Prestige Leela Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${prestigeLeelaIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setPrestigeLeelaIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Birla alokya GAllery */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowBirlaAlokya(!showBirlaAlokya)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>HALL</span>
            <span>{showBirlaAlokya ? '▼' : '▶'}</span>
          </button>
          
          {showBirlaAlokya && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={birlaAlokyaImages[birlaAlokyaIndex]} 
                  alt="Pebble Bay Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevBirlaAlokyaImages}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextBirlaAlokyaImages}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {pebbleBayImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === birlaAlokyaIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {birlaAlokyaImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Pebble Bay Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${birlaAlokyaIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setBirlaAlokyaIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

          {/* JP Gallery */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowJp(!showJP)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>DRAWS</span>
            <span>{showJP ? '▼' : '▶'}</span>
          </button>
          
          {showJP && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={jpImages[JpIndex]} 
                  alt="JP Project Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevJpImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextJpImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {jpImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === JpIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {jpImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`JP Project Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${JpIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setJpIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* added extra 3 */}
        <div className="px-6 py-4 bg-white border-b">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">In Our Services</h3>
          <div className="grid grid-cols-1 gap-3">
            {companyServices.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover"/>
                  <div className="p-3 flex-1">
                    <h4 className="font-medium text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Our Company */}
        <div className="px-6 py-6 bg-white border-b">
          <h3 className="font-semibold text-gray-800 mb-4 text-xl">About Us</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
            Since 2017, V Interior has been transforming spaces across the region with our signature blend of luxury and functionality. Our award-winning team of designers specializes in creating bespoke residential interiors that reflect each client&apos;s personality while enhancing everyday living.
          </p>
          
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center rounded-lg">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src="https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2011.55.38.jpeg?updatedAt=1753672055672" 
                alt="V Interior Logo"
                className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300"
              />
              </div>
              <h1 className="text-4xl font-bold mb-2 font-serif tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
                  V
                </span>
                <span className="text-white ml-1">Interior</span>
              </h1>
              <p className="text-blue-100 text-sm font-light tracking-wider mb-1">EXPERIENCE LUXURIOUS LIVING</p>
              <p className="text-blue-100 text-xs font-medium opacity-90">Crafting dream spaces since 2017</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Luxury Design</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Customised Solutions</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Attention to Detail</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">customized solutions</span>
          </div>
        </div>

        {/* Inquiry Section */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowInquiry(true)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            Inquires
          </button>

          {/* Inquiry Modal */}
          {showInquiry && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <button 
                      type="submit" 
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setShowInquiry(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

          {/* Testimonials Section */}
          <div className="px-6 py-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-8 relative pb-2">
                WHAT PEOPLE SAY
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </h2>
              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      RS
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Rocky Sasmal</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial1 ? 'line-clamp-3' : ''}`}>
                      &quot;I recently had the pleasure of working with Sagar on our home renovation project. From start to finish, Sagar was professional, creative and a true pleasure to work with. His attention to detail and ability to bring our vision to life exceeded our expectations. He has a great sense of style and was able to seamlessly blend our personal taste&apos;s with his organisations own expertise to create a beautiful, iconic space. The complete Dadore team was also very responsive and communicative throughout the process, ensuring that everything was running smoothly and that we were happy with the progress. I highly recommend Sagar and Dadore to anyone looking for a talented and professional interior designer. They truly made our home a beautiful abode and I couldn&apos;t be happier with the results. Thank you Sagar!&quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial1: !prev.testimonial1}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial1 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                {/* 2nf */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      AR
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Arti S Rungta</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial2 ? 'line-clamp-3' : ''}`}>
                    &quot;  We approached V Interior based on the recommendation by our interior designer and it turned out to be exactly what we were looking for. Sagar was approachable for any query and his work style is thoroughly professional right from maintaining the check list, providing details of the work schedule, costing, etc. He listens to the requirements carefully and endevors to fulfill them with the best solutions. A glimpse of before and after work pics speak all. In a nutshell, A wholesome solution for all the services required for home renovation. &quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial2: !prev.testimonial2}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial2 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                {/* 3rd */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      DB
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Disha Bhandari</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial3 ? 'line-clamp-3' : ''}`}>
                    &quot;  It was a complete pleasure to work with the V Interior team… they are very professional, proficient and adept at the work they do. They have good processes, approachable and a helpful team with very good workers for all kind of work. The best part was that they managed to finish the work before time which is absolutely unheard of… I am very thankful to Sagar and his team for a great finish to our home. &quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial3: !prev.testimonial3}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial3 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* About Me Section - */}
          <div className="px-6 py-8 bg-white border-b">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-800 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-amber-600 rounded-full"></span>
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full transform rotate-6"></div>
                <img
                  src="https://ik.imagekit.io/9xuslizm5i/b2/WhatsApp%20Image%202025-07-24%20at%2011.55.38.jpeg?updatedAt=1753672055672" 
                  alt="Founder"
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-1">Praveen Gowda</h4>
                <p className="text-amber-600 font-medium mb-3">Founder</p>
                <div className="flex justify-center md:justify-start space-x-2 mb-4">
                  <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
                  <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-justify">
                I founded V Interior in with a singular vision: to democratize exceptional design. What began as a passion for transforming blank spaces into soulful environments has evolved into a practice that has touched hundreds of homes and commercial spaces across Bangalore.
              </p>
              
              <p className="leading-relaxed text-justify">
                With <span className="font-bold text-amber-600">12+ years of hands-on experience</span>, I&apos;ve cultivated a design philosophy that balances aesthetic excellence with functional pragmatism. My approach is deeply collaborative—working closely with clients, contractors, and craftsmen to navigate on-site challenges and deliver solutions that stand the test of time.
              </p>
              
              <div className="relative bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400 my-4">
                <div className="absolute top-0 left-0 transform -translate-y-2 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="italic text-gray-700 pl-6">
                  At V Interior, we don&apos;t just design spaces—we craft the backdrop for life&apos;s most meaningful moments
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 grid-cols-3 gap-3 mt-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">12+</div>
                <div className="text-xs font-medium text-amber-800">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">250+</div>
                <div className="text-xs font-medium text-amber-800">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-xs font-medium text-amber-800">Client Satisfaction</div>
              </div>
            </div>
          </div>

            {/* Contact section */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span>+91 9535953169</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span>vinteriorblr@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>
                  No-9/10,
                  Tumkur Main Road NH4, 
                  Makali, Bengaluru 562162</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}