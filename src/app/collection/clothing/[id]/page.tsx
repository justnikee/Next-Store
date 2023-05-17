export async function generateStaticParams() {
  const Products = await fetch(`http://localhost:3000/api/get`).then((res) => res.json());
  console.log(Products)
  return Products.map((product: any) => ({
    slug: product.slug,
  }));
}