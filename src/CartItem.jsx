import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcular el costo total de todos los artículos en el carrito
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      // Si el costo viene con el símbolo "$", quitamos el primer carácter; si no, convertimos directamente.
      const costValue = typeof item.cost === 'string' && item.cost.startsWith('$') 
        ? parseFloat(item.cost.substring(1)) 
        : parseFloat(item.cost);
      
      total += costValue * item.quantity;
    });
    return total.toFixed(2);
  };

  // Botón para continuar comprando (regresa a la vista de productos)
  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Botón de Checkout
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // Incrementar la cantidad de un artículo
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrementar la cantidad de un artículo o eliminarlo si llega a 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Eliminar un producto del carrito
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calcular el subtotal para un producto en específico
  const calculateTotalCost = (item) => {
    const costValue = typeof item.cost === 'string' && item.cost.startsWith('$') 
      ? parseFloat(item.cost.substring(1)) 
      : parseFloat(item.cost);
    
    return (costValue * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }} className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;