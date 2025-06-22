import React from 'react'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

interface DonationCardProps {
  name: string
  price: number
  features?: string[]
  description?: string
  amount?: number
  icon?: string
  label?: string
  popular?: boolean
  button?: string
  monthly?: boolean
}

const iconMap: Record<string, React.ReactNode> = {
  gem: <span className="text-blue-400"><i className="fas fa-gem" /></span>,
  'box-open': <span className="text-blue-400"><i className="fas fa-box-open" /></span>,
  diamond: <span className="text-blue-400"><i className="fas fa-diamond" /></span>,
  coins: <span className="text-blue-400"><i className="fas fa-coins" /></span>,
  fish: <span className="text-blue-400"><i className="fas fa-fish" /></span>,
  crown: <span className="text-blue-400"><i className="fas fa-crown" /></span>,
  heart: <span className="text-pink-400"><i className="fas fa-heart" /></span>,
  star: <span className="text-yellow-400"><i className="fas fa-star" /></span>,
  'comment-slash': <span className="text-blue-300"><i className="fas fa-comment-slash" /></span>,
  ban: <span className="text-red-400"><i className="fas fa-ban" /></span>,
}

export const DonationCard: React.FC<DonationCardProps> = ({
  name, price, features, description, amount, icon, label, popular, button, monthly
}) => {
  return (
    <div className={`relative bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-6 flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl min-h-[340px]`}>  
      {popular && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3 mr-1" />
            {label || 'Популярный'}
          </span>
        </div>
      )}
      {icon && (
        <div className="mb-4 text-4xl">{iconMap[icon]}</div>
      )}
      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">{name}{amount ? ` (${amount})` : ''}</h3>
      <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-200 mb-1 text-center">
        {price} <span className="text-base font-medium text-blue-400">руб.{monthly ? '/мес' : ''}</span>
      </div>
      {features && (
        <ul className="text-sm text-slate-700 dark:text-slate-200 mb-4 mt-2 w-full space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2"><span className="text-blue-400">•</span> {f}</li>
          ))}
        </ul>
      )}
      {description && (
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 text-center min-h-[48px]">{description}</p>
      )}
      <Button
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 mt-auto"
        onClick={() => alert(`Переход к оплате: ${name}`)}
      >
        {button || 'Купить сейчас'}
      </Button>
    </div>
  )
}
