import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    // Sincronizar el estado local addedToCart según los elementos presentes en Redux
    useEffect(() => {
        const updatedAddedToCart = {};
        cartItems.forEach(item => {
            updatedAddedToCart[item.name] = true;
        });
        setAddedToCart(updatedAddedToCart);
    }, [cartItems]);

    // Calcular el número total de artículos en el carrito para el icono de la Navbar
    const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "12"
                }
            ]
        },
        {
            category: "Aromatic Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
                    description: "Calming scent, helps reduce stress.",
                    cost: "20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729808999-652d3a042971?q=80&w=1000&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "18"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283083_1280.jpg",
                    description: "Soothes burns and skin irritation.",
                    cost: "14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/11/20/02/echinacea-564700_1280.jpg",
                    description: "Boosts immune system function.",
                    cost: "16"
                }
            ]
        }
    ];

    return (
        <div>
            {/* Navbar principal */}
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '50px', width: '50px' }} />
                        <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: 'white', fontSize: '12px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <div>
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
                            <h1 className="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="30" width="30">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.16211,72.00635l-24.39453,85.38086A23.99222,23.99222,0,0,1,180.69531,176H83.30469a23.99222,23.99222,0,0,1-23.07227-18.61279L33.72266,32H16a8,8,0,0,1,0-16H33.72266a16.02237,16.02237,0,0,1,15.38135,11.59229L53.90527,48H216a8.00039,8.00039,0,0,1,7.57031,10.59082Z" fill="white"></path>
                                </svg>
                                <span className="cart_quantity_count" style={{ marginLeft: '5px', fontSize: '18px', backgroundColor: '#e53935', borderRadius: '50%', padding: '2px 8px' }}>
                                    {calculateTotalQuantity()}
                                </span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {/* Alternar entre el catálogo de plantas y el carrito de compras */}
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
                                <div>{category.category}</div>
                            </h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">${plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;