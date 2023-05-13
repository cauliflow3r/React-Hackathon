import React, { createContext, useContext, useReducer } from 'react'
import {getCountProductsInCart,calcSubprice,calcTotalPrice} from "../helpers/function"
import { CART } from '../helpers/consts';


// создаем контекст и кастомный хук (кастомный хук чтобы можно было использовать то что мы написали в контексте (функции) в разных компонентах)
export const cartContext = createContext()
export const useCart = ()=> useContext(cartContext)


// создаем начальное состояние для корзины 
const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartLength: getCountProductsInCart(),
};


function reducer (state = INIT_STATE, action){
switch (action.type) {
    case CART.GET_CART:
        return{ ... state, cart: action.payload };
    
    case CART.GET_CART_LENGTH:
        return{ ... state, cartLength: action.payload };

    default:
        return state;
  }
}

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer( reducer, INIT_STATE);


//  функция для получения данных из локального хранилища
  const getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

 
//   проверка на наличие cart в localStorage,если его нет то добавляем объект        под ключом "cart"
if(!cart) {
    localStorage.setItem("cart", JSON.stringify({products: [], totalPrice: 0,}));
     cart = {
        products: [],
        totalPrice: 0
      }
    }

// обновляем состояние корзины
dispatch({
    type: CART.GET_CART,
    payload: cart,
  });
 };


// функция для добавления продукта в корзину 
const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // проверка на существование cart
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    // формирование продукта, который будет хранится в корзине
    let newProduct = {
      item: product, // сам продукт
      count: 1, // кол-во данного продукта
      subPrice: +product.price, // стоимость за 1 шт.
    };

    // проверка на то, содержится ли уже в корзине продукт, который хотим добавить
    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct); // добавляем продукт, если его не было в корзине
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id != product.id // удаляем, если был
      );
    }
    // пересчитываем общую стоимость корзины, т.к выше изменилось кол-во товаров в корзине
    cart.totalPrice = calcTotalPrice(cart.products);

    // помещаем обновленные данные в localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    //обновляем состояние
    dispatch({ type: CART.GET_CART, payload: cart });
  };

    // проверям находится ли товар в корзине (для стилей кнопки)
    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
    
        if (cart) {
          let newCart = cart.products.filter((elem) => elem.item.id == id);
          return newCart.length > 0 ? true : false;
        }
      };



       // функция для изменения кол-ва одной позиции в корзине, принимает кол-во и id того продукта, у которого это количество должно поменяться
  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // проверка на совпадение айди  с заданым если совпадает , то его свойство count (количество) устанавливается равным заданному count (новое количество). 
    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        //  Затем вызывается функция calcSubPrice, которая вычисляет подитог для данного продукта, и результат сохраняется в свойство subPrice продукта.
        product.subPrice = calcSubprice(product);
      }
      return product;
    });
    // Функция calcTotalPrice вызывается с аргументом cart.products (массив продуктов в корзине), и результат сохраняется в свойство totalPrice объекта cart.
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

   // удаление товара из корзины
   const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // перебираем массив cart.products, в резульате перебора останутся только те продукты, у которых id не совпадает с переданным id при вызове
    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  
  };


 const values = {
    getCart,
    addProductToCart,
    checkProductInCart,
    cart: state.cart,
    changeProductCount,
    deleteCartProduct,
 }

 return <cartContext.Provider value={values}>{children}</cartContext.Provider>
}



export default CartContextProvider