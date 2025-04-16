import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { LineChart, Laptop, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <LineChart className="h-12 w-12 text-primary-500" />,
      title: 'Conseil Stratégique',
      description: 'Conseils d’experts pour favoriser la croissance de votre entreprise et l’expansion sur de nouveaux marchés. Nous vous aidons à identifier les opportunités, réduire les risques et élaborer des plans d’action concrets pour réussir.',
      features: [
        'Stratégie d’entrée sur le marché',
        'Optimisation du modèle économique',
        'Planification de la croissance',
        'Évaluation des risques',
      ],
    },
    {
      icon: <Laptop className="h-12 w-12 text-primary-500" />,
      title: 'Transformation Digitale',
      description: 'Solutions digitales complètes pour moderniser vos opérations. Nous vous accompagnons dans votre transformation numérique avec des méthodologies éprouvées.',
      features: [
        'Évaluation technologique',
        'Élaboration de stratégie digitale',
        'Automatisation des processus',
        'Gestion du changement',
      ],
    },
    {
      icon: <Search className="h-12 w-12 text-primary-500" />,
      title: 'Étude de Marché',
      description: 'Analyse approfondie du marché et étude de la concurrence pour une prise de décision éclairée. Nous vous fournissons des recommandations concrètes basées sur une analyse de données complète.',
      features: [
        'Analyse concurrentielle',
        'Analyse des tendances du marché',
        'Études du comportement des consommateurs',
        'Rapports sectoriels',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nos Services - International Consulting</title>
        <meta name="description" content="Services de conseil complets incluant la planification stratégique, la transformation digitale et l’étude de marché." />
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous proposons des services de conseil complets pour aider votre entreprise à prospérer sur le marché mondial.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                        >
                          <div className="h-2 w-2 bg-primary-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
