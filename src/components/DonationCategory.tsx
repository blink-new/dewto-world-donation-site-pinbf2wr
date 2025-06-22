import React from 'react'
import { DonationCard } from './DonationCard'

interface DonationCategoryProps {
  category: {
    id: string
    name: string
    items: any[]
  }
}

export const DonationCategory: React.FC<DonationCategoryProps> = ({ category }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-10 font-heading text-blue-900 dark:text-blue-100">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {category.items.map((item, idx) => (
          <DonationCard key={item.name + idx} {...item} />
        ))}
      </div>
    </div>
  )
}
