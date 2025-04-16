import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import type { Post } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - International Consulting</title>
        <meta name="description" content="Latest insights and articles about business strategy, digital transformation, and market research." />
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6"> Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              En maintenance
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      By {post.author}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      Read More
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;