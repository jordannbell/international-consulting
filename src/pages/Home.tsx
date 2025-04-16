import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { LineChart, Laptop, Search } from 'lucide-react';

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', // Réunion d'affaires
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', // Analyse financière
    'https://images.unsplash.com/photo-1552664730-d307ca884978', // Présentation
    'https://images.unsplash.com/photo-1557804506-669a67965ba0'  // Bureau moderne
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <LineChart className="h-8 w-8 text-primary-500" />,
      title: 'Conseil Stratégique',
      description: 'Expertise pour la croissance et l\'expansion sur les marchés internationaux.',
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary-500" />,
      title: 'Transformation Digitale',
      description: 'Solutions numériques complètes pour moderniser vos opérations.',
    },
    {
      icon: <Search className="h-8 w-8 text-primary-500" />,
      title: 'Étude de Marché',
      description: 'Analyse approfondie du marché et de la concurrence pour des décisions éclairées.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>International Consulting - Solutions d'Expertise en Conseil</title>
        <meta name="description" content="Cabinet de conseil international leader offrant des services de conseil stratégique, de transformation digitale et d'études de marché." />
      </Helmet>

      {/* Hero Section avec Images Défilantes */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 transition-opacity duration-1000">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transformez Votre Entreprise avec Notre Expertise
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Nous accompagnons les entreprises dans leur développement international, leur transformation numérique et leur croissance durable.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Commencer
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Des solutions complètes pour vos besoins professionnels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expertise avec Image */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notre Expertise</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Avec plus de 20 ans d'expérience, nous avons développé une expertise unique dans l'accompagnement des entreprises à l'international.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Stratégie d'expansion internationale</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Innovation technologique</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Optimisation des processus</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Équipe de consultants"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à Transformer Votre Entreprise ?</h2>
          <p className="text-lg text-primary-100 mb-8">Contactez-nous aujourd'hui pour une consultation gratuite</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Nous Contacter
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;