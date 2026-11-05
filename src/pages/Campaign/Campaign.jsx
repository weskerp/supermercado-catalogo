  import { useMemo, useState } from 'react'
  import {
    Search,
    MapPin,
    Clock,
    Tag,
    ChevronRight,
    X,
  } from 'lucide-react'
  
  const categories = [
    'Todos',
    'Mercearia',
    'Hortifruti',
    'Bebidas',
    'Laticínios',
    'Limpeza',
    'Açougue',
  ]
  
  const products = [
    {
      id: 1,
      name: 'Arroz tipo 1 5kg',
      category: 'Mercearia',
      price: 29.90,
      promotionalPrice: 24.99,
      unit: 'unidade',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600',
    },
    {
      id: 2,
      name: 'Óleo de soja 900ml',
      category: 'Mercearia',
      price: 8.99,
      promotionalPrice: 7.49,
      unit: 'unidade',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600',
    },
    {
      id: 3,
      name: 'Banana prata',
      category: 'Hortifruti',
      price: 6.99,
      promotionalPrice: 4.99,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600',
    },
    {
      id: 4,
      name: 'Maçã nacional',
      category: 'Hortifruti',
      price: 9.99,
      promotionalPrice: 7.99,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600',
    },
    {
      id: 5,
      name: 'Leite integral 1L',
      category: 'Laticínios',
      price: 5.99,
      promotionalPrice: 4.79,
      unit: 'unidade',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600',
    },
    {
      id: 6,
      name: 'Refrigerante 2L',
      category: 'Bebidas',
      price: 9.99,
      promotionalPrice: 7.99,
      unit: 'unidade',
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600',
    },
    {
      id: 7,
      name: 'Detergente líquido',
      category: 'Limpeza',
      price: 3.49,
      promotionalPrice: 2.49,
      unit: 'unidade',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600',
    },
    {
      id: 8,
      name: 'Carne bovina',
      category: 'Açougue',
      price: 39.90,
      promotionalPrice: 34.90,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600',
    },
  ]
  
  function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  
  function ProductCard({ product }) {
    const discount = Math.round(
      (1 - product.promotionalPrice / product.price) * 100,
    )
  
    return (
      <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
  
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        </div>
  
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {product.category}
          </span>
  
          <h3 className="mt-1 min-h-12 font-semibold text-slate-800">
            {product.name}
          </h3>
  
          <div className="mt-3">
            <p className="text-sm text-slate-400 line-through">
              {formatPrice(product.price)}
            </p>
  
            <div className="flex items-end justify-between gap-2">
              <div>
                <strong className="text-2xl font-extrabold text-red-600">
                  {formatPrice(product.promotionalPrice)}
                </strong>
                <span className="ml-1 text-xs text-slate-500">
                  / {product.unit}
                </span>
              </div>
  
              <Tag size={20} className="mb-1 text-yellow-500" />
            </div>
          </div>
        </div>
      </article>
    )
  }
  export default function Campaign() {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    const filteredProducts = useMemo(() => {
      return products.filter((product) => {
        const matchesCategory =
          selectedCategory === 'Todos' ||
          product.category === selectedCategory
  
        const matchesSearch = product.name
          .toLowerCase()
          .includes(search.toLowerCase())
  
        return matchesCategory && matchesSearch
      })
    }, [search, selectedCategory])
  
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Faixa superior */}
        <div className="bg-blue-950 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
          Ofertas especiais esperando por você!
        </div>
        
  
        <main>
          {/* Banner principal */}
          <section className="bg-blue-950">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:px-8 md:py-20">
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  <Tag size={16} />
                  Economia de verdade
                </span>
  
                <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Ofertas que fazem a diferença no seu dia!
                </h2>
  
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-blue-100">
                  Confira nossas ofertas, encontre seus produtos favoritos e
                  aproveite os preços especiais do Iago Nogueira.
                </p>
  
                <a
                  href="#ofertas"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-extrabold text-blue-950 transition hover:bg-yellow-300"
                >
                  Conferir ofertas
                  <ChevronRight size={20} />
                </a>
              </div>
  
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-yellow-400/20 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
                  alt="Frutas e verduras frescas"
                  className="relative h-72 w-full rounded-3xl object-cover shadow-2xl md:h-96"
                />
  
                <div className="absolute -bottom-5 -left-3 rounded-2xl bg-yellow-400 px-5 py-4 shadow-xl sm:left-5">
                  <p className="text-xs font-bold uppercase text-blue-950">
                    Ofertas especiais
                  </p>
                  <p className="text-2xl font-black text-blue-950">
                    Toda semana!
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Informações */}
          <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-3 lg:px-8">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-950">
                <Tag size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Ofertas especiais</h3>
                <p className="text-sm text-slate-500">Preços para economizar</p>
              </div>
            </div>
  
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Perto de você</h3>
                <p className="text-sm text-slate-500">Uma unidade para atender você</p>
              </div>
            </div>
  
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Sempre atualizado</h3>
                <p className="text-sm text-slate-500">Confira nossas novidades</p>
              </div>
            </div>
          </section>
  
          {/* Categorias */}
          <section id="categorias" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-blue-950">
                Explore por categoria
              </h2>
              <p className="mt-1 text-slate-500">
                Encontre rapidamente o que você procura.
              </p>
            </div>
  
            <div className="flex gap-2 overflow-x-auto pb-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${selectedCategory === category
                      ? 'bg-blue-950 text-white'
                      : 'bg-white text-slate-600 hover:bg-blue-50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
  
          {/* Ofertas */}
          <section id="ofertas" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-red-600">
                  Aproveite
                </span>
                <h2 className="mt-1 text-3xl font-extrabold text-blue-950">
                  Ofertas em destaque
                </h2>
                <p className="mt-2 text-slate-500">
                  Confira os preços especiais selecionados para você.
                </p>
              </div>
  
              <div className="relative w-full sm:max-w-xs">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar produto..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
  
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {filteredProducts.length} produto(s) encontrado(s)
              </p>
              {selectedCategory !== 'Todos' && (
                <button
                  onClick={() => setSelectedCategory('Todos')}
                  className="text-sm font-semibold text-blue-900 hover:underline"
                >
                  Limpar categoria
                </button>
              )}
            </div>
  
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white py-16 text-center">
                <Search className="mx-auto text-slate-300" size={40} />
                <h3 className="mt-4 font-bold text-slate-700">
                  Nenhum produto encontrado
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Tente buscar por outro nome ou categoria.
                </p>
              </div>
            )}
          </section>
  
          {/* Banner secundário */}
          <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-yellow-400 px-6 py-10 sm:px-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <p className="font-bold uppercase tracking-widest text-blue-950/70">
                    Supermercado Iago Nogueira
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-blue-950 sm:text-4xl">
                    Comprar bem é economizar!
                  </h2>
                  <p className="mt-2 text-blue-950/80">
                    Acompanhe nossas ofertas e novidades.
                  </p>
                </div>
  
                <a
                  href="#ofertas"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-950 px-6 py-4 font-bold text-white transition hover:bg-blue-900"
                >
                  Ver produtos
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
  