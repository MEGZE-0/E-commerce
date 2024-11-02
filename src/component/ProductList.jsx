import { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonLoader from './SkLoader';
import Pagination from './Pagination';
import ParticleEffect from './ParticleEffect'; 
import './css/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [hoveredCard, setHoveredCard] = useState(null); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const cachedProducts = sessionStorage.getItem('products');
                if (cachedProducts) {
                    setProducts(JSON.parse(cachedProducts));
                    setLoading(false);
                    return;
                }

                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                sessionStorage.setItem('products', JSON.stringify(response.data));
            } catch {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <SkeletonLoader count={productsPerPage} />;
    if (error) return <div className="text-center text-danger">{error}</div>;

    return (
        <div className="container-fluid mt-5 g-1">
            <div className="row">
                {currentProducts.map(product => (
                    <div
                        key={product.id}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                        onMouseEnter={() => setHoveredCard(product.id)} 
                        onMouseLeave={() => setHoveredCard(null)} 
                    >
                        <div className="card h-100 position-relative">
                            {/* Particle effect only shows when the card is hovered */}
                            <ParticleEffect isHovered={hoveredCard === product.id} />
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <p className="card-text text-right">Rating: {product.rating?.rate || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductList;
