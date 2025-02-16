import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  {
    title: 'Baby Products',

    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/Copy-of-CATEGORIES.png',
    link: 'https://dhircrickllc.com/product-category/baby-products/'
  },
  {
    title: 'Beauty Products',

    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-8.png',
    link: 'https://dhircrickllc.com/product-category/beauty-products/'
  },
  {
    title: 'Grocery & Gourmet',
  
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-7.png',
    link: 'https://dhircrickllc.com/product-category/grocery-gourmet/'
  },
  {
    title: 'Home & Kitchen',

    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-6.png',
    link: 'https://dhircrickllc.com/product-category/home-kitchen/'
  },
  {
    title: 'Lawn, Patio & Garden',
  
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-5.png',
    link: 'https://dhircrickllc.com/product-category/lawn-patio-garden/'
  },
  {
    title: 'Office Products',
  
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-4.png',
    link: 'https://dhircrickllc.com/product-category/office-products/'
  },
  {
    title: 'Pet Supplies',
  
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-3.png',
    link: 'https://dhircrickllc.com/product-category/pet-supplies/'
  },
  {
    title: 'Supplements',
  
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-1.png',
    link: 'https://dhircrickllc.com/product-category/supplements/'
  },
  {
    title: 'Tools & Improvement',
   
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-10.png',
    link: 'https://dhircrickllc.com/product-category/tools-improvement/',
  },
  {
    title: 'Toys & Games',
 
    imgSrc: 'https://dhircrickllc.com/wp-content/uploads/2025/01/CATEGORIES-9.png',
    link: 'https://dhircrickllc.com/product-category/toys-games/',
  },
];

const ProductCategories = () => {
  return (
    <div className="container">
        <h1 className='text-center my-5'>OUR CATEGORIES</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {categories.map((category, index) => (
          <div key={index} className="col">
            <div className="">
              <a href={category.link} className="category-link d-block text-decoration-none">
                <img
                  src={category.imgSrc}
                  alt={category.title}
                  className="card-img-top"
                  loading="lazy"
                />
                <div className="hover-mask   w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center text-center ">
                  <div className="text-black">
                    <h5>{category.title} </h5>
                    <p>View {category.count} products</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
