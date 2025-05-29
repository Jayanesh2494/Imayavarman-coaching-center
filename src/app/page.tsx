'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaFacebook, FaInstagram, FaAward, FaUsers, FaClock } from 'react-icons/fa';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FaUsers, value: '500+', label: 'மாணவர்கள்' },
    { icon: FaAward, value: '50+', label: 'வெற்றிகள்' },
    { icon: FaClock, value: '5+', label: 'ஆண்டுகள்' },
  ];

  return (
    <main className="min-h-screen font-tamil bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-shadow-lg"
          >
            இமயவர்மன் சிலம்பம் பயிற்சி மையம்
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-100"
          >
            மணிகண்டன் மூலம் வழிகாட்டப்படும் பாரம்பரிய சிலம்பம் பயிற்சி
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full text-base sm:text-lg transition-all duration-300 shadow-custom-lg"
          >
            இப்போது சேருங்கள்
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-white text-3xl sm:text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-4 sm:p-0"
              >
                <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-base sm:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-custom"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">பயிற்சியின் முக்கியத்துவம்</h2>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="leading-relaxed"
              >
                சிலம்பம் பயிற்சி உங்கள் உடல் ஆரோக்கியத்தை மேம்படுத்தும் மட்டுமல்லாமல், மனதின் ஒழுக்கத்தையும் வளர்க்கிறது.
              </motion.p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'உடல் திறன் மற்றும் நெகிழ்ச்சி',
                  'மன ஒழுக்கம் மற்றும் கட்டுப்பாடு',
                  'பாரம்பரிய கலை வடிவத்தை பாதுகாத்தல்'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-custom"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">மணிகண்டன் பற்றி</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 sm:space-y-6 text-gray-700"
              >
                <p className="text-base sm:text-lg leading-relaxed">மணிகண்டன் அவர்கள் 10 ஆண்டுகளுக்கும் மேலான சிலம்பம் பயிற்சி அனுபவம் கொண்டவர்.</p>
                <p className="text-base sm:text-lg leading-relaxed">பல்வேறு போட்டிகளில் வெற்றி பெற்று, இந்த பாரம்பரிய கலையை பாதுகாத்து வருகிறார்.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative h-60 sm:h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl overflow-hidden shadow-custom"
              >
                <img src="/images/mani.png" alt="Manikandan" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Masonry Layout */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">வெற்றி புகைப்படங்கள்</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                title: 'தேசிய போட்டி வெற்றி',
                description: '2023 தேசிய சிலம்பம் போட்டி',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
                delay: 0.1
              },
              {
                title: 'மாநில போட்டி வெற்றி',
                description: '2023 மாநில சிலம்பம் போட்டி',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
                delay: 0.2
              },
              {
                title: 'மாவட்ட போட்டி வெற்றி',
                description: '2023 மாவட்ட சிலம்பம் போட்டி',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
                delay: 0.3
              },
              {
                title: 'பயிற்சி அரங்கம்',
                description: 'சிலம்பம் பயிற்சி அரங்கம்',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
                delay: 0.4
              },
              {
                title: 'போட்டி அரங்கம்',
                description: 'சிலம்பம் போட்டி அரங்கம்',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
                delay: 0.5
              },
              {
                title: 'வெற்றி விழா',
                description: 'சிலம்பம் வெற்றி விழா',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-custom hover:shadow-custom-lg transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details with Cards */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">பயிற்சி விவரங்கள்</h2>
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-700">பயிற்சி நேரம்</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  <span>காலை: 6:00 AM - 8:00 AM</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  <span>மாலை: 5:00 PM - 8:00 PM</span>
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-700">கட்டண விவரங்கள்</h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-gray-700"
              >
                மாதாந்திர கட்டணம்: ₹1000
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section with Floating Labels */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">தொடர்பு கொள்ள</h2>
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-6 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-custom"
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base"
                >
                  பெயர்
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base"
                >
                  மின்னஞ்சல்
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 peer"
                  rows={4}
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary-500 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base"
                >
                  செய்தி
                </label>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 sm:py-4 rounded-lg transition-colors duration-300 font-semibold text-base sm:text-lg"
              >
                அனுப்பு
              </motion.button>
            </motion.form>
            <div className="mt-8 sm:mt-12 flex justify-center space-x-6 sm:space-x-8">
              {[
                { icon: FaWhatsapp, color: 'text-green-600', href: 'https://wa.me/91XXXXXXXXXX' },
                { icon: FaFacebook, color: 'text-blue-600', href: '#' },
                { icon: FaInstagram, color: 'text-pink-600', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  className={`${social.color} hover:opacity-80 transition-all duration-300`}
                >
                  <social.icon size={32} className="sm:hidden" />
                  <social.icon size={40} className="hidden sm:block" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Gradient */}
      <footer className="bg-gradient-to-r from-primary-900 via-secondary-900 to-accent-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg mb-3 sm:mb-4"
          >
            © 2024 இமயவர்மன் சிலம்பம் பயிற்சி மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-gray-300"
          >
            Designed with ❤️ by JAYANESH
          </motion.p>
        </div>
      </footer>
    </main>
  );
} 