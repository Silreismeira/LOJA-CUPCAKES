// Selecione todos os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
  // Adiciona um evento de clique a cada botão
  button.addEventListener('click', () => {
      // Encontre o elemento que mostra a quantidade de itens no carrinho
      const cartCountElement = document.getElementById('cart-count');
      
      // Pegue o número atual de itens no carrinho e converta de string para número
      let cartCount = parseInt(cartCountElement.innerText);
      
      // Aumente o número de itens no carrinho em 1
      cartCountElement.innerText = cartCount + 1;
  });
});








