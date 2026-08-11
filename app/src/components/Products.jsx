// import React from 'react'
// import useFetch from '../hooks/useFetch'

// const Products = () => {

//      const {data:products, loading, error} =  useFetch('https://fakestoreapi.com/products')

//   return (
//     <div>
//           <h1>Products Gallery</h1>
//           {loading &&  <p>Loading....Please wait!</p>}
//           {error &&  <p> Error Detected: {error}</p>}
//           <ul>
//             {
//                 products.map((product)=>(
//                     <li key={product.id} >

//                         <h1>{product.title}</h1>
//                         <img src={product.image} alt={product.title} />
//                          <p>{product.description}</p>
//                          <h1>{product.price}</h1>
//                     </li>
//                 ))
//             }
//           </ul>
//     </div>
//   )
// }

// export default Products


import React from "react";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 mb-2">
          Discover & Shop
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Products <span className="text-indigo-600">Gallery</span>
        </h1>

        <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
          Explore our collection of quality products, carefully selected
          for your everyday needs.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>

          <p className="mt-4 text-slate-600 font-medium">
            Loading products...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="max-w-xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-red-600 font-semibold">
            Error Detected
          </p>

          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        </div>
      )}

      {/* Products */}
      {!loading && !error && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Image */}
              <div className="relative h-72 bg-slate-100 flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm capitalize">
                  {product.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6">
                
                <h2 className="text-lg font-bold text-slate-900 line-clamp-2 min-h-[56px] group-hover:text-indigo-600 transition-colors">
                  {product.title}
                </h2>

                <p className="text-sm text-slate-500 mt-3 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Price
                    </p>

                    <p className="text-2xl font-extrabold text-slate-900">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-700 active:scale-95 transition-all"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Products;

