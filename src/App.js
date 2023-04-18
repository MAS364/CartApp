import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
// import firebase from "firebase/compat/app";


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    };
       this.db = firebase.firestore();
  }

  // componentDidMount() {
  //  this.db
  // //  .collection("products")
  //      .onSnapshot(snapshot => {
  //            const products = snapshot.docs.map(doc => {
  //             const data = doc.data();
  //             data["id"] = doc.id;
  //             return data;
  //           });
  
  //           this.setState({products: products,loading: false});
  //        });

  // }

  componentDidMount() {
    this.db.collection("products").onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ products: products, loading: false });
    });
  }


  handleIncreaseQuantity = product => {
    
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // });

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
       .update({ qty: products[index].qty + 1 })
       .then(()=>{
               console.log('Updated successfully')
         })
       .catch(error => {
           console.log('Error:', error);
       });
  };
  
  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
       .update({
          qty: products[index].qty - 1
       })
       .then(()=>{
               console.log('Updated successfully')
       })
       .catch((error) => {
           console.log('Error:', error);
       });
};

  handleDeleteProduct = id => {
    const { products } = this.state;

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(()=>{
        console.log('Deleted successfully')
        })
      .catch(error => {
          console.log('Error:', error);
      });
    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items
    // })
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map(product => {
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
         return " ";
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
       .collection("products")
       .add({
      img: " ",
      price: 900,
      qty: 3,
      title: 'Washing Machine'
    })
    .then(docRef => {
      docRef.get().then(snapshot => {
        console.log('Product has been added', snapshot.data());
      });
            
    })
    .catch(error =>{
      console.log(error);
    });
  };

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button> */}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} 
        </div>
      </div>
    );
  }
}

export default App;
