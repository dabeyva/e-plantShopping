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

    useEffect(() => {
        const updatedAddedToCart = {};
        cartItems.forEach(item => {
            updatedAddedToCart[item.name] = true;
        });
        setAddedToCart(updatedAddedToCart);
    }, [cartItems]);

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
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e2f0d9'/><path d='M100 30 Q70 90 90 170 Q130 90 100 30 Z' fill='%232e7d32'/><path d='M80 60 Q60 110 75 170 Q105 110 80 60 Z' fill='%23388e3c'/><path d='M120 60 Q140 110 125 170 Q95 110 120 60 Z' fill='%231b5e20'/></svg>",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23f0f4c3'/><path d='M100 120 Q30 80 10 130 Q70 140 100 120 Z' fill='%2343a047'/><path d='M100 120 Q170 80 190 130 Q130 140 100 120 Z' fill='%2343a047'/><path d='M100 120 Q50 40 30 70 Q80 100 100 120 Z' fill='%232e7d32'/><path d='M100 120 Q150 40 170 70 Q120 100 100 120 Z' fill='%232e7d32'/></svg>",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e8f5e9'/><path d='M100 170 Q80 120 100 80 Q120 120 100 170 Z' fill='%231b5e20'/><path d='M100 90 Q85 40 100 20 Q115 40 100 90 Z' fill='%23ffffff' stroke='%23cccccc'/><circle cx='100' cy='60' r='4' fill='%23fbc02d'/></svg>",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Aromatic Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23f3e5f5'/><line x1='100' y1='170' x2='100' y2='50' stroke='%23388e3c' stroke-width='4'/><circle cx='100' cy='50' r='8' fill='%238e24aa'/><circle cx='92' cy='65' r='7' fill='%23ab47bc'/><circle cx='108' cy='65' r='7' fill='%23ab47bc'/><circle cx='90' cy='80' r='8' fill='%238e24aa'/><circle cx='110' cy='80' r='8' fill='%238e24aa'/></svg>",
                    description: "Calming scent, helps reduce stress.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23fffde7'/><path d='M100 170 Q80 130 100 90 Q120 130 100 170 Z' fill='%232e7d32'/><circle cx='100' cy='70' r='12' fill='%23ffffff'/><circle cx='85' cy='70' r='10' fill='%23ffffff'/><circle cx='115' cy='70' r='10' fill='%23ffffff'/><circle cx='100' cy='55' r='10' fill='%23ffffff'/><circle cx='100' cy='85' r='10' fill='%23ffffff'/><circle cx='100' cy='70' r='5' fill='%23fbc02d'/></svg>",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e8f5e9'/><line x1='100' y1='170' x2='100' y2='40' stroke='%232e7d32' stroke-width='5'/><line x1='100' y1='140' x2='70' y2='120' stroke='%23388e3c' stroke-width='3'/><line x1='100' y1='140' x2='130' y2='120' stroke='%23388e3c' stroke-width='3'/><line x1='100' y1='110' x2='65' y2='90' stroke='%23388e3c' stroke-width='3'/><line x1='100' y1='110' x2='135' y2='90' stroke='%23388e3c' stroke-width='3'/><line x1='100' y1='80' x2='75' y2='60' stroke='%23388e3c' stroke-width='3'/><line x1='100' y1='80' x2='125' y2='60' stroke='%23388e3c' stroke-width='3'/></svg>",
                    description: "Invigorating aroma, enhances focus.",
                    cost: "$15"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e0f2f1'/><path d='M100 170 Q60 110 50 40 Q80 100 100 170 Z' fill='%2326a69a'/><path d='M100 170 Q140 110 150 40 Q120 100 100 170 Z' fill='%2326a69a'/><path d='M100 170 Q85 100 90 20 Q105 90 100 170 Z' fill='%2300897b'/></svg>",
                    description: "Soothes burns and skin irritation.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23fbe9e7'/><line x1='100' y1='170' x2='100' y2='70' stroke='%23388e3c' stroke-width='4'/><ellipse cx='100' cy='65' rx='18' ry='12' fill='%23d84315'/><ellipse cx='80' cy='75' rx='15' ry='5' fill='%23ec407a'/><ellipse cx='120' cy='75' rx='15' ry='5' fill='%23ec407a'/><ellipse cx='90' cy='82' rx='15' ry='5' fill='%23ec407a'/><ellipse cx='110' cy='82' rx='15' ry='5' fill='%23ec407a'/></svg>",
                    description: "Boosts immune system function.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e8f8f5'/><path d='M100 170 Q70 120 50 110 Q90 100 100 170 Z' fill='%23117a65'/><path d='M100 170 Q130 120 150 110 Q110 100 100 170 Z' fill='%23117a65'/><path d='M100 170 Q80 80 100 40 Q120 80 100 170 Z' fill='%2316a085'/></svg>",
                    description: "Helps with digestion and relieves headaches.",
                    cost: "$13"
                }
            ]
        }
    ];

    return (
        <div>
            {/* Navbar */}
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><circle cx='25' cy='25' r='20' fill='%23ffffff'/><path d='M25 10 Q15 25 25 40 Q35 25 25 10 Z' fill='%234CAF50'/></svg>" alt="" style={{ height: '50px', width: '50px' }} />
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

            {/* Product Grid */}
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
                                        <div className="product-cost">{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                            style={addedToCart[plant.name] ? { backgroundColor: '#cccccc', color: '#666666', cursor: 'not-allowed', border: '1px solid #999999' } : {}}
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
