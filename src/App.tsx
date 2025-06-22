import React from 'react'
import { DonationTabs } from './components/DonationTabs'
import { Server, Users, Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-6 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
              <Server className="h-8 w-8 text-blue-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-heading">
                DewtoWorld
              </h1>
              <p className="text-blue-200">Minecraft Server</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-blue-200">Игроков онлайн</p>
              <p className="text-2xl font-bold text-white">247/500</p>
            </div>
            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent font-heading">
            Поддержите DewtoWorld!
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ваш донат помогает развитию сервера и открывает эксклюзивные привилегии. Присоединяйтесь к нашему сообществу и получите уникальные возможности в игре!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Users className="h-7 w-7 text-blue-300 mb-2" />
              <span className="text-blue-100 font-semibold">Онлайн: 247/500</span>
            </div>
            <div className="flex flex-col items-center">
              <Server className="h-7 w-7 text-blue-300 mb-2" />
              <span className="text-blue-100 font-semibold">Версия: 1.19.4</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-7 w-7 text-pink-300 mb-2" />
              <span className="text-blue-100 font-semibold">Онлайн 24/7</span>
            </div>
          </div>
          <button className="cta-button bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-200">
            ПОЛУЧИТЬ ПРИВИЛЕГИИ
          </button>
        </div>
      </section>

      {/* Категории и товары */}
      <DonationTabs />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-200">О сервере</h4>
            <p className="text-slate-300 mb-4">
              DewtoWorld — уникальный Minecraft сервер с модами, где каждый игрок найдет что-то интересное. Присоединяйся к нашему дружному сообществу!
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://discord.gg/tXgzSHbbnJ" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-discord text-2xl" /></a>
              <a href="https://m.vk.com/dewtoworld" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-vk text-2xl" /></a>
              <a href="https://t.me/tgdewtoworld" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-telegram text-2xl" /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-youtube text-2xl" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-200">Навигация</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-blue-400"><i className="fas fa-arrow-right mr-2" />Главная</a></li>
              <li><a href="#" className="hover:text-blue-400"><i className="fas fa-arrow-right mr-2" />Донат</a></li>
              <li><a href="https://docs.google.com/document/d/12ypo81TodDnmLmhI5m4bdwGKCOp6JmsPPU57LDIGVoM/edit?hl=ru&tab=t.0" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fas fa-arrow-right mr-2" />Правила</a></li>
              <li><a href="#" className="hover:text-blue-400"><i className="fas fa-arrow-right mr-2" />Форум</a></li>
              <li><a href="#footer" className="hover:text-blue-400"><i className="fas fa-arrow-right mr-2" />Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-200">Контакты</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="mailto:dewtoworld@gmail.com" className="hover:text-blue-400"><i className="fas fa-envelope mr-2" />dewtoworld@gmail.com</a></li>
              <li><a href="https://discord.gg/tXgzSHbbnJ" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-discord mr-2" />Discord сервер</a></li>
              <li><a href="https://m.vk.com/dewtoworld" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-vk mr-2" />Группа ВКонтакте</a></li>
              <li><a href="https://t.me/dwpodderzka_bot" target="_blank" rel="noopener" className="hover:text-blue-400"><i className="fab fa-telegram mr-2" />Поддержка в Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-slate-400 mt-8 border-t border-slate-700 pt-6">
          <p>&copy; 2024 DewtoWorld Minecraft Server. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
