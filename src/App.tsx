/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  Compass,
  FileCheck,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  X,
  Play,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
  UserCheck
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* SITE DATA & ASSET REPOSITORY                                               */
/* Keep all images in siteData-style constants so they can easily be swapped   */
/* -------------------------------------------------------------------------- */
export const siteData = {
  brand: {
    name: "Aura Estates India",
    taglineDevanagari: "घर वापसी, शान के साथ",
    taglineEnglish: "Exclusive homes for elevated Indian living.",
    reraNumber: "MahaRERA Reg. No. P51900012345",
    headOffice: "Level 14, One World Center, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    contactNumber: "+91 98201 44880",
    contactEmail: "concierge@auraestates.in",
    whatsappNumber: "919820144880",
  },
  assets: {
    // Exact requested source URLs
    heroSmallHeadingImage: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91126dae-53d0-49d3-b421-2b3d436408b8_320w.png",
    heroVideo: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779682946127-64f8684a-b85f-4722-9f37-cc3ca5858b50.mp4",
    negotiationVideo: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779255254276-22e12670-bcb8-423c-b49a-84dd10414eb9.mp4",
    
    // High-resolution generated Indian architectural photography
    skyscraperStatsBg: "/src/assets/images/mumbai_skyscraper_stats_1793686604809.jpg",
    processDiscoveryImg: "/src/assets/images/process_discovery_visit_1793686636398.jpg",
    processLegalImg: "/src/assets/images/process_legal_diligence_1793686636967.jpg",
    
    // Architect avatars
    architectRohan: "/src/assets/images/architect_rohan_deshmukh_1793686635025.jpg",
    architectMeera: "/src/assets/images/architect_meera_iyer_1793686634996.jpg",
    architectKabir: "/src/assets/images/architect_kabir_malhotra_1793686636846.jpg",

    // Portfolio estates
    portfolioWorli: "/src/assets/images/worli_sea_penthouse_1793686605463.jpg",
    portfolioPune: "/src/assets/images/pune_heritage_villa_1793686606361.jpg",
    portfolioGoa: "/src/assets/images/goa_courtyard_villa_1793686606406.jpg",
    portfolioBengaluru: "/src/assets/images/bengaluru_skyline_home_1793686606307.jpg",
  },
  trustBadges: [
    { label: "MahaRERA Registered", icon: ShieldCheck, detail: "100% compliant filings" },
    { label: "Vastu Compliant", icon: Compass, detail: "Audited energy flow & orientation" },
    { label: "NRI Friendly", icon: Building2, detail: "Repatriation & power of attorney support" },
    { label: "Clear Title Verified", icon: FileCheck, detail: "30-year forensic legal search" },
  ],
  architects: [
    {
      name: "Ar. Rohan Deshmukh",
      city: "Mumbai",
      role: "Principal, Deshmukh Atelier",
      avatar: "/src/assets/images/architect_rohan_deshmukh_1793686635025.jpg",
      quote: "Designing high-rises where sea breezes harmonize with modern Maharashtrian proportions.",
      projects: "Worli Sky Villas, Bandra Seaward Penthouses"
    },
    {
      name: "Ar. Meera Iyer",
      city: "Bengaluru",
      role: "Founder, Iyer Studio of Form",
      avatar: "/src/assets/images/architect_meera_iyer_1793686634996.jpg",
      quote: "Infusing lush Bangalore rain-trees into indoor courtyards for tranquil family sanctuaries.",
      projects: "Sadashivanagar Terraces, Assagao Portuguese Villa"
    },
    {
      name: "Ar. Kabir Malhotra",
      city: "Delhi NCR",
      role: "Senior Partner, Malhotra & Heritage",
      avatar: "/src/assets/images/architect_kabir_malhotra_1793686636846.jpg",
      quote: "Preserving sandstone heritage craftsmanship while delivering climate-responsive smart luxury.",
      projects: "Prithviraj Road Pavilions, Golf Links Retreat"
    }
  ],
  stats: [
    { value: 32, suffix: "", label: "Years of Legacy", subtext: "Pioneering bespoke luxury advisory since 1994" },
    { value: 250, suffix: "+", label: "Premium Properties Sold", subtext: "Curated iconic addresses across 6 prime metros" },
    { value: 150, suffix: "+", label: "NRI & Family Clients", subtext: "London, Dubai, Singapore & Silicon Valley diaspora" },
    { value: 98, suffix: "%", label: "Client Satisfaction", subtext: "Multi-generational repeat advisory & trust" },
  ],
  steps: [
    {
      index: "01",
      title: "Discovery & Site Visit",
      subtitle: "Shortlist by budget, city, and Vastu",
      desc: "Our senior relationship directors curate private off-market portfolios tailored to your lifestyle, Vastu prerequisites, and investment horizons. Private luxury transit provided for all visits.",
      type: "image",
      asset: "/src/assets/images/process_discovery_visit_1793686636398.jpg",
      alt: "Private luxury site visit"
    },
    {
      index: "02",
      title: "Legal & RERA Due Diligence",
      subtitle: "Title check, RERA compliance, encumbrance free",
      desc: "Independent 30-year forensic legal search, municipal zoning verification, environmental clearances, and strict RERA compliance audits carried out prior to formal commitment.",
      type: "image",
      asset: "/src/assets/images/process_legal_diligence_1793686636967.jpg",
      alt: "Forensic title and RERA due diligence"
    },
    {
      index: "03",
      title: "Negotiation & Registration",
      subtitle: "Hover to preview confidential closing protocol",
      desc: "Discreet advisory for price negotiation, stamp duty optimization, POA facilitation for NRIs, and white-glove registration with state registrar offices.",
      type: "video",
      asset: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779255254276-22e12670-bcb8-423c-b49a-84dd10414eb9.mp4",
      alt: "Discreet negotiation and closing protocol"
    }
  ],
  portfolio: [
    {
      id: "worli-penthouse",
      title: "Sea-Facing Penthouse",
      city: "Mumbai",
      locality: "Worli Sea Face",
      price: "₹32 Cr",
      priceNum: 320000000,
      specs: "5 BHK · 7,850 sq.ft · Private Lap Pool · Arabian Sea Panorama",
      image: "/src/assets/images/worli_sea_penthouse_1793686605463.jpg",
      tag: "Ready for Griha Pravesh",
      highlight: "Unobstructed view of the Bandra-Worli Sea Link with dedicated double-height deck."
    },
    {
      id: "pune-heritage-villa",
      title: "Heritage Villa",
      city: "Pune",
      locality: "Koregaon Park",
      price: "₹9.5 Cr",
      priceNum: 95000000,
      specs: "4 BHK · 5,600 sq.ft · Private Banyan Lawn · Colonial Verandah",
      image: "/src/assets/images/pune_heritage_villa_1793686606361.jpg",
      tag: "Vastu Audited: Ishanya Facing",
      highlight: "Restored antique teak beams, brass pendant fixtures, and sprawling private gardens."
    },
    {
      id: "goa-courtyard-villa",
      title: "Courtyard Villa",
      city: "Goa",
      locality: "Assagao",
      price: "₹6.8 Cr",
      priceNum: 68000000,
      specs: "4 BHK · 4,400 sq.ft · Central Water Court · Tropical Verandah",
      image: "/src/assets/images/goa_courtyard_villa_1793686606406.jpg",
      tag: "Holiday Haven & Rental Yield",
      highlight: "Portuguese-Goan courtyard architecture with sunlit reflection pool and high arched colonnades."
    },
    {
      id: "bengaluru-skyline",
      title: "Skyline Residence",
      city: "Bengaluru",
      locality: "Whitefield",
      price: "₹4.2 Cr",
      priceNum: 42000000,
      specs: "4 BHK Duplex · 4,120 sq.ft · Private Sky Pool · Double Height Living",
      image: "/src/assets/images/bengaluru_skyline_home_1793686606307.jpg",
      tag: "Tech Executive Preferred",
      highlight: "Panoramic dusk terrace with heated private lap pool overlooking prime IT corridors."
    }
  ],
  testimonials: [
    {
      client: "Priya S.",
      location: "Singapore & Mumbai",
      property: "Sea-Facing Penthouse, Worli",
      feedback: "Securing an ancestral home in Mumbai while stationed in Singapore felt seamless. Aura Estates handled power of attorney, MahaRERA paperwork, and even performed the initial Vastu puja coordination."
    },
    {
      client: "Arjun K.",
      location: "San Jose, CA & Assagao",
      property: "Courtyard Villa, Goa",
      feedback: "Their clarity on Portuguese property titles and local Goan clearances gave our family total peace of mind. We hosted our Griha Pravesh during Diwali with all our loved ones."
    },
    {
      client: "Neha R.",
      location: "Bengaluru",
      property: "Skyline Duplex, Whitefield",
      feedback: "The level of architectural discretion and negotiation finesse is unmatched in India. They don't just show homes—they understand generational legacy."
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
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [selectedPropertyModal, setSelectedPropertyModal] = useState<any | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visitFormData, setVisitFormData] = useState({
    name: "",
    phone: "",
    city: "Mumbai",
    propertyInterest: "Sea-Facing Penthouse, Worli",
    preferredDate: "2026-11-15",
    timeSlot: "Morning (10:30 AM - 12:30 PM)",
    nriStatus: "Yes, NRI Client"
  });

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const negotiationVideoRef = useRef<HTMLVideoElement | null>(null);
  const portfolioTrackRef = useRef<HTMLDivElement | null>(null);
  const portfolioSectionRef = useRef<HTMLDivElement | null>(null);
  const statsContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize GSAP & ScrollTrigger with exact requested easing and timings
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // 1. Vector Shapes SVG Drawing Animations (strokeDashoffset scrub)
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

    // 2. Hero Headline Reveal: gs-title characters/lines reveal from y: 120 with rotationZ: 3
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

    // 4. Hero Video Parallax: data-speed="0.8" => y: (1 - speed) * 100 * -1 on scroll
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

    // 6. Stats Section Counters (from 0 to 32, 250, 150, 98)
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

    // 7. Process Step Cards: Staggered gs-step-card sliding in from x: 50 or -50 (even/odd)
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
    // Container bg-[#F2F0EA], full height 70vh. Section pins.
    // The cards-track translates X by total width minus screen width.
    // Cards bob vertically (y: 40 to -40) during horizontal scroll.
    if (portfolioTrackRef.current && portfolioSectionRef.current) {
      const track = portfolioTrackRef.current;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 120;

      const portfolioPin = gsap.to(track, {
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

      // Cards bob vertically (y: 40 to -40) during horizontal scroll
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

    // 9. Parallax elements with data-speed
    const parallaxItems = document.querySelectorAll("[data-speed]");
    parallaxItems.forEach((item) => {
      const speed = parseFloat(item.getAttribute("data-speed") || "1");
      const yMove = (1 - speed) * 100 * -1;
      gsap.to(item, {
        y: yMove,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

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

  // Negotiation Card hover behavior: play on mouseenter, pause and reset currentTime = 0 on mouseleave
  const handleNegotiationMouseEnter = () => {
    if (negotiationVideoRef.current) {
      negotiationVideoRef.current.play().catch(() => {});
    }
  };

  const handleNegotiationMouseLeave = () => {
    if (negotiationVideoRef.current) {
      negotiationVideoRef.current.pause();
      negotiationVideoRef.current.currentTime = 0;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Create WhatsApp message string with all details
      const msg = encodeURIComponent(
        `Hello Aura Estates,\n\nI would like to book a private site visit:\n- Name: ${visitFormData.name}\n- Phone: ${visitFormData.phone}\n- Preferred City: ${visitFormData.city}\n- Property: ${visitFormData.propertyInterest}\n- Date: ${visitFormData.preferredDate}\n- NRI Client: ${visitFormData.nriStatus}\n\nPlease confirm availability.`
      );
      window.open(`https://wa.me/${siteData.brand.whatsappNumber}?text=${msg}`, '_blank');
    }, 1200);
  };

  const filteredProperties = selectedCity === "All"
    ? siteData.portfolio
    : siteData.portfolio.filter((p) => p.city === selectedCity);

  return (
    <div className="relative min-h-screen bg-[#F7F5F0] text-neutral-900 selection:bg-[#E6A756] selection:text-white">
      {/* -------------------------------------------------------------------- */}
      {/* LAYER 0 (FIXED): SVG FLUID BACKGROUND LINES                         */}
      {/* Animate stroke-dashoffset to simulate drawing while scrolling       */}
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
      {/* Strict Top Bar Contract: Brand zone - Nav links - 1 Primary Action  */}
      {/* No separate container. mix-blend-difference inverts over video/page */}
      {/* -------------------------------------------------------------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-12 py-5 flex items-center justify-between gap-8 pointer-events-auto">
        {/* Zone 1: Brand Wordmark in DM Serif Display */}
        <a
          href="#"
          className="font-serif-display text-xl md:text-2xl text-white tracking-tight whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {siteData.brand.name}
        </a>

        {/* Zone 2: Concise Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/90">
          <a href="#quote" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Legacy
          </a>
          <a href="#stats" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Milestones
          </a>
          <a href="#process" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Methodology
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Residences
          </a>
          <a href="#contact" className="hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap">
            Advisory
          </a>
        </div>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsSiteVisitOpen(true)}
            className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium text-white border border-white/60 hover:bg-white hover:text-black transition-all cursor-pointer whitespace-nowrap"
          >
            Book a Site Visit
          </button>
        </div>
      </nav>

      {/* -------------------------------------------------------------------- */}
      {/* LAYER 1: SECTION CONTENT (RELATIVE Z-10)                            */}
      {/* -------------------------------------------------------------------- */}
      <main className="relative z-10">

        {/* ================================================================= */}
        {/* SECTION 1: HERO                                                   */}
        {/* ================================================================= */}
        <section className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12">
          {/* Main Hero Typography & Tagline */}
          <div className="max-w-6xl mx-auto w-full pt-8 md:pt-14">
            {/* Top Subtitle with Devanagari Accent */}
            <div className="overflow-hidden mb-4">
              <span className="gs-title inline-block font-devanagari text-base md:text-xl text-[#E6A756] font-medium tracking-wide">
                {siteData.brand.taglineDevanagari}
              </span>
            </div>

            {/* Main Headline with Small Heading Image expanding from 0 to 128px */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] tracking-tight text-neutral-900">
              <span className="line-wrapper">
                <span className="gs-title inline-block">Exclusive homes for</span>
              </span>{" "}
              {/* Animated small hero image inside headline */}
              <span className="hero-small-image inline-block overflow-hidden align-middle mx-1 md:mx-2 rounded-full h-10 md:h-16 w-0 border border-[#E6A756]/60 shadow-md">
                <img
                  src={siteData.assets.heroSmallHeadingImage}
                  alt="Curated Indian Estate Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </span>{" "}
              <span className="line-wrapper">
                <span className="gs-title inline-block">elevated</span>
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="line-wrapper">
                <span className="gs-title inline-block text-neutral-900">Indian living.</span>
              </span>
            </h1>

            {/* Editorial Context & Dual CTAs */}
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-neutral-300/60">
              <p className="max-w-xl text-neutral-600 text-base md:text-lg font-light leading-relaxed">
                Curating timeless coastal penthouses, ancestral garden estates, and modernist duplexes across Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, and Goa for discerning families and global NRIs.
              </p>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  onClick={() => setIsSiteVisitOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all text-xs uppercase tracking-[0.18em] font-medium shadow-md flex items-center gap-2 cursor-pointer"
                >
                  Book a Site Visit
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>

                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hello%20Aura%20Estates%20India%2C%20I%20would%20like%20to%20inquire%20about%20curated%20luxury%20residences.`}
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

          {/* Hero Video Main: Container overflow-hidden, video scaled to 1.1, parallax data-speed="0.8" */}
          <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto h-[480px] md:h-[620px] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl bg-neutral-900">
            <video
              ref={heroVideoRef}
              src={siteData.assets.heroVideo}
              muted
              playsInline
              preload="metadata"
              data-speed="0.8"
              className="w-full h-full object-cover scale-110 pointer-events-none"
            />
            {/* Measured Scrim Overlay for Cinematic Warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Subtle In-video Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E6A756] animate-ping" />
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-white/90">
                Worli Sea Link Corridor · Ultra-Prime Indian Living
              </span>
            </div>

            {/* Quick Specs Pill */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white/90 text-xs tracking-wider">
              MahaRERA Registered · Vastu Audited
            </div>
          </div>

          {/* Trust Badges Strip (Indian Localization) */}
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
        {/* SECTION 2: QUOTE & DETAIL (12-COLUMN GRID + JAALI MOTIF)         */}
        {/* ================================================================= */}
        <section id="quote" className="relative py-24 md:py-32 px-6 md:px-12 jaali-pattern border-b border-neutral-300/60">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Col-span-8: Split Heading & Quote */}
            <div className="col-span-12 lg:col-span-8 pr-0 lg:pr-8">
              <div className="overflow-hidden mb-4">
                <span className="gs-reveal-text inline-block text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                  Philosophy & Generational Roots
                </span>
              </div>

              <blockquote className="overflow-hidden">
                <h2 className="gs-reveal-text font-serif-display text-3xl sm:text-5xl lg:text-5xl text-neutral-900 leading-[1.2] tracking-tight">
                  “A home in India is not just an address — it is a legacy for generations.”
                </h2>
              </blockquote>

              <p className="mt-8 text-neutral-600 text-base md:text-lg font-light leading-relaxed">
                In Indian families, acquiring a home is rooted in Griha Pravesh blessings, festive homecoming memories, and preserving family roots. We bridge traditional architectural principles—such as authentic Vastu orientations and breezy verandahs—with contemporary global finishes and strict clear-title due diligence.
              </p>

              {/* City Footprint Strip */}
              <div className="mt-10 pt-8 border-t border-neutral-300/70 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-neutral-500">
                <span className="text-neutral-900 font-semibold">Prime Advisory Hubs:</span>
                {["Mumbai", "Pune", "Bengaluru", "Hyderabad", "Delhi NCR", "Goa"].map((c, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="text-neutral-800">{c}</span>
                    {i < 5 && <span className="text-neutral-300">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Col-span-4: Architects List with Photos & City */}
            <div className="col-span-12 lg:col-span-4 bg-[#F2F0EA]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-300/80">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-300/80">
                <h3 className="font-serif-display text-xl text-neutral-900">Curating Architects</h3>
                <span className="text-[11px] uppercase tracking-wider text-[#B87D2B] font-medium">Pan-India</span>
              </div>

              <div className="space-y-6">
                {siteData.architects.map((arch, idx) => (
                  <div key={idx} className="group flex items-start gap-4">
                    <img
                      src={arch.avatar}
                      alt={arch.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover shrink-0 border border-[#E6A756]/40 shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-display text-base text-neutral-900 group-hover:text-[#B87D2B] transition-colors">
                          {arch.name}
                        </h4>
                        <span className="text-[10px] uppercase font-semibold text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded">
                          {arch.city}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">{arch.role}</p>
                      <p className="text-[12px] text-neutral-600 italic mt-1.5 leading-snug">
                        "{arch.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-300/70 text-center">
                <button
                  onClick={() => setIsSiteVisitOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-neutral-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Architectural Consultation
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 3: STATS (SKYSCRAPER BACKGROUND + GSAP COUNTERS)          */}
        {/* ================================================================= */}
        <section
          id="stats"
          ref={statsContainerRef}
          className="relative py-28 md:py-36 px-6 md:px-12 bg-neutral-900 text-white overflow-hidden"
        >
          {/* Skyscraper background image with backdrop-blur-[2px] and overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={siteData.assets.skyscraperStatsBg}
              alt="Mumbai Skyscraper Skyline"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <span className="font-devanagari text-[#E6A756] text-sm md:text-base font-medium tracking-wide">
                विश्वसनीयता एवं उत्कृष्टता
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl text-white mt-2 tracking-tight">
                Numbers that define trust across Indian luxury.
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
        {/* SECTION 4: PROCESS (STICKY LEFT + STAGGERED STEP CARDS)           */}
        {/* Step 3 features the negotiation hover video card                  */}
        {/* ================================================================= */}
        <section id="process" className="relative py-28 md:py-36 px-6 md:px-12 border-b border-neutral-300/60">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Left Section */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Transparent Advisory
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-neutral-900 leading-[1.15] tracking-tight">
                Navigating your real estate journey.
              </h2>
              <p className="text-neutral-600 text-base font-light leading-relaxed">
                From initial Vastu evaluation and private site tours to 30-year forensic title verifications and registrar registration, we manage every detail with institutional rigor and confidentiality.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>Strict zero-encumbrance title guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>Full repatriation guidance for NRI accounts</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" strokeWidth={1.5} />
                  <span>White-glove Griha Pravesh handover coordination</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsSiteVisitOpen(true)}
                  className="px-6 py-3 rounded-full bg-neutral-900 text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Schedule Private Walkthrough
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right: Staggered gs-step-card Items */}
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
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#B87D2B] font-medium mt-1">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Card Media Slot */}
                  <div className="mt-6 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 aspect-video relative group">
                    {step.type === "image" ? (
                      <img
                        src={step.asset}
                        alt={step.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      /* Negotiation Video Card with hover play/pause */
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onMouseEnter={handleNegotiationMouseEnter}
                        onMouseLeave={handleNegotiationMouseLeave}
                      >
                        <video
                          ref={negotiationVideoRef}
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
        {/* SECTION 5: PORTFOLIO (PINNED HORIZONTAL SCROLL)                   */}
        {/* Container bg-[#F2F0EA], full height 70vh, horizontal track       */}
        {/* Cards bob vertically (y: 40 to -40)                              */}
        {/* ================================================================= */}
        <section
          id="portfolio"
          ref={portfolioSectionRef}
          className="relative min-h-[90vh] bg-[#F2F0EA] overflow-hidden py-16 flex flex-col justify-center border-b border-neutral-300/60"
        >
          {/* Section Header */}
          <div className="px-6 md:px-12 max-w-6xl mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Curated Showcase
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-neutral-900 mt-2 tracking-tight">
                Iconic Residences Across India
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
              <span>Scroll horizontally to explore</span>
              <ArrowRight className="w-4 h-4 text-[#B87D2B]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Cards Track (flex w-max) */}
          <div
            ref={portfolioTrackRef}
            className="cards-track flex items-center gap-8 px-6 md:px-12 w-max"
          >
            {siteData.portfolio.map((item, idx) => (
              <div
                key={item.id}
                className="gs-portfolio-card w-[340px] sm:w-[420px] md:w-[480px] bg-white rounded-3xl overflow-hidden border border-neutral-300/80 shadow-xl shrink-0 group flex flex-col cursor-pointer"
                onClick={() => setSelectedPropertyModal(item)}
              >
                {/* Estate Photography */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                    {item.price}
                  </div>
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
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.highlight}
                    </p>
                    <p className="text-[11px] font-mono text-neutral-400 mt-2">
                      {item.specs}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-900 group-hover:text-[#B87D2B] transition-colors flex items-center gap-1.5">
                      Explore Dossier
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVisitFormData(prev => ({
                          ...prev,
                          city: item.city,
                          propertyInterest: `${item.title}, ${item.locality}`
                        }));
                        setIsSiteVisitOpen(true);
                      }}
                      className="px-4 py-2 rounded-full bg-neutral-900 text-white text-[11px] uppercase tracking-wider hover:bg-[#B87D2B] transition-colors"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 6: TESTIMONIALS & FAMILY LEGACY                           */}
        {/* ================================================================= */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-300/60 bg-[#F7F5F0]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B87D2B] font-semibold">
                Client Testimonials
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl text-neutral-900 mt-2 tracking-tight">
                Generational trust from NRI families & leaders.
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
                      <p className="text-[11px] text-[#B87D2B] font-medium">{test.property}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 7: INTERACTIVE SITE VISIT ADVISORY CTA                    */}
        {/* ================================================================= */}
        <section id="contact" className="py-20 md:py-28 px-6 md:px-12 bg-neutral-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 p-8 md:p-14 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-md relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="font-devanagari text-[#E6A756] text-sm md:text-base">
                  शुभ आरंभ · Griha Pravesh Advisory
                </span>
                <h2 className="font-serif-display text-3xl md:text-5xl text-white mt-2 leading-[1.15] tracking-tight">
                  Ready to discover your ancestral sanctum?
                </h2>
                <p className="text-neutral-300 text-sm md:text-base mt-4 leading-relaxed font-light">
                  Directly connect with our Senior Partner in Mumbai or schedule a private escorted visit in Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, or Goa.
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
                  onClick={() => setIsSiteVisitOpen(true)}
                  className="w-full py-4 rounded-full bg-[#E6A756] text-neutral-950 font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#d69646] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  Book a Site Visit
                </button>

                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Hello%20Aura%20Estates%20India%2C%20I%20would%20like%20to%20discuss%20exclusive%20residences.`}
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
      {/* FOOTER (FAINT JAALI PATTERN BEHIND FOOTER, EXACT PLACEHOLDER RERA)   */}
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
            <p className="text-xs text-neutral-600 font-mono mt-2">
              {siteData.brand.reraNumber}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Metros</p>
              <ul className="space-y-2 text-neutral-600">
                <li>Mumbai Penthouses</li>
                <li>Pune Heritage Villas</li>
                <li>Goa Courtyard Estates</li>
                <li>Bengaluru Sky Terraces</li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Trust & Advisory</p>
              <ul className="space-y-2 text-neutral-600">
                <li>MahaRERA Advisory</li>
                <li>Vastu Shastra Audits</li>
                <li>NRI Capital Repatriation</li>
                <li>Forensic Title Search</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="uppercase tracking-wider font-semibold text-neutral-900 mb-3">Direct Concierge</p>
              <p className="text-neutral-600">{siteData.brand.contactNumber}</p>
              <p className="text-neutral-600 mt-1">{siteData.brand.contactEmail}</p>
              <p className="text-[11px] text-neutral-400 mt-2">Available 7 days, 9 AM - 9 PM IST</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 Aura Estates India · RERA No. P5XXXXXXXXXX</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">RERA Disclosures</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Vastu Guidelines</a>
          </div>
        </div>
      </footer>

      {/* =================================================================== */}
      {/* INTERACTIVE MODAL: BOOK A SITE VISIT                                */}
      {/* =================================================================== */}
      {isSiteVisitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsSiteVisitOpen(false);
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
                  Site Visit Request Initiated
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Namaste {visitFormData.name}. Your dedicated client concierge is connecting with you via WhatsApp and phone to confirm private chauffeur transit for {visitFormData.preferredDate}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSiteVisitOpen(false);
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
                  साइट विज़िट आरक्षण · Private Escort
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-neutral-900 mt-1">
                  Book a Private Site Visit
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Experience prime Indian architecture with confidential private chauffeur service.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singhania"
                      value={visitFormData.name}
                      onChange={(e) => setVisitFormData({ ...visitFormData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Mobile / WhatsApp Number (+91)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98201 XXXXX"
                      value={visitFormData.phone}
                      onChange={(e) => setVisitFormData({ ...visitFormData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Preferred City</label>
                      <select
                        value={visitFormData.city}
                        onChange={(e) => setVisitFormData({ ...visitFormData, city: e.target.value })}
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
                      <label className="block text-neutral-700 font-medium mb-1">Client Profile</label>
                      <select
                        value={visitFormData.nriStatus}
                        onChange={(e) => setVisitFormData({ ...visitFormData, nriStatus: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      >
                        <option value="Yes, NRI Client">Global NRI / Diaspora</option>
                        <option value="Resident Indian Family">Resident Indian Family</option>
                        <option value="Family Office / Trust">Family Office / Trust</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Property of Interest</label>
                    <input
                      type="text"
                      value={visitFormData.propertyInterest}
                      onChange={(e) => setVisitFormData({ ...visitFormData, propertyInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={visitFormData.preferredDate}
                        onChange={(e) => setVisitFormData({ ...visitFormData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Time Preference</label>
                      <select
                        value={visitFormData.timeSlot}
                        onChange={(e) => setVisitFormData({ ...visitFormData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B87D2B] text-neutral-900 bg-neutral-50"
                      >
                        <option>Morning (10:30 AM - 12:30 PM)</option>
                        <option>Afternoon (2:30 PM - 4:30 PM)</option>
                        <option>Golden Hour (5:00 PM - 6:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-[0.18em] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Confirm Site Visit & Open WhatsApp
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <p className="text-[10px] text-neutral-400 text-center mt-2">
                      Strict client confidentiality · MahaRERA Verified Concierge
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* INTERACTIVE MODAL: PROPERTY DOSSIER DETAILS                         */}
      {/* =================================================================== */}
      {selectedPropertyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto">
            <div className="relative aspect-video bg-neutral-900">
              <img
                src={selectedPropertyModal.image}
                alt={selectedPropertyModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPropertyModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-1.5 rounded-full text-sm font-semibold text-neutral-900 shadow-md">
                {selectedPropertyModal.price}
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B87D2B] font-semibold">
                  {selectedPropertyModal.locality}, {selectedPropertyModal.city}
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-neutral-900 mt-1">
                  {selectedPropertyModal.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mt-2">
                  {selectedPropertyModal.specs}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-neutral-200/80 text-xs text-neutral-700 leading-relaxed">
                <p className="font-medium text-neutral-900 mb-1">Architectural Highlights</p>
                {selectedPropertyModal.highlight}
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <p className="text-neutral-400">RERA Compliance</p>
                  <p className="font-semibold text-neutral-900 mt-0.5">Approved & Clear Title</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <p className="text-neutral-400">Vastu Audit</p>
                  <p className="font-semibold text-neutral-900 mt-0.5">{selectedPropertyModal.tag}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const item = selectedPropertyModal;
                    setSelectedPropertyModal(null);
                    setVisitFormData(prev => ({
                      ...prev,
                      city: item.city,
                      propertyInterest: `${item.title}, ${item.locality}`
                    }));
                    setIsSiteVisitOpen(true);
                  }}
                  className="flex-1 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Book Private Site Inspection
                </button>
                <a
                  href={`https://wa.me/${siteData.brand.whatsappNumber}?text=Inquiring%20about%20${encodeURIComponent(selectedPropertyModal.title)}%20in%20${encodeURIComponent(selectedPropertyModal.city)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
