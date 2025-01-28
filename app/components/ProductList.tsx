import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "Lemon Handwash",
    volume: 100,
    price: 11.00,
    unit: "ml",
  },
  {
    name: "Aloe Vera Shampoo",
    volume: 100,
    price: 35.00,
    unit: "ml",
  },
  {
    name: "Aroma Soothing Bodywash",
    volume: 100,
    price: 30.00,
    unit: "ml",
  },
  {
    name: "Dishwash Liquid",
    volume: 100,
    price: 12.00,
    unit: "ml",
  },
  {
    name: "Front Load Laundry Detergent with Fabric Conditioner",
    volume: 100,
    price: 15.00,
    unit: "ml",
  },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-lg">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold mb-2">
              {product.volume}{product.unit} @ ₹{product.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              (₹{(product.price / product.volume).toFixed(2)}/{product.unit})
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

