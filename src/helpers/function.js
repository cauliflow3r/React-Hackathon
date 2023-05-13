// данная функция получает данные из локального хранилища переводит и в объект потом проверяет если корзина существует возврощает количество товаров а если нет то просто возврощает 0
export function getCountProductsInCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.products.length : 0;
  }

// цена за один продукт => количество умножаем на цену 
  export const calcSubprice = (product) => {
    return + product.count * product.item.price;
  }

  // функция для подсчета общей стоимости корзины
export const calcTotalPrice = (products) => {
    //возвращаем результат сложения всех subPrice
    return products.reduce((acc, curr) => {
      return (acc += curr.subPrice);
    }, 0);
  };