let shoppingCart = [];

const renderCartItemsCount = () => {
    const itemCountElement = document.querySelector('#shopping-cart-icon>div');
    itemCountElement.innerHTML = shoppingCart.length > 0 ? shoppingCart.length : '';
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const alreadyExistingItemAlert = async () => {
    const element = document.getElementById('shopping-cart-alert');

    element.style = 'visibility: visible;';
    await sleep(2000);
    element.style = 'visibility: hidden';
}

const addToCart = (e) => {
    const id = parseInt(e.target.dataset.id);

    const course = courses.find(c => c.id === id);
    
    if (!shoppingCart.some(c => c === course))
    {
        shoppingCart.push(course);
    }
    else
    {
        alreadyExistingItemAlert();
    }

    renderCartItemsCount();
}

const removeFromCart = (e) => {
    shoppingCart = shoppingCart.filter(i => i.id !== parseInt(e.target.dataset.id));
    renderItems();
    renderCartItemsCount();
}

const renderItems = () => {
    let shoppingItemsHtml = '';

    if (shoppingCart.length > 0)
    {
        shoppingItemsHtml += '<table> <tr> <th>Kursnummer</th> <th>Kursnamn</th> <th></th> </tr>';
        shoppingCart.forEach(c => shoppingItemsHtml += `<tr> <td>${c.courseNumber}</td> <td><a href="#">${c.title}</a></td> <td><div class="remove-cart-item" data-id="${c.id}" onclick="removeFromCart(event)">x</div></td> </tr>`);
        shoppingItemsHtml += '</table>';
    }
    else
    {
        shoppingItemsHtml += '<p>Din varukorg är tom.</p>';
    }
    document.getElementById('shopping-cart-items').innerHTML = shoppingItemsHtml;
    
    document.getElementById('buy-button').style = shoppingCart.length > 0 ? 'display: inline-block' : 'display: none';
}

const showCart = () => {
    renderItems();
    document.getElementById('shopping-cart-container').style = 'display: flex';
}

const hideCart = () => {
    document.getElementById('shopping-cart-container').style = 'display: none';
}

const emptyCart = () => {
    shoppingCart = [];
    renderItems();
    renderCartItemsCount();
}

const buy = () => {
    alert('Köpet avslutat.');
    emptyCart();
}