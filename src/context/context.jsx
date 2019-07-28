import React, { Component } from 'react'
import { linkData } from './linkData';
import { socialData } from './SocialData';
import { items } from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidemenu: false,
        cartOpen: false,
        cartItems: 0,
        cart: [],
        links: linkData,
        socialIcons: socialData,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false
    }
    componentDidMount() {

        this.setProducts(items);
    }
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product
        })
        // console.log(storeProducts);

        // filter featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true);

        // console.log(featuredProducts);
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        }, () => {
            this.addTotals();
        })
    }
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            cart = []
        }
        return cart;
    }
    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
    }
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total
            cartItems += item.count
        })
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.1;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2))
        return {
            cartItems,
            subTotal,
            tax,
            total
        }
    }
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }
    // local storage
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {
                ...tempItem, count: 1, total
            };
            tempCart = [...tempCart, cartItem]
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return { cart: tempCart }
        }, () => {
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
        // console.log(id);
    }
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {
                ...product
            },
            loading: false
        })
        // console.log(id);
    }
    handleSidebar = () => {
        this.setState({
            sidemenu: !this.state.sidemenu
        })
    }
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }
    // cart functionality
    increament = (id) => {
        // console.log(id);
        let tempCart = [...this.state.cart];
        const CartItem = tempCart.find(item => item.id === id);
        CartItem.count++;
        CartItem.total = CartItem.count * CartItem.price;
        CartItem.total = parseFloat(CartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals()
            this.syncStorage()
        })
    }
    decreament = (id) => {
        console.log(id);
    }
    removeItem = (id) => {
        console.log(id);
    }
    clearCart = () => {
        console.log('No items in the cart');
    }
    render() {
        return (
            < ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
                increament: this.increament,
                decreament: this.decreament,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }} >
                {this.props.children}
            </ProductContext.Provider >
        )

    }
}
const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider, ProductConsumer
}