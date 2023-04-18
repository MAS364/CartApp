import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt=''/>
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;





// import React from 'react';

// class CartItem extends React.Component {
//   render () {
//     const { qty, price, title } = this.props.product;
//     const { product } = this.props;

//     return (
//       <div className="cart-item">
//         <div className="left-block">
//           <img
//             style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }}
//             src={product.img}
//           />
//         </div>
//         <div className="right-block">
//           <div style={{ fontSize: 25 }}> {title} </div>
//           <div style={{ color: '#777' }}>{price}</div>
//           <div style={{ color: '#777' }}>Qty: {qty}</div>
//           <div className="cart-item-actions">
//             <img 
//               alt="add"
//               src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
//               className="action-icons"
//               onClick={() => this.props.onIncreaseQuantity(product)}
//             />
//             <img
//               alt="minus"
//               src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
//               className="action-icons"
//               onClick={() => this.props.onDecreaseQuantity(product)}
//             />
//             <img
//               alt="delete"
//               src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
//               className="action-icons"
//               onClick={() => this.props.onDeleteProduct(product.id)}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default CartItem;