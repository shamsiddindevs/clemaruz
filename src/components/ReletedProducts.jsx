import Card from "./Card";


const RelatedProducts = ({products}) => {
    console.log(products);
    
 
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Похожие товары</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <Card key={product.id} category={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;