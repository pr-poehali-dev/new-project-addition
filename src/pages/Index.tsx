import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [phone, setPhone] = useState("");
  const [carInfo, setCarInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Мы свяжемся с вами по номеру ${phone}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-primary" />
            <span className="text-2xl font-bold">АвтоДвор</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#process" className="hover:text-primary transition">Как работаем</a>
            <a href="#benefits" className="hover:text-primary transition">Преимущества</a>
            <a href="#contacts" className="hover:text-primary transition">Контакты</a>
          </nav>
          <a href="tel:+79991234567" className="flex items-center gap-2 font-bold text-lg hover:text-primary transition">
            <Icon name="Phone" size={20} />
            +7 (999) 123-45-67
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Выкупим ваш автомобиль за <span className="text-primary">30 минут</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Быстро. Выгодно. Надежно.<br/>
                Любое состояние, любой год выпуска
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать цену
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-gray-600">выкупленных авто</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">30 мин</div>
                  <div className="text-sm text-gray-600">средний срок сделки</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-gray-600">честная оценка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/94f46246-2443-478a-a915-e6ffdd5458ca/files/37076115-93ae-4344-8ff7-1358cedbdabf.jpg" 
                alt="Автомобиль" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Рыночная цена</div>
                    <div className="text-2xl font-bold">до 95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Какие автомобили выкупаем</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Работаем с любыми марками и в любом состоянии</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "CheckCircle", title: "Исправные авто", desc: "Чистые документы, хорошее состояние" },
              { icon: "Wrench", title: "После ДТП", desc: "Битые, требующие ремонта" },
              { icon: "FileX", title: "Проблемные", desc: "Без документов, в залоге, кредитные" },
              { icon: "Calendar", title: "Любой год", desc: "От новых до старых моделей" },
              { icon: "Truck", title: "Не на ходу", desc: "Эвакуатор бесплатно" },
              { icon: "Shield", title: "Срочный выкуп", desc: "Деньги сразу наличными" }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition hover-scale">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Как проходит выкуп</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Простой и понятный процесс за 4 шага</p>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { icon: "Phone", title: "Звонок", desc: "Вы звоните или оставляете заявку" },
              { icon: "Calculator", title: "Оценка", desc: "Озвучиваем предварительную цену за 5 минут" },
              { icon: "Car", title: "Осмотр", desc: "Приезжаем на осмотр в удобное время" },
              { icon: "Banknote", title: "Сделка", desc: "Оформление и деньги наличными сразу" }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    {idx + 1}
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 -mt-10">
                    <Icon name={step.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                {[
                  { icon: "Zap", title: "Быстро", desc: "Осмотр и оформление за 30 минут" },
                  { icon: "DollarSign", title: "Выгодно", desc: "До 95% от рыночной стоимости" },
                  { icon: "Shield", title: "Надежно", desc: "Официальный договор купли-продажи" },
                  { icon: "Clock", title: "Круглосуточно", desc: "Работаем 24/7 без выходных" },
                  { icon: "MapPin", title: "Выезд", desc: "Бесплатный выезд в любой район" },
                  { icon: "CheckCircle", title: "Честно", desc: "Цена не меняется после осмотра" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/94f46246-2443-478a-a915-e6ffdd5458ca/files/54f9674f-8bf9-4f8b-a8eb-45b0e86973ee.jpg" 
                alt="Автомобиль после ДТП" 
                className="rounded-xl shadow-lg hover-scale"
              />
              <img 
                src="https://cdn.poehali.dev/projects/94f46246-2443-478a-a915-e6ffdd5458ca/files/3eb76799-cf3a-4ac5-8830-e5642608ccca.jpg" 
                alt="Сделка" 
                className="rounded-xl shadow-lg hover-scale mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Узнайте стоимость вашего авто</h2>
          <p className="text-xl mb-8 opacity-90">Оставьте заявку и получите оценку за 5 минут</p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-left shadow-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Марка и модель *</label>
                <Input 
                  placeholder="Например: Toyota Camry 2015" 
                  value={carInfo}
                  onChange={(e) => setCarInfo(e.target.value)}
                  required
                  className="text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Ваш телефон *</label>
                <Input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90">
                Получить оценку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover-scale">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <a href="tel:+79991234567" className="text-primary text-xl font-bold">
                +7 (999) 123-45-67
              </a>
              <p className="text-sm text-gray-600 mt-2">Круглосуточно</p>
            </Card>

            <Card className="p-6 text-center hover-scale">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@avtodvor-nov.ru" className="text-primary">
                info@avtodvor-nov.ru
              </a>
              <p className="text-sm text-gray-600 mt-2">Ответим в течение часа</p>
            </Card>

            <Card className="p-6 text-center hover-scale">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-gray-700">г. Новосибирск</p>
              <p className="text-sm text-gray-600 mt-2">Выезд в любой район</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <span className="text-xl font-bold">АвтоДвор</span>
              </div>
              <p className="text-gray-400">Срочный выкуп автомобилей в Новосибирске</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Выкуп исправных авто</li>
                <li>Выкуп после ДТП</li>
                <li>Выкуп проблемных авто</li>
                <li>Срочный выкуп</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@avtodvor-nov.ru</li>
                <li>г. Новосибирск</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <p className="text-gray-400">Круглосуточно<br/>7 дней в неделю<br/>Без выходных</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 АвтоДвор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
