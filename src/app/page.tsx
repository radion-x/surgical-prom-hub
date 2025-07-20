'use client';

import { useState, useMemo } from 'react';
import { assessments, categories } from '@/data/assessments';
import AssessmentCard from '@/components/AssessmentCard';
import FilterBar from '@/components/FilterBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAssessments = useMemo(() => {
    return assessments.filter((assessment) => {
      const matchesCategory = selectedCategory === 'All' || assessment.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        assessment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assessment.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assessment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assessment.bodyPart.some(part => part.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {filteredAssessments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No assessments found</div>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Available Assessments
                <span className="text-lg font-normal text-gray-500 ml-2">
                  ({filteredAssessments.length} {filteredAssessments.length === 1 ? 'tool' : 'tools'})
                </span>
              </h2>
              <p className="text-gray-600">
                Click on any assessment card to access the digital tool
              </p>
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
