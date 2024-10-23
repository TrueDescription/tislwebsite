import React, { useState } from 'react';
import Filter from '@/components/publications/fillter';
import PublicationCard from '@/components/publications/publicationCard';
import HomeNavbar from '@/components/home/HomeNavbar';
import Publication from "@/components/publications/publicationType";

const publicationsData: Publication[] = [
  {
    title: 'When does Self-Prediction help? Understanding Auxiliary Tasks in Reinforcement Learning',
    authors: ['Claas Voelcker', 'Tyler Kastner', 'Igor Gilitschenski', 'Amir-Massoud Farahmand'],
    year: 2024,
    publicationType: 'pubtype-paper-conference',
    links: {
      pdf: '/publication/202407-rlc-aux_tasks_in_rl/rlc2024-aux_tasks_in_rl.pdf',
      code: 'https://github.com/adaptive-agents-lab/understading_auxilliary_tasks',
      cite: '/publication/202407-rlc-aux_tasks_in_rl/cite.bib',
    },
    slug: 'temp-1'
  },
  {
    title: 'Self-Prediction and Reinforcement Learning: A New Approach',
    authors: ['John Doe', 'Jane Smith'],
    year: 2023,
    publicationType: 'pubtype-paper-conference',
    links: {
      pdf: '/publication/202407-rlc-aux_tasks_in_rl/rlc2023-aux_tasks_in_rl.pdf',
      code: 'https://github.com/adaptive-agents-lab/reinforcement_learning',
      cite: '/publication/202407-rlc-aux_tasks_in_rl/cite.bib',
    },
    slug: 'temp-2'
  },
];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('*');
  const [filterYear, setFilterYear] = useState('*');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === 'pubtype') {
      setFilterType(value);
    } else if (filterType === 'year') {
      setFilterYear(value);
    }
  };

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === '*' || pub.publicationType === filterType;
    const matchesYear = filterYear === '*' || `year-${pub.year}` === filterYear;
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <div>
        <HomeNavbar />
        <div className="flex justify-center min-h-screen">
        <div className="publications-page w-full max-w-4xl py-12 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Publications</h1>
            <div className="text-center mb-6">
            <Filter
                onSearchChange={handleSearchChange}
                onFilterChange={handleFilterChange}
                years={[2024, 2023, 2022]}
                publicationTypes={[
                { label: 'Journal article', value: 'pubtype-article-journal' },
                { label: 'Conference paper', value: 'pubtype-paper-conference' },
                ]}
            />
            </div>
            <div className="publications-container grid justify-center">
                {filteredPublications.map((pub, index) => (
                    <div key={index} className='mb-5'>
                        <PublicationCard {...pub} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    </div>
  );
}
