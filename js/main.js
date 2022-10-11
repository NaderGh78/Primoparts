 $(document).ready(function () {

     var cartIcon = $('.cartIcon');

     var sidenav = $('.sidenav');

     var closebtn = $('.closebtn');

     var sidenav_overlay = $('.sidenav_overlay');

     var collapsing = $('.navbar-light .navbar-toggler-icon');

     var active_Li = $('ul.nav-tabs > li');

     var active_a = $('ul.nav-tabs > li > a');

     var dropdown_link = $('ul.accessories_list li a.dropdown-toggle');

     /*============================================================== */

     //change the icon of navbar toggler to close icon in small device
     $('.navbar-toggler').click(function () {

         $('.navbar-toggler-icon i').toggleClass('la-bars la-times');

     });

     /*============================================================== */

     // hide the overflow on small device , wehen open the menu
     collapsing.on('click', function () {

         $('body,body.home').toggleClass('overfl');

     });

     /*============================================================== */

     //open the sidenav when user click on cart icon
     cartIcon.on('click', function () {

         // open the sidenav
         sidenav.addClass('open');

         //open the sidenav overlay in the same time
         sidenav_overlay.addClass('open_overlay');

         //make the body overflow hidden ,when show the sidenav and sidenav overlay
         $('body,body.home').toggleClass('overfl');

     });

     /*============================================================== */

     //close the sidenav when user click on x icon
     closebtn.on('click', function () {

         sidenav.removeClass('open');

         sidenav_overlay.removeClass('open_overlay');

         $('body,body.home').toggleClass('overfl');

     });

     /*===================================================================*/

     //remove the placeholder by focus from all inputs and textarea
     $("input ,textarea").each(

         function () {

             $(this).data('holder', $(this).attr('placeholder'));

             $(this).focusin(function () {

                 $(this).attr('placeholder', '');

             });

             $(this).focusout(function () {

                 $(this).attr('placeholder', $(this).data('holder'));

             });

         });

     /*=========================================================== */

     // this for tabs lists,when click on its, give it the big red bg, and change the color of link inside it
     active_Li.on('click', function () {

         // remove class active from all sibblings
         $(this).siblings().removeClass('active');

         // add class active to the list on click
         $(this).addClass('active');

         // remove class change color from all links
         $(this).siblings().find('a').removeClass('chang_color');

         // add class change color on click
         $(this).children('a').addClass('chang_color');

     });

     /*=========================================================== */

     // make a daynamic select with all countries
     var country_arr = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

     var manufactur = ["manufacturer", "3d", "3m", "a-1 clutch company", "aae", "acc", "acdelco", "aci", "acme auto"]

     var part_group = ["part group", "accessories", "apparel & gift", "belt drive", "body and lamp assembly", "brake & wheel hun", "cooling system", "drivetrain", "electrical"]

     var cars = ["choose your car", "volkswagen", "volvo", "vpg", "wartburg", "westcott", "whippet", "willys", "windsor"]

     var years = ["select a year", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004"]

     var models = ["select your model", "golf", "golf sportwagen", "gti", "jetta", "passat", "passat cc", "routan", "saveiro", "tiguan"]

     // create the countries options by function 
     function fill_the_select(selected, name_of_ele, arr_of_ele) {

         // by default show lebanon for user 
         var options = `<option disabled selected>${selected}</option>`;

         for (var i = 0; i < arr_of_ele.length; i++) {

             // show all countries inside select,and make them uppercase text
             options += `<option value='${arr_of_ele[i]}'> ${arr_of_ele[i].toUpperCase()} </option>`

         }

         name_of_ele.html(options);

     }

     //run function
     fill_the_select('LEBANON', $('#all_countries'), country_arr);
     fill_the_select('MANUFACTURER', $('#manufactur_select'), manufactur);
     fill_the_select('PART GROUP', $('#partGroup_select'), part_group);
     /*===================================*/
     fill_the_select('CHOOSE YOUR CAR', $('#chooseCar_select'), cars);
     fill_the_select('SELECT A YEAR', $('#selectYear_select'), years);
     fill_the_select('SELECT YOUR MODEL', $('#selectModel_select'), models);
     /*=========== index select elements =======================*/
     fill_the_select('CHOOSE YOUR CAR', $('#homeChooseCar'), cars);
     fill_the_select('SELECT A YEAR', $('#homeSelectYear'), years);
     fill_the_select('SELECT YOUR MODEL', $('#homeSelectModal'), models);

     /*============================================================== */

     // stop auto run carosel 
     $('#my_carousel').carousel({
         interval: false,
     });

     /*=========================================================== */

     // when user click on [+ or minus] beside add to cart button 
     $('.btn-plus, .btn-minus').on('click', function (e) {

         const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');

         const input = $(e.target).closest('.input-group').find('input');

         if (input.is('input')) {

             input[0][isNegative ? 'stepDown' : 'stepUp']()

         }

     })

     /*=========================================================== */

     // when user click or hover on list inside our accesories inside part catalog b
     dropdown_link.on('click', function () {

         $(this).addClass('stay_background');

         $(this).children('i').addClass('show_arrow');

         $(this).parent().siblings().find('.dropdown-toggle').children('i').removeClass('show_arrow');

         $(this).parent().siblings().find('.dropdown-toggle').removeClass('stay_background');

     });

     /*=========================================================== */

     // when user click on go to top btn
     $('.gotop').click(function () {

         $("html, body").animate({

             scrollTop: 0

         }, 1000);

     });

     /*=========================================================== */

 }); //end document