import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

