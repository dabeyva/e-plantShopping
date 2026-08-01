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
                    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bac?w=500&auto=format&fit=crop",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500&auto=format&fit=crop",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=500&auto=format&fit=crop",
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
                    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=500&auto=format&fit=crop",
                    description: "Calming scent, helps reduce stress.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=500&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=500&auto=format&fit=crop",
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
                    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500&auto=format&fit=crop",
                    description: "Soothes burns and skin irritation.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=500&auto=format&fit=crop",
                    description: "Boosts immune system function.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500&auto=format&fit=crop",
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
