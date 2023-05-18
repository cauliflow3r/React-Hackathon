// import React, { createContext, useContext, useReducer, useState } from 'react'
// import { FAVORITE } from '../helpers/consts';


// // создаем контекст и кастомный хук (кастомный хук чтобы можно было использовать то что мы написали в контексте (функции) в разных компонентах)
// export const favoriteContext = createContext()
// export const useFavorite = ()=>{
//     return useContext(favoriteContext)
// }

// // создаем начальное состояние для избранного
// const INIT_STATE = {
//     favorite: JSON.parse(localStorage.getItem("favorite"))
// };

// function reducer (state = INIT_STATE, action) {
//     switch (action.type) {
//         case FAVORITE.GET_FAVORITE:
//             return{ ...state, favorite: action.payload}
            
//         default:
//             return state;
//     }
// }

// const FavoriteContextProvider = ({children}) => {

//     // Состояния для лайков 



// const [state, dispatch] = useReducer(reducer, INIT_STATE);



// //  функция для получения данных из локального хранилища
// const getFavorite = () => {
//     let favorite = JSON.parse(localStorage.getItem("favorite"));
  
   
//   //проверка на наличие cart в localStorage,если его нет то добавляем объект       под ключом "favorite"
//   if(!favorite) {
//       localStorage.setItem("favorite", JSON.stringify({products: []}));
//        favorite = {
//           products: []
//         }
//       }
  
//   // обновляем состояние избранных
//   dispatch({
//       type: FAVORITE.GET_FAVORITE,
//       payload: favorite,
//     });
//    };



//    // функция для добавления продукта в корзину 
// const addProductToFavorites = (product) => {
//     let favorite = JSON.parse(localStorage.getItem("favorite"));

//     // проверка на существование favorite
//     if (!favorite) {
//       favorite = { products: []};
//     }
//     // формирование продукта, который будет хранится в избранных
//     let newFavProduct = {
//       item: product, // сам продукт
//       count: 1, // кол-во данного продукта
//     };

//     // проверка на то, содержится ли уже в избранных продукт, который хотим добавить
//     let productFavToFind = favorite.products.filter(
//       (elem) => elem.item.id === product.id
//     );

//     if (productFavToFind.length === 0) {
//       favorite.products.push(newFavProduct); // добавляем продукт, если его не было в корзине
//     } else {
//       favorite.products = favorite.products.filter(
//         (elem) => elem.item.id != product.id // удаляем, если был
//       );
//     }

//     // помещаем обновленные данные в localStorage
//     localStorage.setItem("favorite", JSON.stringify(favorite));
//     //обновляем состояние
//     dispatch({ type: FAVORITE.GET_FAVORITE, payload: favorite });
//   };


//    // проверям находится ли товар в избранных (для стилей кнопки)
//    const checkProductInFavorites = (id) => {
//     let favorite = JSON.parse(localStorage.getItem("favorite"));

//     if (favorite) {
//       let newFavorite = favorite.products.filter((elem) => elem.item.id == id);
//       return newFavorite.length > 0 ? true : false;
//     }
//   };


//    // удаление товара из корзины
//    const deleteFavoriteProduct = (id) => {
//     let favorite = JSON.parse(localStorage.getItem("favorite"));

//     // перебираем массив favorite.products, в резульате перебора останутся только те продукты, у которых id не совпадает с переданным id при вызове
//     favorite.products = favorite.products.filter((elem) => elem.item.id !== id);

//     localStorage.setItem("favorite", JSON.stringify(favorite));

//     dispatch({
//       type: FAVORITE.GET_FAVORITE,
//       payload: favorite,
//     });
  
//   };

// const values= {
//     getFavorite,
//     addProductToFavorites,
//     checkProductInFavorites,
//     deleteFavoriteProduct,
//     favorite: state.favorite,
// }

//   return (
//     <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
//   )
// }

// export default FavoriteContextProvider