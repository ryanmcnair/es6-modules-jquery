import { setCart } from './../helpers/data/cartData.js'
import { makeCartBody } from './makeCart.js'
import { makeCartModal, chargeIt, showCartItems } from './makeCartModal.js'

const makeCart = () => {
    $("#cart").html(`
        ${makeCartBody()}
        ${makeCartModal()}
    `);
    $("#charge-it").click(() => {
      const ccNum = $("#credit-card").val();
      chargeIt(ccNum);
    });
  
    showCartItems();
  };
  
  const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on("click", () => {
      setCart(array[index]);
      makeCart();
    });
  };

  export { makeCart, addToCart }