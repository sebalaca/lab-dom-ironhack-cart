// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const priceElement = Number(price);
  const quantity = product.querySelector('.quantity input').value;
  const quantityElement = Number(quantity);

  let subtotalElement = priceElement * quantityElement;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalElement;

  return subtotal;
  

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let sumatorio = 0;
  const allItems = document.querySelectorAll('.product');
  allItems.forEach((item) => {
    let subtotal = updateSubtotal(item);
    sumatorio += Number(subtotal.innerText);
    return sumatorio;
  });

  let totalProductos = document.querySelector('#total-value span');
  totalProductos.innerText = sumatorio;

  // end of test

  // ITERATION 2
  //... your code goes here


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  console.log(removeProductBtn)
  removeProductBtn.forEach((eachBtnRemove) => {
    eachBtnRemove.addEventListener('click', removeProduct);
  })
});
