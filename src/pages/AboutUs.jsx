// src/pages/AboutUs.jsx
import React from 'react';

const AboutUsPage = () => (
  <section id="about-section" className="bg-white p-6 md:p-12 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fade-in-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8 leading-tight">About Us</h1>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
      Welcome to <span className="font-semibold text-blue-600">[Your Company Name]</span>, where we transform visions into vibrant living and working spaces. We are a passionate team dedicated to delivering exceptional real estate solutions that blend innovative design with timeless quality.
    </p>
    <p className="text-md md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
      With years of expertise and a deep understanding of market dynamics, we specialize in crafting stunning residential and commercial properties that not only meet but exceed expectations. Our commitment to integrity, client satisfaction, and sustainable practices is at the core of every project we undertake.
    </p>
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Meet the Visionaries</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">[Owner 1 Name]</h3>
        <p className="text-gray-600 text-center">
          <span className="font-medium">Founder & CEO:</span> With over two decades in real estate development, [Owner 1 Name] brings unparalleled expertise in architectural innovation and strategic project management. Their vision has shaped our most iconic properties.
        </p>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out border border-blue-200">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">[Owner 2 Name]</h3>
        <p className="text-gray-600 text-center">
          <span className="font-medium">Co-founder & Head of Sales:</span> A market maestro with a keen eye for emerging trends, [Owner 2 Name] excels in client relations and ensuring our properties connect with the right buyers. Their passion drives our success in the market.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsPage;
