import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const team = [
    {
      name: 'Mbom Didier',
      role: 'CEO & Founder',
      image: 'https://i.ibb.co/1GRFfTVr/portrait-expressive-young-man-wearing-formal-suit.jpg',
      bio: 'With over 20 years of consulting experience, Didier leads our global team with vision and expertise.',
    },
    {
      name: 'Mbom',
      role: 'Head of Strategy',
      image: 'https://i.ibb.co/mFvXBPG3/medium-shot-man-working-as-real-estate-agent.jpg',
      bio: 'Mbom brings deep expertise in strategic planning and market analysis to our consulting practice.',
    },
    {
      name: 'Jordan B',
      role: 'Digital Transformation Lead',
      image: 'https://i.ibb.co/5h21tDJY/Chat-GPT-Image-9-avr-2025-20-54-56.png',
      bio: 'Jordan  guides our clients through complex digital transformation initiatives with proven success.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - International Consulting</title>
        <meta name="description" content="Learn about our experienced team of consultants and our mission to transform businesses globally." />
      </Helmet>

      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous sommes une équipe de consultants expérimentés qui se consacrent à aider les entreprises à prospérer sur le marché mondial.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notre Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chez International Consulting, nous nous engageons à offrir une valeur exceptionnelle à nos clients grâce à des solutions innovantes et à des conseils stratégiques. Notre mission est de donner aux entreprises les moyens de réussir dans un marché mondial de plus en plus complexe.
                  Nous combinons une expertise sectorielle approfondie avec des méthodologies de pointe pour aider les organisations à relever les défis, à saisir les opportunités et à atteindre une croissance durable.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We combine deep industry expertise with cutting-edge methodologies to help organizations navigate challenges, seize opportunities, and achieve sustainable growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative h-96"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team collaboration"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Notre équipe de direction</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Rencontrez les experts à l’origine de notre succès
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Values</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Les principes qui guident notre travail
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous visons l’excellence dans tout ce que nous faisons, offrant des résultats exceptionnels à nos clients.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous favorisons l’innovation et la pensée créative pour résoudre des défis commerciaux complexes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous maintenons les normes les plus élevées d’intégrité et de professionnalisme dans toutes nos interactions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;