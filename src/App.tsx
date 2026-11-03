/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Compass,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  X,
  Play,
  CheckCircle2,
  ChevronRight,
  Instagram
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* IMAGES REPOSITORY                                                          */
/* All images are centralized here for easy swapping.                         */
/* Local files are stored in /public/images/ and served directly.            */
/* -------------------------------------------------------------------------- */
export const IMAGES = {
  // Hero assets (kept as requested)
  heroSmallHeadingImage: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91126dae-53d0-49d3-b421-2b3d436408b8_320w.png",
  heroVideo: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779682946127-64f8684a-b85f-4722-9f37-cc3ca5858b50.mp4",
  negotiationVideo: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779255254276-22e12670-bcb8-423c-b49a-84dd10414eb9.mp4",

  // Process cards
  process1: "/images/process-1.jpg",
  process2: "/images/process-2.jpg",
  process3: "/images/process-3.jpg",

  // Portfolio work cards
  workMumbaiLiving: "/images/work-mumbai-living.jpg",
  workPuneVilla: "/images/work-pune-villa.jpg",
  workGoaKitchen: "/images/work-goa-kitchen.jpg",
  workBengaluruBedroom: "/images/work-bengaluru-bedroom.jpg",

  // Numbers section background
  statsBg: "/images/stats-bg.jpg",

  // Designers
  designerRohan: "/images/designer-rohan.jpg",
  designerMeera: "/images/designer-meera.jpg",
  designerKabir: "/images/designer-kabir.jpg",
};

