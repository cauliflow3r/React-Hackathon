import { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const productContext = createContext();
export const useProducts = () => {
    return useContext(productContext);
  };

  // начальное состояние
const INIT_STATE = {
    products: [],
    productDetails: {},
  };
  
  // функция , которая в зависимости от action.type, меняет определенную часть состояния
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS:
        return { ...state, products: action.payload };
  
      case ACTIONS.GET_PRODUCT_DETAILS:
        return { ...state, productDetails: action.payload };
  
      default:
        return state;
    }
  };

function ProductContextProvider({children}){
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! const navigate = useNavigate();

  // функция для получения данных с сервера 
  const getProducts = async () => {
    // делауь запрос, получаем продукты с API
    const { data } = await axios(
      `${JSON_API_PRODUCTS}${window.location.search}`
    );
// поместили в состояние то, что получили в запросе выше
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

    // добавление нового продукта 
  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    // !navigate("/products");
  };

  // удаление продукта 
  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  // получение деталей одного продукта 
  const getProductDetails = async (id) => {
    //  запрос на получение одного продукта
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    // обновдение
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  // сохранение отредактированного продукта
  const saveEditedProduct = async (newProduct) => {
    // отправка patch запроса
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    // стягивание обновленных данных
    getProducts();
    navigate("/products");
  };




    const values ={addProduct,     products: state.products,
    productDetails: state.productDetails,
    getProducts, deleteProduct, saveEditedProduct, getProductDetails, 
    }

    return <productContext.Provider value={values}>{children}</productContext.Provider>
}

export default ProductContextProvider