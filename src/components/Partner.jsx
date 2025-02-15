const Partner = () => {
  const partners = [
    {
      id: 1,
      name: 'KIA',
      logo: './public/assets/kia.png'
    },
    {
      id: 2,
      name: 'Texnopari',
      logo: './assets/texno.png'
    },
    {
      id: 3,
      name: 'BYD',
      logo: './assets/byd.png'
    },
    {
      id: 4,
      name: 'SAG',
      logo: './assets/sag.png'
    },
    {
      id: 5,
      name: 'Artel',
      logo: './assets/artel.png'
    },
    {
      id: 6,
      name: 'Akfa',
      logo: './assets/akfa.png'
    },
    {
      id: 7,
      name: 'Imzo',
      logo: './assets/imzo.png'
    },
    {
      id: 8,
      name: 'Ecobozor',
      logo: './assets/ecobozor.png'
    },
    {
      id: 9,
      name: 'UzAuto Motors',
      logo: './assets/uzauto.png'
    },
    {
      id: 10,
      name: 'Tashkent City Mall',
      logo: './assets/citymall.png'
    },
    {
      id: 11,
      name: 'Uzbekistan Airways',
      logo: './assets/uzair.png'
    },
    {
      id: 12,
      name: 'Metro',
      logo: './assets/metro.png'
    },
    {
      id: 13,
      name: 'IT Park',
      logo: './assets/itpark.png'
    },
    {
      id: 14,
      name: 'Pepsi',
      logo: './assets/pepsi.png'
    },
    {
      id: 15,
      name: 'Coca Cola',
      logo: './assets/cola.png'
    },
    {
      id: 16,
      name: 'Tashkent City',
      logo: './assets/city.png'
    },
    {
      id: 17,
      name: 'Uzum',
      logo: './assets/uzum.png'
    },
    {
      id: 18,
      name: 'Hilton',
      logo: './assets/hilton.png'
    },
    {
      id: 19,
      name: 'Hyatt Regency',
      logo: './assets/hyatt.png'
    },
    {
      id: 20,
      name: 'InterContinental',
      logo: './assets/inter.png'
    },
    {
      id: 21,
      name: 'Sofia',
      logo: './assets/sofia.png'
    },
    {
      id: 22,
      name: 'Giotto',
      logo: './assets/giotto.png'
    },
    {
      id: 23,
      name: 'Loook',
      logo: './assets/loook.png'
    },
    {
      id: 24,
      name: 'CAEx',
      logo: './assets/caex.png'
    },
    {
      id: 25,
      name: 'CAE',
      logo: './assets/cae.png'
    },
    {
      id: 26,
      name: 'Enter Engineering',
      logo: './assets/enter.png'
    },
    {
      id: 27,
      name: 'Silk Road Samarkand',
      logo: './assets/silk.png'
    },
    {
      id: 28,
      name: 'Magic City',
      logo: './assets/magic.png'
    }
  ]

  return (
    <section className="container py-10">
      <div className="">
        <h2 className="text-3xl text-center lg:text-left font-bold mb-8 lg:mb-12">Нам доверяют</h2>
        
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex items-center justify-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner