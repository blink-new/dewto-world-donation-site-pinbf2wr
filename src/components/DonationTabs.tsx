import React, { useState } from 'react'
import { donationCategories } from './CategoryData'
import { DonationCategory } from './DonationCategory'

export const DonationTabs: React.FC = () => {
  const [active, setActive] = useState('privileges')
  const categories = donationCategories

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 border-blue-400 bg-white/70 dark:bg-slate-900/70 text-blue-900 dark:text-blue-100 hover:bg-blue-500 hover:text-white hover:shadow-lg ${active === cat.id ? 'bg-blue-500 text-white shadow-lg' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {categories.map(cat => (
            <div key={cat.id} style={{ display: active === cat.id ? 'block' : 'none' }}>
              <DonationCategory category={cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
