var total=0;//variavel global para armazenar os preco
var list = new Array;//variavel para armazenar a lista de produtos escomendado
class Shop {
  render() {
    const renderHook = document.getElementById('app');
    const carrinho = new CarrinhoCompras();
    const cartEl = carrinho.render();
    const produtosVenda = new ListaProdutos();
    const itensVendaEl = produtosVenda.render();
    renderHook.append(cartEl);
    renderHook.append(itensVendaEl);
  }
}

class CarrinhoCompras {
  itens = [];
   //funcao que mostra os elementos encomendados na consola
  itensComprados(){
      console.log('Os produtos encomendados:');
      console.dir(list);//mostra os elementos dentro do array
      console.log(`A compra é total a ${total}`)

  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
            <h2>Total: ${0}\$00</h2>
            <button>Encomendar</button>
        `;
    cartEl.className = 'cart';
    const encomendarbtn = cartEl.querySelector('button');
    encomendarbtn.addEventListener('click',this.itensComprados);
    return cartEl;
    
  }
  
}

//criacao de classe
class Produto {
  titulo = 'DEFAULT';
  imageURL;
  descricao;
  preco;

  constructor(titulo, imageURL, descricao, preco) {
    this.titulo = titulo;
    this.imageURL = imageURL;
    this.descricao = descricao;
    this.preco = preco;
  }
}

class ItemVenda {
  constructor(produto) {
    this.produto = produto;
  }

  addToCart() {
    console.log('adicionando produto ao carrinho ... ');
    console.log(this.produto);
    //adicionar e mostrar os precos
    total=total+this.produto.preco;
    const cartEl = document.getElementsByClassName("cart")[0]
    cartEl.children[0].textContent = `Total:${total}$00`;
    list.push(this.produto);//cada vez que a funcao e chamada adiciona um produto a lista.
  };
  
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
                <div><img src="${this.produto.imageURL}" alt="${this.produto.titulo}">
                  <div class="product-item__content">
                  <h2>${this.produto.titulo}</h2><h3>${this.produto.preco}\$00</h3>
                  <p>${this.produto.descricao}</p>
                  <button>Adicionar Cart</button></div>
              </div>
              `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ListaProdutos {
  produtos = [
    new Produto(
      'Laptop',
      'https://img.freepik.com/free-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?t=st=1650013859~exp=1650014459~hmac=60a47c73333070750cc193e914bbd61a240d7dee79e68a40bfe4c457fd907318&w=740',
      'Laptop',
      500
    ),
    new Produto(
      'Mesa',
      'https://img.freepik.com/free-vector/wood-picnic-table-with-benches-wooden-furniture-white-background_107791-5536.jpg?w=740',
      'Uma mesa simples',
      50
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    for (const prod of this.produtos) {
      const itemVenda = new ItemVenda(prod);
      prodList.append(itemVenda.render());
    }
    prodList.className = 'product-list';
    return prodList;
  }
}


const shop = new Shop();
shop.render();


//JOELSON SPINOLA
//CODE:120032
//LEIT3
