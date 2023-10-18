let main = document.querySelector('#main');
let totalproduct = 0;
let totalprice = 0;

function updatetotal() {
    let optotalproduct = document.querySelector('#total-product');
    let optotalprice  = document.querySelector('#total-price');
    optotalproduct.innerHTML = `Total product = ${totalproduct}`;
    optotalprice.innerHTML = `Total price = ${totalprice}`;
}

function selectProduct(id) {
    // alert(id);
    fetch(`http://127.0.0.1:9000/product/${id}`).then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw Error('Bad response');
        }
    }).then((product)=>{
        // console.log(product);
    //    alert(product.id);
        totalproduct++;
        // console.log(parseInt(product.price));
        totalprice += parseInt(product.price);
        updatetotal();
    
    }).catch((err)=>{
        console.error(err);
        alert('System error, try again later');
    });    
}

document.querySelector('#clearcart').onclick = function () {
    // alert('test')
    totalprice=0;
    totalproduct=0;
    updatetotal();
}

function createCard(iterator) {
    //! create card
    const card = document.createElement('div');
    card.className = "card px-3 py-2 m-2 shadow";
    let cardDetail = ``;
    // console.log(iterator.name);
    cardDetail += `<img class="card-img-top" src="/public/asset/${iterator.image}" alt="Title">`;
    cardDetail += `<div class="card-body">`;
    cardDetail += `<h4 class="card-title">${iterator.name}</h4>`;
    cardDetail += `<p class="card-text">${iterator.price} baht</p>`;
    cardDetail += `<button type="button" onclick = selectProduct(${iterator.id}) class="btn btn-primary">Add to cart</button>`;
    cardDetail += `</div>`;
    card.innerHTML = cardDetail;
    return card;
}

function getProduct() {
    fetch('http://127.0.0.1:9000/product').then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw Error('Bad response');
        }
    }).then((product)=>{
        // console.log(product);
        for (const iterator of product) {
            main.append(createCard(iterator));
        }
    
    }).catch((err)=>{
        console.error(err);
        alert('System error, try again later');
    });    
}

function search() {
    
}


getProduct();
