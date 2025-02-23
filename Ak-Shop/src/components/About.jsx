import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-indigo-700 mb-6">About Us</h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Welcome to <strong>Ak E-commerce Store</strong>! We offer a wide range of top-quality products to make your shopping experience seamless and enjoyable. From electronics to fashion, we provide everything you need at competitive prices.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Our mission is simple: to bring you high-quality products at the best prices with the convenience of online shopping. We believe in offering a curated selection of products from trusted brands, ensuring that our customers receive nothing but the best.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Why Choose Us?</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We are committed to providing our customers with an easy and enjoyable shopping experience. Here's why you should choose us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            <li>Wide range of products across categories</li>
            <li>Fast and secure delivery</li>
            <li>Affordable prices and regular discounts</li>
            <li>Easy return and exchange policy</li>
            <li>24/7 customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Our History</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Since our founding in 2024, we have been on a mission to provide customers with an exceptional shopping experience. We started with just a handful of products and have grown into a trusted online destination for millions of shoppers. Our growth has been driven by our commitment to quality, affordability, and excellent customer service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Our Product Categories</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We offer a wide variety of products to cater to all your needs. Whether you're looking for the latest gadgets or stylish fashion, we've got you covered. Some of our popular product categories include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            <li>Beauty</li>
            <li>Furniture</li>
            <li>Fregrence</li>
            <li>Groceries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
            <li>Customer-Centric: We put our customers at the center of everything we do.</li>
            <li>Trust: We aim to build trust by offering authentic products and transparent policies.</li>
            <li>Innovation: We embrace the latest trends to provide a modern shopping experience.</li>
            <li>Excellence: We strive for excellence in product quality, customer service, and overall shopping experience.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default About

