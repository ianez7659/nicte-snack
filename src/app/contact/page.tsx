"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Contact / Location
          </h1>
          <p className="mt-2 text-gray-600">
            Questions about our products? We’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-72 md:h-auto"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/amaranth.jpg)" }} // 기존 Left 이미지 느낌
            />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 md:p-10 bg-white"
          >
            {/* Locations */}
            <h2 className="text-2xl font-semibold tracking-widest text-gray-900">
              LOCATION
            </h2>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-500">●</span> Location
                01
                <br />
                <span className="pl-5">Location 1 address goes here</span>
              </p>
              <p>
                <span className="font-semibold text-gray-500">●</span> Location
                02
                <br />
                <span className="pl-5">Location 2 address goes here</span>
              </p>
              <p>
                <span className="font-semibold text-gray-500">●</span> Location
                03
                <br />
                <span className="pl-5">Location 3 address goes here</span>
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200" />

            {/* Contact */}
            <h2 className="text-2xl font-semibold tracking-widest text-gray-900">
              CONTACT US
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please leave a message if you have any questions about our
              products.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
