'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState } from 'react';

const Gallery = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBefore, setShowBefore] = useState(true);

  const projects = [
    {
      id: 1,
      category: 'interior',
      title: t('portfolio.projects.modernSalon.title'),
      location: t('portfolio.projects.modernSalon.location'),
      description: t('portfolio.projects.modernSalon.description'),
      beforeImage: '/portfolio/projects/salon-before.jpg',
      afterImage: '/portfolio/projects/salon-after.jpg',
    },
    {
      id: 2,
      category: 'exterior',
      title: t('portfolio.projects.villaExterior.title'),
      location: t('portfolio.projects.villaExterior.location'),
      description: t('portfolio.projects.villaExterior.description'),
      beforeImage: '/portfolio/projects/villa-before.jpg',
      afterImage: '/portfolio/projects/villa-after.jpg',
    },
    {
      id: 3,
      category: 'decorative',
      title: t('portfolio.projects.bedroomDecor.title'),
      location: t('portfolio.projects.bedroomDecor.location'),
      description: t('portfolio.projects.bedroomDecor.description'),
      beforeImage: '/portfolio/projects/bedroom-before.jpg',
      afterImage: '/portfolio/projects/bedroom-after.jpg',
    },
    {
      id: 4,
      category: 'interior',
      title: t('portfolio.projects.officeSpace.title'),
      location: t('portfolio.projects.officeSpace.location'),
      description: t('portfolio.projects.officeSpace.description'),
      beforeImage: '/portfolio/projects/office-before.jpg',
      afterImage: '/portfolio/projects/office-after.jpg',
    },
    {
      id: 5,
      category: 'interior',
      title: t('portfolio.projects.apartmentRenovation.title'),
      location: t('portfolio.projects.apartmentRenovation.location'),
      description: t('portfolio.projects.apartmentRenovation.description'),
      beforeImage: '/portfolio/projects/apartment-before.jpg',
      afterImage: '/portfolio/projects/apartment-after.jpg',
    },
    {
      id: 6,
      category: 'decorative',
      title: t('portfolio.projects.restaurantWall.title'),
      location: t('portfolio.projects.restaurantWall.location'),
      description: t('portfolio.projects.restaurantWall.description'),
      beforeImage: '/portfolio/projects/restaurant-before.jpg',
      afterImage: '/portfolio/projects/restaurant-after.jpg',
    },
  ];

  const filters = [
    { id: 'all', label: t('portfolio.all') },
    { id: 'interior', label: t('portfolio.interior') },
    { id: 'exterior', label: t('portfolio.exterior') },
    { id: 'decorative', label: t('portfolio.decorative') },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setShowBefore(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 bg-[#2b2b2d]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              {/* Placeholder image with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">{t('portfolio.viewDetails')}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </p>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Before/After Toggle */}
            <div className="relative">
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white text-xl font-semibold">
                      {showBefore ? t('portfolio.before') : t('portfolio.after')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Toggle buttons */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    showBefore
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {t('portfolio.before')}
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    !showBefore
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {t('portfolio.after')}
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {selectedProject.location}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