/* -------------------------------------------------------------------------- */
/* SITE CONTENT (Simple, Clear, Professional English for Interior Studio)     */
/* -------------------------------------------------------------------------- */
export const siteData = {
  brand: {
    name: "Aura Interiors India",
    taglineDevanagari: "आपका घर, आपकी कहानी",
    taglineEnglish: "Beautiful interiors for the way you live.",
    headOffice: "Level 14, One World Center, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    contactNumber: "+91 98201 44880",
    contactEmail: "hello@aurainteriors.in",
    whatsappNumber: "919820144880",
    instagramUrl: "https://instagram.com/aurainteriorsindia",
  },
  trustBadges: [
    { label: "Free 3D Design", icon: Sparkles, detail: "See your rooms in 3D before starting" },
    { label: "10-Year Warranty", icon: ShieldCheck, detail: "Full warranty on all custom woodwork" },
    { label: "On-Time Handover", icon: Clock, detail: "Move into your ready home on schedule" },
    { label: "Vastu Friendly", icon: Compass, detail: "Thoughtfully planned for light and peace" },
  ],
  designers: [
    {
      name: "Rohan Deshmukh",
      city: "Mumbai",
      role: "Lead Interior Designer",
      avatar: IMAGES.designerRohan,
      quote: "We design open living rooms where warm natural light fills every corner.",
      projects: "Worli High-Rise Flats, Bandra Sea Duplexes"
    },
    {
      name: "Meera Iyer",
      city: "Pune",
      role: "Space Planner",
      avatar: IMAGES.designerMeera,
      quote: "We plan functional kitchens and peaceful garden courtyards for families.",
      projects: "Koregaon Park Villas, Assagao Open Kitchens"
    },
    {
      name: "Kabir Malhotra",
      city: "Bengaluru",
      role: "3D Visualiser",
      avatar: IMAGES.designerKabir,
      quote: "You see exact materials, lighting and colors in 3D before we cut wood.",
      projects: "Whitefield Bedroom Suites, Indiranagar Homes"
    }
  ],
  stats: [
    { value: 12, suffix: "", label: "Years of Experience", subtext: "Designing warm and functional homes across India since 2014." },
    { value: 250, suffix: "+", label: "Homes Designed", subtext: "Complete apartments, private villas and luxury penthouses." },
    { value: 150, suffix: "+", label: "Happy Families", subtext: "Living in peaceful spaces created just for their lifestyle." },
    { value: 98, suffix: "%", label: "Client Satisfaction", subtext: "Most of our new homeowners come from friendly recommendations." },
  ],
  steps: [
    {
      index: "01",
      title: "Meet and Plan",
      subtitle: "Free Visit • Measurements • Budget",
      desc: "We visit your home, take measurements and listen to your ideas. We then plan a design that fits your budget.",
      type: "image",
      asset: IMAGES.process1,
      alt: "Interior designer meeting client for home measurements and planning"
    },
    {
      index: "02",
      title: "Design and 3D Preview",
      subtitle: "Layout • 3D Views • Materials • Vastu",
      desc: "You see your rooms in 3D before we start work. You choose colors, materials and furniture with our help.",
      type: "image",
      asset: IMAGES.process2,
      alt: "Reviewing 3D interior renders and material moodboard"
    },
    {
      index: "03",
      title: "Build and Handover",
      subtitle: "Carpentry • Fitting • On-Time Delivery",
      desc: "Our team builds and fits everything with care. We hand over a clean, ready home on the promised date.",
      type: "video",
      asset: IMAGES.negotiationVideo,
      alt: "On-site carpentry installation and clean home handover"
    }
  ],
  portfolio: [
    {
      id: "mumbai-living",
      title: "Modern Living Room",
      city: "Mumbai",
      locality: "Worli",
      specs: "3BHK • 1,450 sq ft",
      cost: "₹18 Lakh",
      image: IMAGES.workMumbaiLiving,
      tag: "Vastu Friendly",
      highlight: "Fluted teak panels, warm cove lighting, and Italian travertine wall finish."
    },
    {
      id: "pune-villa",
      title: "Heritage-Style Villa",
      city: "Pune",
      locality: "Koregaon Park",
      specs: "4BHK Villa • 3,200 sq ft",
      cost: "₹42 Lakh",
      image: IMAGES.workPuneVilla,
      tag: "Vastu Friendly",
      highlight: "Restored antique teak wood pillars, hand-crafted brass pendant lights, and peaceful courtyard."
    },
    {
      id: "goa-kitchen",
      title: "Luxury Modular Kitchen",
      city: "Goa",
      locality: "Assagao",
      specs: "Open Kitchen • 400 sq ft",
      cost: "₹12 Lakh",
      image: IMAGES.workGoaKitchen,
      tag: "Vastu Friendly",
      highlight: "Matte sage green cabinets, waterfall quartz breakfast island, and soft warm under-counter lighting."
    },
    {
      id: "bengaluru-bedroom",
      title: "Calm Master Bedroom",
      city: "Bengaluru",
      locality: "Whitefield",
      specs: "Bedroom Suite • 380 sq ft",
      cost: "₹9 Lakh",
      image: IMAGES.workBengaluruBedroom,
      tag: "Vastu Friendly",
      highlight: "Custom boucle padded headboard with hidden night lighting and fluted oak side tables."
    }
  ],
  testimonials: [
    {
      client: "Priya S.",
      location: "Worli, Mumbai",
      project: "3BHK Modern Living Room",
      feedback: "They designed our 3BHK in Worli in just 45 days. The carpentry and lighting quality is top notch."
    },
    {
      client: "Arjun K.",
      location: "Koregaon Park, Pune",
      project: "4BHK Heritage Villa Interior",
      feedback: "We loved seeing the 3D designs before starting work. The heritage woodwork in our villa looks stunning."
    },
    {
      client: "Neha R.",
      location: "Whitefield, Bengaluru",
      project: "Master Bedroom Suite & Modular Kitchen",
      feedback: "The team finished our master bedroom suite right on time. Great attention to details and clean handover."
    }
  ]
};

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consultationData, setConsultationData] = useState({
    name: "",
    phone: "",
    city: "Mumbai",
    projectScope: "3BHK Apartment Interior",
    preferredDate: "2026-11-20",
    timeSlot: "Morning (10:30 AM - 12:30 PM)",
    budgetRange: "₹15 Lakh - ₹25 Lakh"
  });

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const processVideoRef = useRef<HTMLVideoElement | null>(null);
  const portfolioTrackRef = useRef<HTMLDivElement | null>(null);
  const portfolioSectionRef = useRef<HTMLDivElement | null>(null);
  const statsContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize GSAP & ScrollTrigger
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // 1. Vector Shapes SVG Drawing Animations
    const svgPath1 = document.getElementById('svg-flow-1') as SVGPathElement | null;
    const svgPath2 = document.getElementById('svg-flow-2') as SVGPathElement | null;
    const svgPathVert = document.getElementById('svg-flow-vertical') as SVGPathElement | null;

    [svgPath1, svgPath2, svgPathVert].forEach((path) => {
      if (!path) return;
      try {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          }
        });
      } catch (e) {
        console.error("SVG path length calculation error:", e);
      }
    });

    // 2. Hero Headline Reveal: gs-title reveal from y: 120 with rotationZ: 3
    gsap.fromTo(
      ".gs-title",
      { y: 120, rotationZ: 3, opacity: 0 },
      { y: 0, rotationZ: 0, opacity: 1, duration: 1.4, ease: "power4.out", stagger: 0.08 }
    );

    // 3. Hero Small Image Width Reveal: from 0 to 128px (md) via GSAP
    const targetWidth = window.innerWidth >= 768 ? 128 : 84;
    gsap.fromTo(
      ".hero-small-image",
      { width: 0, opacity: 0 },
      { width: targetWidth, opacity: 1, duration: 1.3, ease: "expo.out", delay: 0.5 }
    );

    // 4. Hero Video Parallax: data-speed="0.8"
    if (heroVideoRef.current) {
      gsap.to(heroVideoRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroVideoRef.current.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // 5. Quote Section: gs-reveal-text upward reveal with rotate-2
    const revealTexts = document.querySelectorAll(".gs-reveal-text");
    revealTexts.forEach((el) => {
      gsap.fromTo(
        el,
        { y: "110%", rotate: 2, opacity: 0 },
        {
          y: "0%",
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 6. Stats Section Counters (from 0 to 12, 250, 150, 98)
    if (statsContainerRef.current) {
      const counters = statsContainerRef.current.querySelectorAll(".gs-stat-counter");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val).toLocaleString('en-IN');
          }
        });
      });
    }

    // 7. Process Step Cards: Staggered gs-step-card sliding in from x: 50 or -50
    const stepCards = document.querySelectorAll(".gs-step-card");
    stepCards.forEach((card, idx) => {
      const fromX = idx % 2 === 0 ? -50 : 50;
      gsap.fromTo(
        card,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 8. Horizontal-Scroll Portfolio Section (PINNED SCROLL)
    if (portfolioTrackRef.current && portfolioSectionRef.current) {
      const track = portfolioTrackRef.current;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: portfolioSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        }
      });

      // Cards bob vertically (y: 35 to -35) during horizontal scroll
      const cards = track.querySelectorAll(".gs-portfolio-card");
      cards.forEach((card, index) => {
        const yOffset = index % 2 === 0 ? 35 : -35;
        gsap.fromTo(
          card,
          { y: yOffset },
          {
            y: -yOffset,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: portfolioSectionRef.current,
              start: "top top",
              end: () => `+=${getScrollAmount()}`,
              scrub: 1.2
            }
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  // IntersectionObserver for video "loop-in-view": play at >35% visible, pause when not
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0.35] }
    );

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);

    return () => observer.disconnect();
  }, []);

  // Build card video hover behavior
  const handleProcessMouseEnter = () => {
    if (processVideoRef.current) {
      processVideoRef.current.play().catch(() => {});
    }
  };

  const handleProcessMouseLeave = () => {
    if (processVideoRef.current) {
      processVideoRef.current.pause();
      processVideoRef.current.currentTime = 0;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hello Aura Interiors,\n\nI would like to book a free design consultation:\n- Name: ${consultationData.name}\n- Phone: ${consultationData.phone}\n- City: ${consultationData.city}\n- Project: ${consultationData.projectScope}\n- Date: ${consultationData.preferredDate}\n- Budget: ${consultationData.budgetRange}\n\nPlease let me know your available slots.`
      );
      window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F5F0] text-neutral-900 selection:bg-[#E6A756] selection:text-white">
      {/* -------------------------------------------------------------------- */}
      {/* LAYER 0 (FIXED): SVG FLUID BACKGROUND LINES                         */}
      {/* -------------------------------------------------------------------- */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          id="svg-flow-1"
          d="M -100 200 C 300 100, 600 500, 1100 300"
          fill="none"
          stroke="#E6A756"
          strokeWidth="1.7"
          strokeOpacity="0.3"
        />
        <path
          id="svg-flow-2"
          d="M -100 600 C 400 800, 500 200, 1100 700"
          fill="none"
          stroke="#E6A756"
          strokeWidth="1.5"
          strokeOpacity="0.2"
        />
        <path
          id="svg-flow-vertical"
          d="M 50,0 C 100,200 -50,400 150,800"
          fill="none"
          stroke="#E6A756"
          strokeWidth="1.4"
          strokeOpacity="0.25"
        />
      </svg>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 2: NAVIGATION (FIXED Z-50 WITH MIX-BLEND-DIFFERENCE)          */}
      {/* Logo: Aura Interiors India                                          */}
      {/* Links: About, Our Numbers, How We Work, Our Work, Contact           */}
      {/* Button: Book Free Consultation                                      */}
      {/* -------------------------------------------------------------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-12 py-5 flex items-center justify-between gap-8 pointer-events-auto">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="font-serif-display text-xl md:text-2xl text-white tracking-tight whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {siteData.brand.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/90">
          <a href="#about" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            About
          </a>
          <a href="#numbers" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Our Numbers
          </a>
          <a href="#how-we-work" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            How We Work
          </a>
          <a href="#our-work" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Our Work
          </a>
          <a href="#contact" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Contact
          </a>
        </div>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium text-white border border-white/60 hover:bg-white hover:text-black transition-all cursor-pointer whitespace-nowrap"
          >
            Book Free Consultation
          </button>
        </div>
      </nav>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 1: SECTION CONTENT                                            */}
      {/* -------------------------------------------------------------------- */}
      <main className="relative z-10">

        {/* ================================================================= */}
        {/* SECTION 1: HERO                                                   */}
        {/* Headline: "Beautiful interiors for [Image] the way you live."     */}
        {/* Devanagari tagline: "आपका घर, आपकी कहानी"                         */}
        {/* ================================================================= */}
        <section className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full pt-8 md:pt-14">
            {/* Devanagari Tagline */}
            <div className="overflow-hidden mb-4">
              <span className="gs-title inline-block font-devanagari text-base md:text-xl text-[#E6A756] font-medium tracking-wide">
                {siteData.brand.taglineDevanagari}
              </span>
            </div>

            {/* Main Headline with Animated Small Image */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] tracking-tight text-neutral-900">
              <span className="line-wrapper">
                <span className="gs-title inline-block">Beautiful interiors for</span>
              </span>{" "}
              {/* Small hero image (width animates 0 to 128px via GSAP) */}
              <span className="hero-small-image inline-block overflow-hidden align-middle mx-1 md:mx-2 rounded-full h-10 md:h-16 w-0 border border-[#E6A756]/60 shadow-md bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
                <img
                  src={IMAGES.heroSmallHeadingImage}
                  alt="Luxury Home Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="line-wrapper">
                <span className="gs-title inline-block text-neutral-900">the way you live.</span>
              </span>
            </h1>

            {/* Subtitle & Action Buttons */}
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-neutral-300/60">
              <p className="max-w-xl text-neutral-700 text-base md:text-lg font-light leading-relaxed">
                Interior design for homes, offices and shops across India.
              </p>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all text-xs uppercase tracking-[0.18em] font-medium shadow-md flex items-center gap-2 cursor-pointer"
                >
                  Book Free Consultation
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>

                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hello%20Aura%20Interiors%20India%2C%20I%20would%20like%20to%20book%20a%20free%20home%20design%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-700/90 text-white hover:bg-emerald-800 transition-all text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Hero Video Main */}
          <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto h-[480px] md:h-[620px] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
            <video
              ref={heroVideoRef}
              src={IMAGES.heroVideo}
              muted
              playsInline
              preload="metadata"
              data-speed="0.8"
              className="w-full h-full object-cover scale-110 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E6A756] animate-ping" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/90">
                Worli, Mumbai · Luxury Home Interior
              </span>
            </div>

            <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white/90 text-xs tracking-wider">
              Free 3D Design · 10-Year Warranty
            </div>
          </div>

          {/* Trust Badges Strip */}
          <div className="max-w-6xl mx-auto w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-neutral-300/60">
            {siteData.trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-neutral-800">
                  <div className="w-9 h-9 rounded-full bg-[#E6A756]/15 flex items-center justify-center shrink-0 text-[#B87D2B]">
                    <IconComp className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-neutral-900">{badge.label}</p>
                    <p className="text-[11px] text-neutral-500">{badge.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 2: ABOUT (QUOTE AND DESIGNERS)                            */}
        {/* ================================================================= */}
        <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 jaali-pattern border-b border-neutral-300/60">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Col-span-8: Split Heading & Quote */}
            <div className="col-span-12 lg:col-span-8 pr-0 lg:pr-8">
              <div className="overflow-hidden mb-4">
                <span className="gs-reveal-text inline-block text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                  Our Philosophy
                </span>
              </div>

              <blockquote className="overflow-hidden">
                <h2 className="gs-reveal-text font-serif-display text-3xl sm:text-5xl lg:text-5xl text-neutral-900 leading-[1.2] tracking-tight">
                  “A good home feels like you. We design spaces that match your family, your taste and your budget.”
                </h2>
              </blockquote>

              <p className="mt-8 text-neutral-700 text-base md:text-lg font-light leading-relaxed">
                We believe good design makes everyday life peaceful. Our team listens to your habits, your family needs and your style preferences. We take care of everything from false ceilings and mood lighting to custom woodwork and fittings.
              </p>

              {/* City Hubs */}
              <div className="mt-10 pt-8 border-t border-neutral-300/70 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-neutral-500">
                <span className="text-neutral-900 font-semibold">Design Studios:</span>
                {["Mumbai", "Pune", "Bengaluru", "Hyderabad", "Delhi NCR", "Goa"].map((c, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="text-neutral-800">{c}</span>
                    {i < 5 && <span className="text-neutral-300">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Col-span-4: Our Designers List */}
            <div className="col-span-12 lg:col-span-4 bg-[#F2F0EA]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-300/80">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-300/80">
                <h3 className="font-serif-display text-xl text-neutral-900">Our Designers</h3>
                <span className="text-[11px] uppercase tracking-wider text-[#B87D2B] font-medium">Pan-India</span>
              </div>

              <div className="space-y-6">
                {siteData.designers.map((designer, idx) => (
                  <div key={idx} className="group flex items-start gap-4">
                    {/* Fallback container with dark gradient */}
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[#E6A756]/40 shadow-sm bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
                      <img
                        src={designer.avatar}
                        alt={`Portrait of ${designer.name}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-display text-base text-neutral-900 group-hover:text-[#B87D2B] transition-colors">
                          {designer.name}
                        </h4>
                        <span className="text-[10px] uppercase font-semibold text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded">
                          {designer.city}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">{designer.role}</p>
                      <p className="text-[12px] text-neutral-600 italic mt-1.5 leading-snug">
                        "{designer.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-300/70 text-center">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-neutral-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Meet Our Designers
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 3: OUR NUMBERS (STATS)                                    */}
        {/* ================================================================= */}
        <section
          id="numbers"
          ref={statsContainerRef}
          className="relative py-28 md:py-36 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden"
        >
          {/* Background Image with Fallback */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
            <img
              src={IMAGES.statsBg}
              alt="City skyline at twilight"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-40 scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <span className="font-devanagari text-[#E6A756] text-sm md:text-base font-medium tracking-wide">
                विश्वसनीयता एवं उत्कृष्टता
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl text-white mt-2 tracking-tight">
                Real numbers from happy homeowners across India.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {siteData.stats.map((stat, idx) => (
                <div key={idx} className="pt-6 lg:pt-0 lg:px-6">
                  <div className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#E6A756] font-normal tracking-tight">
                    <span className="gs-stat-counter" data-target={stat.value}>
                      0
                    </span>
                    {stat.suffix}
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-white/95 uppercase tracking-wider mt-3">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-white/60 mt-1.5 max-w-xs mx-auto leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 4: HOW WE WORK (PROCESS)                                  */}
        {/* Sticky left: "How we design your home."                           */}
        {/* Step 1: Meet and Plan                                             */}
        {/* Step 2: Design and 3D Preview                                     */}
        {/* Step 3: Build and Handover (hover video card)                     */}
        {/* ================================================================= */}
        <section id="how-we-work" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-neutral-300/60">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Left Section */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Simple 3-Step Process
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-neutral-900 leading-[1.15] tracking-tight">
                How we design your home.
              </h2>
              <p className="text-neutral-700 text-base font-light leading-relaxed">
                We make home design easy and exciting. From your first 3D plan to final polish, our team delivers your dream home on time.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>Clear cost estimate with zero hidden extras</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>Full 3D walkthrough before work begins on site</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>Quality checks at every stage of carpentry</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-6 py-3 rounded-full bg-neutral-900 text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Plan Free Home Visit
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right: Step Cards */}
            <div className="lg:col-span-7 space-y-12">
              {siteData.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="gs-step-card bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-serif-display text-3xl md:text-4xl text-[#B87D2B]">
                      {step.index}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#B87D2B] font-medium mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Media Slot with dark gradient fallback container */}
                  <div className="mt-6 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-neutral-200/60 aspect-video relative group">
                    {step.type === "image" ? (
                      <img
                        src={step.asset}
                        alt={step.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onMouseEnter={handleProcessMouseEnter}
                        onMouseLeave={handleProcessMouseLeave}
                      >
                        <video
                          ref={processVideoRef}
                          src={step.asset}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:opacity-0 transition-opacity">
                            <Play className="w-5 h-5 text-neutral-900 ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white">
                          Hover to Preview
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 5: OUR WORK (PINNED HORIZONTAL SCROLL)                    */}
        {/* ================================================================= */}
        <section
          id="our-work"
          ref={portfolioSectionRef}
          className="relative min-h-[90vh] bg-[#F2F0EA] overflow-hidden py-16 flex flex-col justify-center border-b border-neutral-300/60"
        >
          {/* Header */}
          <div className="px-6 md:px-12 max-w-6xl mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Our Work
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-neutral-900 mt-2 tracking-tight">
                Beautiful Homes Across India
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600 font-medium">
              <span>Scroll sideways to see more</span>
              <ArrowRight className="w-4 h-4 text-[#B87D2B]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Cards Track */}
          <div
            ref={portfolioTrackRef}
            className="cards-track flex items-center gap-8 px-6 md:px-12 w-max"
          >
            {siteData.portfolio.map((item) => (
              <div
                key={item.id}
                className="gs-portfolio-card w-[340px] sm:w-[420px] md:w-[480px] bg-white rounded-3xl overflow-hidden border border-neutral-300/80 shadow-xl shrink-0 group flex flex-col cursor-pointer"
                onClick={() => setSelectedProjectModal(item)}
              >
                {/* Fallback container with dark gradient */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
                  <img
                    src={item.image}
                    alt={`${item.title} project in ${item.locality}, ${item.city}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Price pill showing project cost */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                    {item.cost}
                  </div>
                  {/* City tag */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] uppercase tracking-wider text-white">
                    {item.city}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 rounded-xl text-white">
                    <span className="text-[11px] uppercase tracking-wider text-[#E6A756] font-medium block">
                      {item.locality}
                    </span>
                    <h3 className="font-serif-display text-xl text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B87D2B]" strokeWidth={1.5} />
                      <span>{item.locality}, {item.city}</span>
                      <span>·</span>
                      <span className="text-[#B87D2B] font-medium">{item.tag}</span>
                    </div>
                    <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed">
                      {item.highlight}
                    </p>
                    <p className="text-[11px] font-mono text-neutral-500 mt-2">
                      {item.specs}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-900 group-hover:text-[#B87D2B] transition-colors flex items-center gap-1.5">
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConsultationData(prev => ({
                          ...prev,
                          city: item.city,
                          projectScope: `${item.title} (${item.specs})`
                        }));
                        setIsConsultationOpen(true);
                      }}
                      className="px-4 py-2 rounded-full bg-neutral-900 text-white text-[11px] uppercase tracking-wider hover:bg-[#B87D2B] transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 6: TESTIMONIALS (BUYER REVIEWS)                           */}
        {/* ================================================================= */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-300/60 bg-[#F7F5F0]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Client Stories
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl text-neutral-900 mt-2 tracking-tight">
                Trusted by families across India.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
                >
                  <p className="text-neutral-700 text-sm md:text-base italic leading-relaxed">
                    "{test.feedback}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E6A756]/20 text-[#B87D2B] font-serif-display text-base flex items-center justify-center font-bold">
                      {test.client.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif-display text-base text-neutral-900">{test.client}</h4>
                      <p className="text-xs text-neutral-500">{test.location}</p>
                      <p className="text-[11px] text-[#B87D2B] font-medium">{test.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 7: CONTACT CALL TO ACTION                                 */}
        {/* ================================================================= */}
        <section id="contact" className="py-20 md:py-28 px-6 md:px-12 bg-neutral-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 p-8 md:p-14 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-md relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="font-devanagari text-[#E6A756] text-sm md:text-base">
                  शुभ आरंभ · Start Your Interior Project
                </span>
                <h2 className="font-serif-display text-3xl md:text-5xl text-white mt-2 leading-[1.15] tracking-tight">
                  Ready to design your dream home?
                </h2>
                <p className="text-neutral-300 text-sm md:text-base mt-4 leading-relaxed font-light">
                  Book a free consultation with our senior designers in Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, or Goa.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E6A756]" strokeWidth={1.5} />
                    <span>{siteData.brand.contactNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E6A756]" strokeWidth={1.5} />
                    <span>Lower Parel, Mumbai</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full py-4 rounded-full bg-[#E6A756] text-neutral-950 font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#d69646] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  Book Free Consultation
                </button>

                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hello%20Aura%20Interiors%20India%2C%20I%20would%20like%20to%20discuss%20interior%20design%20for%20my%20home.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* =================================================================== */}
      {/* FOOTER                                                              */}
      {/* =================================================================== */}
      <footer className="relative py-16 px-6 md:px-12 border-t border-neutral-300/80 jaali-pattern text-neutral-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="max-w-md">
            <h3 className="font-serif-display text-2xl text-neutral-900 tracking-tight">
              {siteData.brand.name}
            </h3>
            <p className="font-devanagari text-xs text-[#B87D2B] mt-1">
              {siteData.brand.taglineDevanagari}
            </p>
            <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
              {siteData.brand.headOffice}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <a
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-600 hover:text-[#B87D2B] transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                <span>@aurainteriorsindia</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Popular Cities</p>
              <ul className="space-y-2 text-neutral-600">
                <li>Mumbai Living Rooms</li>
                <li>Pune Heritage Villas</li>
                <li>Goa Modular Kitchens</li>
                <li>Bengaluru Bedrooms</li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Our Services</p>
              <ul className="space-y-2 text-neutral-600">
                <li>Full-Home Interiors</li>
                <li>Modular Kitchens</li>
                <li>3D Design Walkthroughs</li>
                <li>Vastu Planning</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Helpdesk</p>
              <p className="text-neutral-600">{siteData.brand.contactNumber}</p>
              <p className="text-neutral-600 mt-1">{siteData.brand.contactEmail}</p>
              <p className="text-[11px] text-neutral-400 mt-2">Open every day, 9 AM to 9 PM IST</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 Aura Interiors India</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Warranty Terms</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Vastu Guidelines</a>
          </div>
        </div>
      </footer>

      {/* =================================================================== */}
      {/* INTERACTIVE MODAL: BOOK FREE CONSULTATION                           */}
      {/* =================================================================== */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsConsultationOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif-display text-2xl text-neutral-900">
                  Consultation Request Sent
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Namaste {consultationData.name}. Our senior design team will WhatsApp or call you today to confirm your free design slot for {consultationData.preferredDate}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsConsultationOpen(false);
                      setFormSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs uppercase tracking-wider font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="font-devanagari text-[#B87D2B] text-xs font-semibold">
                  परामर्श आरक्षण · Free 3D Design Session
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-neutral-900 mt-1">
                  Book Free Consultation
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Meet our designers, see 3D ideas and get an instant quote for your space.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={consultationData.name}
                      onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Mobile or WhatsApp Number (+91)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98201 XXXXX"
                      value={consultationData.phone}
                      onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">City</label>
                      <select
                        value={consultationData.city}
                        onChange={(e) => setConsultationData({ ...consultationData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      >
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Goa">Goa</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Project Type</label>
                      <select
                        value={consultationData.projectScope}
                        onChange={(e) => setConsultationData({ ...consultationData, projectScope: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      >
                        <option value="3BHK Apartment Interior">3BHK Apartment</option>
                        <option value="2BHK Apartment Interior">2BHK Apartment</option>
                        <option value="4BHK / Villa Interior">4BHK / Villa</option>
                        <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                        <option value="Living Room Makeover">Living Room Makeover</option>
                        <option value="Commercial / Office">Commercial / Office</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={consultationData.preferredDate}
                        onChange={(e) => setConsultationData({ ...consultationData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Time</label>
                      <select
                        value={consultationData.timeSlot}
                        onChange={(e) => setConsultationData({ ...consultationData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      >
                        <option>Morning (10:30 AM - 12:30 PM)</option>
                        <option>Afternoon (2:30 PM - 4:30 PM)</option>
                        <option>Evening (5:00 PM - 6:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-[0.18em] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Confirm Booking & Open WhatsApp
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <p className="text-[10px] text-neutral-400 text-center mt-2">
                      Free in-home visit or studio session · No obligation
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* INTERACTIVE MODAL: PROJECT DETAILS                                  */}
      {/* =================================================================== */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto">
            <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
              <img
                src={selectedProjectModal.image}
                alt={selectedProjectModal.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-sm font-semibold text-neutral-900 shadow-md">
                Project Cost: {selectedProjectModal.cost}
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B87D2B] font-semibold">
                  {selectedProjectModal.locality}, {selectedProjectModal.city}
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-neutral-900 mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mt-2">
                  {selectedProjectModal.specs}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-neutral-200/80 text-xs text-neutral-700 leading-relaxed">
                <p className="font-medium text-neutral-900 mb-1">Design Highlights</p>
                {selectedProjectModal.highlight}
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <p className="text-neutral-400">Warranty</p>
                  <p className="font-semibold text-neutral-900 mt-0.5">10-Year Woodwork Warranty</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <p className="text-neutral-400">Design Approach</p>
                  <p className="font-semibold text-neutral-900 mt-0.5">{selectedProjectModal.tag}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const item = selectedProjectModal;
                    setSelectedProjectModal(null);
                    setConsultationData(prev => ({
                      ...prev,
                      city: item.city,
                      projectScope: `${item.title} (${item.specs})`
                    }));
                    setIsConsultationOpen(true);
                  }}
                  className="flex-1 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Get Similar Design Quote
                </button>
                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hello%2C%20I%20saw%20your%20${encodeURIComponent(selectedProjectModal.title)}%20in%20${encodeURIComponent(selectedProjectModal.city)}%20and%20want%20a%20similar%20interior.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
