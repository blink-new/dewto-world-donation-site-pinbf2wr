import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, Shield, Zap, Crown, Gem, Pickaxe, Users, Server } from 'lucide-react'

interface DonationPackage {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  icon: React.ReactNode
  popular?: boolean
  color: string
}

const donationPackages: DonationPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 5,
    description: 'Начальная поддержка сервера',
    features: [
      'Цветной ник в чате',
      '2 дополнительных хома',
      'Доступ к /kit starter',
      'Спасибо в дискорде'
    ],
    icon: <Pickaxe className="h-8 w-8" />,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 15,
    description: 'Расширенные возможности',
    features: [
      'Все из Starter',
      'Приватный регион 50x50',
      'Доступ к /kit premium',
      '5 дополнительных хомов',
      'Приоритет входа на сервер'
    ],
    icon: <Shield className="h-8 w-8" />,
    popular: true,
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 30,
    description: 'Элитный статус игрока',
    features: [
      'Все из Premium',
      'Приватный регион 100x100',
      'Доступ к /kit elite',
      '10 дополнительных хомов',
      'Возможность создать варп',
      'Персональный префикс'
    ],
    icon: <Zap className="h-8 w-8" />,
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 50,
    description: 'VIP привилегии',
    features: [
      'Все из Elite',
      'Приватный регион 150x150',
      'Доступ к /kit vip',
      '15 дополнительных хомов',
      'Возможность летать в лобби',
      'Доступ к VIP зоне'
    ],
    icon: <Crown className="h-8 w-8" />,
    color: 'from-blue-700 to-blue-900'
  },
  {
    id: 'legend',
    name: 'Legend',
    price: 100,
    description: 'Легендарный статус',
    features: [
      'Все из VIP',
      'Приватный регион 200x200',
      'Доступ к /kit legend',
      '25 дополнительных хомов',
      'Личный NPC в лобби',
      'Возможность смены погоды',
      'Бессрочные привилегии'
    ],
    icon: <Gem className="h-8 w-8" />,
    color: 'from-blue-800 to-blue-950'
  }
]

function App() {
  const handleDonate = (packageId: string) => {
    // В реальном приложении здесь будет интеграция с платежной системой
    alert(`Переход к оплате пакета: ${donationPackages.find(p => p.id === packageId)?.name}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-6 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
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
                <p className="text-2xl font-bold text-white">47/100</p>
              </div>
              <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent font-heading">
            Поддержи DewtoWorld
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Твоя поддержка помогает нам развивать сервер, добавлять новые функции и поддерживать стабильную работу. 
            Получи эксклюзивные привилегии и помоги сообществу расти!
          </p>
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-300" />
              <span className="text-blue-200">1,200+ игроков</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-blue-200">Защита от гриферства</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-blue-200">Стабильная работа 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Выбери свой пакет
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Каждый пакет включает уникальные привилегии и помогает развитию сервера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {donationPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-1 -right-1">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-3 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${pkg.color} text-white w-fit`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-slate-800 mb-1">
                      ${pkg.price}
                    </div>
                    <div className="text-sm text-slate-500">единоразово</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 transition-all duration-200`}
                    onClick={() => handleDonate(pkg.id)}
                  >
                    Поддержать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">
            Почему стоит поддержать DewtoWorld?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Server className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Стабильность</h4>
              <p className="text-slate-600">
                Мощное оборудование и профессиональная поддержка обеспечивают стабильную работу сервера
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Сообщество</h4>
              <p className="text-slate-600">
                Дружелюбное сообщество игроков, регулярные ивенты и конкурсы
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Развитие</h4>
              <p className="text-slate-600">
                Постоянные обновления, новые возможности и улучшения игрового процесса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-200">DewtoWorld</h4>
              <p className="text-slate-300 mb-4">
                Лучший Minecraft сервер с уникальными возможностями и дружелюбным сообществом.
              </p>
              <p className="text-blue-300 font-semibold">
                IP: play.dewtoworld.ru
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-200">Связь</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Discord: discord.gg/dewtoworld</li>
                <li>VK: vk.com/dewtoworld</li>
                <li>Telegram: @dewtoworld</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-200">Информация</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Версия: 1.20.1</li>
                <li>Режим: Survival</li>
                <li>Слоты: 100</li>
                <li>Онлайн: 24/7</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 DewtoWorld. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App