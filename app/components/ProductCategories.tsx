import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const products = [
  { category: "Handwash", description: "Gentle and effective hand cleansing", refillSize: "250ml, 500ml", ecoImpact: "Reduces plastic waste by 80%" },
  { category: "Detergent Liquid", description: "Powerful cleaning for all fabrics", refillSize: "1L, 2L", ecoImpact: "Saves 4 plastic bottles per 2L refill" },
  { category: "Dishwash", description: "Cuts through grease, leaves dishes sparkling", refillSize: "500ml, 1L", ecoImpact: "50% less water usage compared to bottled" },
  { category: "Body Wash", description: "Nourishing and refreshing for all skin types", refillSize: "300ml, 600ml", ecoImpact: "100% biodegradable formula" },
  { category: "Shampoo", description: "For healthy, shiny hair", refillSize: "250ml, 500ml", ecoImpact: "Packaging-free, saves 3 bottles per refill" },
]

export function ProductCategories() {
  return (
    <Table>
      <TableCaption>Our Eco-Friendly Refill Products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Refill Sizes</TableHead>
          <TableHead>Eco Impact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.category}>
            <TableCell className="font-medium">{product.category}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.refillSize}</TableCell>
            <TableCell>{product.ecoImpact}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

