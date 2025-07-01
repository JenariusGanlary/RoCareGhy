"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  Filter,
  Droplets,
  Gauge,
  Move,
  Calendar,
  UserCheck,
  CheckCircle,
  ShieldCheck,
  Biohazard,
  HeartPulse,
} from "lucide-react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const services = [
    "RO Installation",
    "Filter Replacement",
    "Annual Maintenance",
    "TDS Testing",
    "UV Lamp Replacement",
    "Purifier Repair",
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Book A Service
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Warranty Status<span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="AMC">AMC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Service<span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="RoCareGhy Logo"
                width={80}
                height={80}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Navigation - Centered */}
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#hero"
                className="text-foreground font-bold hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-muted-foreground font-bold hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground font-bold hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="text-muted-foreground font-bold hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                About Us
              </a>
              <a
                href="#footer"
                className="text-muted-foreground font-bold hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </nav>
            {/* Book Now Button */}
            <div className="hidden md:block">
              <button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => setShowForm(true)}
              >
                Book Now
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight animate-fade-in">
              Premium RO Water Purifier Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-delay">
              Experience crystal clear, pure water with our professional RO
              purifier installation, maintenance, and repair services. Your
              health is our priority.
            </p>
            <button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl pulse-button"
              onClick={() => setShowForm(true)}
            >
              Book a Service
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional solutions for all your water purifier needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Filter Change Card */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Filter className="w-8 h-8 text-indigo-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Filter Change
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Regular filter replacement ensures your purifier works at peak
                  efficiency, removing impurities effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowForm(true)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
            {/* RO/UV Cleaning Card */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-8 h-8 text-purple-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  RO/UV Cleaning
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Professional cleaning of RO membranes and UV lamps to maintain
                  optimal purification performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowForm(true)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
            {/* TDS Check Card */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="w-8 h-8 text-green-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  TDS Check
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Accurate measurement of Total Dissolved Solids to ensure your
                  water quality meets safety standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowForm(true)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
            {/* Re-Installation Card */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Move className="w-8 h-8 text-orange-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Re-Installation
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Expert relocation and setup of your water purifier when moving
                  homes or offices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowForm(true)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Book Now Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => setShowForm(true)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to pure, healthy water
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Book an Appointment */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-indigo-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Book an Appointment
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Schedule your service online or via phone at your convenience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
              </CardContent>
            </Card>
            {/* Step 2: Our Expert Visits */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-8 h-8 text-purple-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Our Expert Visits
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  A certified technician arrives at your chosen time slot.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
              </CardContent>
            </Card>
            {/* Step 3: Diagnosis & Service */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-green-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Diagnosis & Service
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Thorough inspection followed by professional service with
                  genuine parts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
              </CardContent>
            </Card>
            {/* Step 4: Enjoy Clean Water */}
            <Card className="modern-card hover:shadow-2xl cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-orange-600 floating-icon" />
                </div>
                <CardTitle className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl">
                  Enjoy Clean Water
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Test the purified water and receive maintenance tips from our
                  expert.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us (Our Story) Section */}
      <section
        id="about"
        className="bg-white py-20 relative border-t border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
              Delivering purity since 2012
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              RO CARE GUWAHATI was founded with a simple mission: to provide
              every household and business with access to clean, safe drinking
              water through premium RO purification solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Water Quality Experts
              </h3>
              <p className="text-base text-muted-foreground">
                Our certified technicians undergo rigorous training in water
                chemistry and purification technology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Genuine Parts Guarantee
              </h3>
              <p className="text-base text-muted-foreground">
                We use only manufacturer-approved filters and components for all
                services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Community Commitment
              </h3>
              <p className="text-base text-muted-foreground">
                We support clean water initiatives and educate communities about
                water safety.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-base font-medium text-foreground">
                24/7 Emergency Service
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-base font-medium text-foreground">
                100+ Certified Technicians
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-base font-medium text-foreground">
                5-Year Warranty on Installations
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-base font-medium text-foreground">
                Same-Day Service Available
              </span>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="px-10 py-5 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => setShowForm(true)}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why RO Purified Water is Better for You Section */}
      <section
        id="why-ro"
        className="bg-gradient-to-br from-blue-50 to-white py-20 relative border-t border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Why RO Purified Water is Better for You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pure water means better health, taste, and safety
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Removes Harmful Contaminants
              </h3>
              <p className="text-base text-muted-foreground">
                RO filtration removes up to 99% of dissolved impurities like
                lead, arsenic, fluoride, and chlorine, ensuring safe drinking
                water.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Droplets className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Better Taste & Odor
              </h3>
              <p className="text-base text-muted-foreground">
                Eliminates unpleasant smells and metallic tastes caused by
                chemicals and heavy metals, making water refreshing.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Biohazard className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Prevents Waterborne Diseases
              </h3>
              <p className="text-base text-muted-foreground">
                Removes bacteria, viruses, and parasites that cause cholera,
                typhoid, and diarrhea.
              </p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <HeartPulse className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Boosts Overall Health
              </h3>
              <p className="text-base text-muted-foreground">
                Clean water improves digestion, kidney function, and skin health
                while reducing toxin buildup.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Box 1: Scientifically Proven Benefits */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Scientifically Proven Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <span className="text-base text-foreground">
                    Reduces Heavy Metals – RO removes lead, mercury & cadmium,
                    which can cause neurological damage.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <span className="text-base text-foreground">
                    Lowers TDS (Total Dissolved Solids) – Prevents kidney stones
                    & improves hydration.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <span className="text-base text-foreground">
                    Protects Children & Elderly – Safe for immune-sensitive
                    groups.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <span className="text-base text-foreground">
                    Better Cooking & Beverages – Enhances food flavor and
                    tea/coffee taste.
                  </span>
                </li>
              </ul>
            </div>
            {/* Box 2: Comparison Table */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Comparison: RO vs. Regular Water
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-4 font-semibold text-base text-foreground">
                        Feature
                      </th>
                      <th className="py-2 px-4 font-semibold text-base text-indigo-700">
                        RO Water
                      </th>
                      <th className="py-2 px-4 font-semibold text-base text-muted-foreground">
                        Regular Tap Water
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t">
                      <td className="py-2 px-4">Contaminant Removal</td>
                      <td className="py-2 px-4">99%</td>
                      <td className="py-2 px-4">Limited</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2 px-4">Taste & Odor</td>
                      <td className="py-2 px-4">Pure & Crisp</td>
                      <td className="py-2 px-4">Chlorine Taste</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2 px-4">Health Safety</td>
                      <td className="py-2 px-4">Disease-Free</td>
                      <td className="py-2 px-4">Risk of Bacteria</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2 px-4">Mineral Retention*</td>
                      <td className="py-2 px-4">(With Remineralization) Yes</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-2">
                  *Modern RO systems retain essential minerals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from Guwahati, Assam, India
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section: Limited Time Offer (Modern/Professional) */}
      <section
        id="cta"
        className="py-24 bg-gradient-to-br from-indigo-100 via-white to-purple-100 border-t border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-white/80 shadow-xl ring-1 ring-gray-200 px-6 py-12 md:py-20 flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-0 md:justify-between backdrop-blur-md">
            {/* Left: Headline, Subheadline, Checkboxes */}
            <div className="flex-1 flex flex-col justify-center items-start md:pr-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Experience the Purest Water in Your Home Today
              </h2>
              <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
                Book your RO service now and get{" "}
                <span className="font-bold text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                  15% OFF
                </span>{" "}
                your first service plus a{" "}
                <span className="font-bold text-green-700 bg-green-100 px-2 py-1 rounded">
                  FREE
                </span>{" "}
                water quality test!
              </p>
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-base md:text-lg font-medium text-foreground">
                    1-Year Service Guarantee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-base md:text-lg font-medium text-foreground">
                    24/7 Emergency Service
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-base md:text-lg font-medium text-foreground">
                    500+ 5-Star Reviews
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Offer Badge & Buttons */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {/* Offer Badge with Glassmorphism */}
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute inline-flex h-32 w-32 rounded-full bg-gradient-to-tr from-red-500 via-red-400 to-pink-500 opacity-60 blur-2xl animate-pulse"></span>
                <span className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-white/60 backdrop-blur-lg border-4 border-red-500 shadow-2xl ring-2 ring-red-300">
                  <span className="text-xl font-extrabold text-red-600 uppercase tracking-wider text-center leading-tight drop-shadow-md">
                    Limited
                    <br />
                    Time Offer
                  </span>
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <Button
                  size="lg"
                  className="rounded-2xl px-8 py-5 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setShowForm(true)}
                >
                  Book Service Now
                </Button>
                <a
                  href="tel:+917099387337"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-5 text-lg font-bold bg-yellow-400 text-yellow-900 shadow-lg hover:bg-yellow-500 transition-all duration-300 border border-yellow-400 focus:ring-2 focus:ring-yellow-300"
                >
                  Call +917099387337
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="border-t border-border bg-gradient-to-br from-white to-blue-50 mt-12"
      >
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 text-center md:text-center">
            {/* About */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                About RO Care Guwahati
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Certified water purification experts delivering premium RO
                services with transparency and professionalism.
              </p>
              <div className="flex justify-center space-x-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="rounded-full bg-gray-100 hover:bg-indigo-100 p-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="rounded-full bg-gray-100 hover:bg-pink-100 p-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="rounded-full bg-gray-100 hover:bg-sky-100 p-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.56 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3 4.1 3.04A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71A4.48 4.48 0 0 0 23 3z" />
                  </svg>
                </a>
                <a
                  href="mailto:rocareguwahati2@gmail.com"
                  aria-label="Mail"
                  className="rounded-full bg-gray-100 hover:bg-green-100 p-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Services */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Our Services
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>RO Installation</li>
                <li>Filter Replacement</li>
                <li>Annual Maintenance</li>
                <li>TDS Testing</li>
                <li>UV Lamp Replacement</li>
                <li>Purifier Repair</li>
              </ul>
            </div>
            {/* Contact */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Contact Us
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <span className="mr-1" aria-label="Location">
                    📍
                  </span>
                  Ambikagirinagar, Guwahati, Assam 781024
                </li>
                <li>
                  <span className="mr-1" aria-label="Phone">
                    📞
                  </span>
                  <a
                    href="tel:+917099387337"
                    className="hover:text-foreground transition-colors"
                  >
                    +91 7099387337
                  </a>
                </li>
                <li>
                  <span className="mr-1" aria-label="Mail">
                    ✉️
                  </span>
                  <a
                    href="mailto:rocareguwahati2@gmail.com"
                    className="hover:text-foreground transition-colors"
                  >
                    rocareguwahati2@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            {/* Location */}
            <div className="flex-1 min-w-[180px] flex flex-col items-center">
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                Our Location
              </h4>
              <div className="w-full h-32 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 flex justify-center items-center">
                <iframe
                  title="RO Care Guwahati Location"
                  src="https://maps.google.com/maps?q=Ambikagirinagar,%20Guwahati,%20Assam%20781024&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} RO Care Guwahati. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
