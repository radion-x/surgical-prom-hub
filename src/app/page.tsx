'use client';

import { useState, useMemo } from 'react';
import { assessments, categories } from '@/data/assessments';
import AssessmentCard from '@/components/AssessmentCard';
import FilterBar from '@/components/FilterBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickAccess from '@/components/QuickAccess';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAssessments = useMemo(() => {
    return assessments.filter((assessment) => {
      const matchesCategory = selectedCategory === 'All' || assessment.category === selectedCategory;
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch = q === '' || 
        assessment.name.toLowerCase().includes(q) ||
        assessment.abbreviation.toLowerCase().includes(q) ||
        assessment.description.toLowerCase().includes(q) ||
        assessment.bodyPart.some(part => part.toLowerCase().includes(q));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
  <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 text-gray-700 text-sm">
          <p>
            Explore the PROMs used in Professor Buckland’s practice. Use quick access for one‑click
            opening, or filter and search to find a specific instrument.
          </p>
        </div>

        <QuickAccess />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {filteredAssessments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-600 text-lg mb-2">No PROMs found</div>
            <p className="text-gray-500">Try adjusting your search or selecting a different category.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Available PROMs
                <span className="text-lg font-normal text-gray-500 ml-2">
                  ({filteredAssessments.length} {filteredAssessments.length === 1 ? 'tool' : 'tools'})
                </span>
              </h2>
              <p className="text-gray-600">Click any card to open the questionnaire.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssessments.map((assessment) => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
