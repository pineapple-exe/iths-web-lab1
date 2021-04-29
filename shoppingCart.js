class ShoppingCart {
    constructor() {
        this.shoppingCart = [];
    }

    renderCartItemsCount() {
        const itemCountElement = document.querySelector('#shopping-cart-icon>div');
        itemCountElement.innerHTML = this.shoppingCart.length > 0 ? this.shoppingCart.length : '';
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async alreadyExistingItemAlert() {
        const element = document.getElementById('shopping-cart-alert');
    
        element.style = 'visibility: visible;';
        await this.sleep(2000);
        element.style = 'visibility: hidden';
    }
    
    addToCart(e) {
        const id = parseInt(e.target.dataset.id);
        const course = courses.getCourseById(id);
        
        if (!this.shoppingCart.some(c => c === course))
        {
            this.shoppingCart.push(course);
        }
        else
        {
            this.alreadyExistingItemAlert();
        }
    
        this.renderCartItemsCount();
    }
    
    removeFromCart(e) {
        this.shoppingCart = this.shoppingCart.filter(i => i.id !== parseInt(e.target.dataset.id));
        this.renderItems();
        this.renderCartItemsCount();
    }
    
    renderItems() {
        let shoppingItemsHtml = '';
    
        if (this.shoppingCart.length > 0)
        {
            shoppingItemsHtml += '<table> <tr> <th>Kursnummer</th> <th>Kursnamn</th> <th></th> </tr>';
            this.shoppingCart.forEach(c => shoppingItemsHtml += `<tr> <td>${c.courseNumber}</td> <td><a href="#">${c.title}</a></td> <td><div class="remove-cart-item" data-id="${c.id}" onclick="shoppingCart.removeFromCart(event)">x</div></td> </tr>`);
            shoppingItemsHtml += '</table>';
        }
        else
        {
            shoppingItemsHtml += '<p>Din varukorg är tom.</p>';
        }
        document.getElementById('shopping-cart-items').innerHTML = shoppingItemsHtml;
        
        document.getElementById('buy-button').style = this.shoppingCart.length > 0 ? 'display: inline-block' : 'display: none';
    }
    
    showCart() {
        this.renderItems();
        document.getElementById('shopping-cart-container').style = 'display: flex';
    }
    
    hideCart() {
        document.getElementById('shopping-cart-container').style = 'display: none';
    }
    
    emptyCart() {
        this.shoppingCart = [];
        this.renderItems();
        this.renderCartItemsCount();
    }
    
    buy() {
        alert('Köpet avslutat.');
        this.emptyCart();
    }
}

const shoppingCart = new ShoppingCart();

