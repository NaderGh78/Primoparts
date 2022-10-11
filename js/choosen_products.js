 let purchases_content = $('.purchases_content');

 //make the content of all our products display daynamicly
 let allCartProducts = [{
         id: 1,
         product_url: 'belt1.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '5.32',
         product_currency: '$',
         product_quantity: '1'
     },
     {
         id: 2,
         product_url: 'belt1.jpg',
         product_name: 'product 2',
         product_desc: 'product 2 description',
         product_price: '15.32',
         product_currency: '$',
         product_quantity: '2'
     },
     {
         id: 3,
         product_url: 'belt1.jpg',
         product_name: 'product 3',
         product_desc: 'product 3 description',
         product_price: '55.32',
         product_currency: '$',
         product_quantity: '3'
     }

 ];

 //draw all our products
 function drawAllCartProducts() {
     let in_cart = allCartProducts.map((cart) => {
         return `    
           <div class="purchases_details">
                   <div class="row m-0">
                       <div class="col-md-5 pl-0">
                           <div class="purchases_content_left" style="background-image: url('images/${cart.product_url}');">
                           </div>
                       </div>
                       <div class="col-md-7 p-0">
                           <div class="purchases_content_right">
                               <div class="top_content">
                                   <h6 class="mb-0" id="product_name">${cart.product_name}</h6>
                                   <p class="mb-0" id="product_info">
                                      ${cart.product_desc}
                                   </p>
                                   <h5 class="mb-0 font-weight-bold" id="product_price">
                                      ${cart.product_price}
                                       <span id="currency">${cart.product_currency}</span>
                                   </h5>
                               </div>
                               <div class="bottom_content">
                                   <h6 class="mb-0">
                                       qty: 
                                       <span id="product_quantity">${cart.product_quantity}</span>
                                   </h6>
                                   <div class="icon_section">
                                       <span class="mr-2"><i class="far fa-trash-alt"></i></span>
                                       <span><i class="icofont-ui-edit"></i></span>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
           </div> 
    `
     });

     // this content exist in all pages , therfore we make the html contents of every them by looping in all pages length
     for (var i = 0; i < purchases_content.length; i++) {

         purchases_content[i].innerHTML = in_cart.join("");

     }

 }

 drawAllCartProducts();