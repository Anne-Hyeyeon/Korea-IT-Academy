/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var quotes = [
        {"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.", "author":"Winston Churchill"},
        {"quote":"Coming together us a beginning; keeping together is progress; working together is success.", "author":"Henry Ford"},
        {"quote":"Success is simple. Do what's right, the right way, at the right time.", "author":"Arnold H. Glasgow"},
        {"quote":"Success is nothing more than a few simple disciplines, practiced every day", "author":"Jim Rohn"},
        {"quote":"Action is the foundational key to all success", "author":"Pablo Picasso"},
        {"quote":"Success consists of going from failure to failure without loss of enthusiasm", "author":"Winston Churchill"},
        {"quote":"Try not to become a man of success, but rather try to become a man of value", "author":"Albert Einstein"},
        {"quote":"Success is how high you bounce when you hit bottom", "author":"George S.Patton"},
        {"quote":"I've failed over and over and over again in my life and that is why I succeed", "author":"Michael Jordan"}  
      ];
      console.log(encodeURIComponent(quotes[1].author))
      $(document).ready(function (){
        var randomNo;
        randomNo = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").innerHTML =  "\"" + quotes[randomNo].quote  +  "\"";
        document.getElementById("author").innerHTML =  quotes[randomNo].author;
      $(".twittershare").attr("href", "https://twitter.com/share?text=\"" + encodeURIComponent(quotes[randomNo].quote) + "\" - " +  encodeURIComponent(quotes[randomNo].author))
        $("#quote-button").on("click", (function (){
          randomNo = Math.floor(Math.random() * quotes.length);
          $("#quote").html("\"" + quotes[randomNo].quote  +  "\"");
          $("#author").html(quotes[randomNo].author);
          $(".twittershare").attr("href", "https://twitter.com/share?text=\"" + encodeURIComponent(quotes[randomNo].quote) + "\" - " +  encodeURIComponent(quotes[randomNo].author))
        }))
      });
      
});


