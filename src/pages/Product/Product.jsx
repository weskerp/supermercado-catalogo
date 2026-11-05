import { useMemo, useState } from 'react'
import {
  Search,
  Tag,
  X,
} from 'lucide-react'
import { products, categories } from '../../data/Products'
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
export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

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
      <main>
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
      </main>
    </div>
  )
}
