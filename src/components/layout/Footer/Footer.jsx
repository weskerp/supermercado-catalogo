import { useMemo, useState } from 'react'
import {
  Search,
  ShoppingBasket,
  MapPin,
  Clock,
  Menu,
  Tag,
  ChevronRight,
  X,
} from 'lucide-react'

import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa'

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

export default function App() {
    const [search, setSearch] = useState('')
    return (
    <footer className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-xl font-black">Iago Nogueira</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-blue-100">
              Qualidade, variedade e economia para você e sua família.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Navegação</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-blue-100">
              <a href="#" className="hover:text-yellow-300">Início</a>
              <a href="#categorias" className="hover:text-yellow-300">Categorias</a>
              <a href="#ofertas" className="hover:text-yellow-300">Ofertas</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Redes e contato</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg bg-white/10 p-3 hover:bg-white/20"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-lg bg-white/10 p-3 hover:bg-white/20"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="rounded-lg bg-white/10 p-3 hover:bg-white/20"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-200">
          © {new Date().getFullYear()} Supermercado Iago Nogueira. Todos os direitos reservados.
        </div>
      </footer>
)}