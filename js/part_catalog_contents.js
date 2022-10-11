 let accessories_list = document.getElementById('accessories_list');

 let all_main_products_contents = document.getElementById('all_main_products_contents');

 //make the content of all our products display daynamicly
 let allProducts = [{
         id: 1,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '5.32 $',
         product_quantity: 'quantity1'
     },
     {
         id: 2,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '15.32 $',
         product_quantity: 'quantity2'
     },
     {
         id: 3,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '25.32 $',
         product_quantity: 'quantity3'
     },
     {
         id: 4,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '35.32 $',
         product_quantity: 'quantity4'
     },
     {
         id: 5,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '45.32 $',
         product_quantity: 'quantity5'
     },
     {
         id: 6,
         product_img: 'single_product_img.jpg',
         product_name: 'continental440k6mk',
         product_desc: 'mileage maker multi v-belt',
         product_price: '55.32 $',
         product_quantity: 'quantity6'
     },

 ];

 /* ================================================= */

 //fill the ul accessories  
 let allListAccesories = [{
         id: 1,
         dropdownId: 'my_dropdown1',
         accessorie_name: 'belt drive',
         accessorie_item1: 'belt',
         accessorie_item2: 'belt drive componment kit',
         accessorie_item3: 'belt tensioner',
         accessorie_item4: 'tensioner pulley'
     },
     {
         id: 2,
         dropdownId: 'my_dropdown2',
         accessorie_name: 'body & lamp assembly',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 3,
         dropdownId: 'my_dropdown3',
         accessorie_name: 'brake & wheel hub',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 4,
         dropdownId: 'my_dropdown4',
         accessorie_name: 'cooling system',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 5,
         dropdownId: 'my_dropdown5',
         accessorie_name: 'drivetrain',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 6,
         dropdownId: 'my_dropdown6',
         accessorie_name: 'electrical',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 7,
         dropdownId: 'my_dropdown7',
         accessorie_name: 'electrical-bulb & socket',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 8,
         dropdownId: 'my_dropdown8',
         accessorie_name: 'electrical-connector',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 9,
         dropdownId: 'my_dropdown9',
         accessorie_name: 'electrical-switch & relay',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 10,
         dropdownId: 'my_dropdown10',
         accessorie_name: 'engine',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 11,
         dropdownId: 'my_dropdown11',
         accessorie_name: 'exhaust & emission',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 12,
         dropdownId: 'my_dropdown12',
         accessorie_name: 'fuel & air',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 13,
         dropdownId: 'my_dropdown13',
         accessorie_name: 'heat & air conditioning',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 14,
         dropdownId: 'my_dropdown14',
         accessorie_name: 'ignition',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 15,
         dropdownId: 'my_dropdown15',
         accessorie_name: 'interior',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 16,
         dropdownId: 'my_dropdown16',
         accessorie_name: 'steering',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 17,
         dropdownId: 'my_dropdown17',
         accessorie_name: 'suspension',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 18,
         dropdownId: 'my_dropdown18',
         accessorie_name: 'transmission-automatic',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 19,
         dropdownId: 'my_dropdown19',
         accessorie_name: 'transmission-manual',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 20,
         dropdownId: 'my_dropdown20',
         accessorie_name: 'wheel',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },
     {
         id: 21,
         dropdownId: 'my_dropdown21',
         accessorie_name: 'wiper & washer',
         accessorie_item1: 'item 1',
         accessorie_item2: 'item 2',
         accessorie_item3: 'item 3',
         accessorie_item4: 'item 4'
     },

 ];

 /* ================================================= */

 //draw all our products
 function drawAllProductsUi() {
     let productUi = allProducts.map((product) => {
         return `   
               <div class="col-md-6 mb-4"> 
                   <div class="our_single_product">
                       <div class="our_single_product_img" style="background-image: url('images/${product.product_img}');">
                           <a href="partcatalogC.html" class="add_this_item">
                               <i class="las la-plus"></i>
                           </a>
                       </div>
                       <div class="our_single_product_details">
                           <h6>${product.product_name}</h6>
                           <p>${product.product_desc}</p>
                       </div> 
                       <div class="more_details_bottom">
                           <h2 class="single_price">${product.product_price}</h2>
                           <div class="more_details_addTocart">
                               <!-- incre_btn -->
                               <div class="input-group inline-group">
                                   <div class="input-group-prepend">
                                       <button class="btn btn-outline-secondary btn-minus">
                                           <i class="fa fa-minus"></i>
                                       </button>
                                   </div>
                                   <input class="form-control quantity" min="0" name="${product.product_quantity}"
                                       value="1" type="number">
                                   <div class="input-group-append">
                                       <button class="btn btn-outline-secondary btn-plus">
                                           <i class="fa fa-plus"></i>
                                       </button>
                                   </div>
                               </div>
                               <button class="text-uppercase single_product_btn my_btn"
                                   name="single_product_btn">
                                   add to cart
                               </button>
                           </div>
                       </div> 
                   </div>  
               </div> 

      `
     });

     all_main_products_contents.innerHTML = productUi.join("");

 }

 drawAllProductsUi();

 /*=================================================================================*/

 //draw all our products
 function drawAllAccessories() {
     let Accessorie = allListAccesories.map((list) => {
         return `   
       <li class="dropdown">
               <a class="dropdown-toggle" id="${list.dropdownId}" data-toggle="dropdown">
                   ${list.accessorie_name}
                   <i class="icofont-caret-right"></i>
                   <i class="icofont-caret-down" style="display:none"></i>
               </a>
               <div class="dropdown-menu">
                   <a class="dropdown-item active_accessories" href="partcatalogC.html">
                     ${list.accessorie_item1}
                   </a>
                   <a class="dropdown-item" href="#">
                     ${list.accessorie_item2}
                   </a>
                   <a class="dropdown-item" href="#">
                     ${list.accessorie_item3}
                   </a>
                   <a class="dropdown-item" href="#">
                     ${list.accessorie_item4}
                   </a>
               </div> 
       </li>            

    `
     });

     accessories_list.innerHTML = Accessorie.join("");

 }

 drawAllAccessories();

 /*=================================================================================*/