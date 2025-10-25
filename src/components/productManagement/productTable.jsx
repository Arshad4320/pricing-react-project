const ProductTable = ({ product }) => {
  return (
    <div className="p-5">
      <table className="min-w-full border border-gray-300 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Product Price</th>
            <th className="border border-gray-300 px-4 py-2">
              Product Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((p, i) => {
            return (
              <tr key={i}>
                <td className="border border-gray-300 px-4 py-2">{p.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  ৳ {p.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {p.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
