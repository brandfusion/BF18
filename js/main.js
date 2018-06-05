$(function(){
  $("#slider--main").slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>'
  });

  $("#howwework").slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>'
  });

  $("#facts-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("#facts .loader").removeClass("animation");
  });
  $("#facts-slider").on('init', function(event, slick, currentSlide, nextSlide){
    $("#facts .loader").addClass("animation");
  });
  $("#facts-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
    $("#facts .loader").addClass("animation");
  });
  $("#facts-slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6600
  });
  
  
});

$(window).on("load", function(){

  if(document.getElementById("navigation--homepage")) {

    window.onscroll = function() {
      stickyHomepageNav()
      makeTabActive()
      activateArrow()
    };

    // Get the header
    var header = document.getElementById("navigation--homepage");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyHomepageNav() {   
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    } 

   

    function makeTabActive() {
      var positions = [];
      document.querySelectorAll("#navigation--homepage a").forEach(node => {       
        var offset = document.querySelector(node.getAttribute('href')).offsetTop;        
        positions = [...positions, offset];
      });
      var indexArray = positions.reduce((r,v,k) => {
        if (positions[k+1] === undefined) {
          if (window.pageYOffset >= v) {
            return [...r, k]
          } else {
            return [...r, null]
          }          
        } else {
          if (window.pageYOffset >= v && window.pageYOffset < positions[k+1]) {
            return [...r,k];
          } else {
            return [...r,null];
          }
        }
        
      },[]).filter(o => o !== null);
      if (indexArray.length > 0 ) {
        var index = indexArray[0];
        document.querySelectorAll("#navigation--homepage a").forEach(node => {       
          node.classList.remove("active");
        });
        document.querySelectorAll("#navigation--homepage a")[index].classList.add("active");
      }
      // console.log(positions, window.pageYOffset)

      if(window.pageYOffset <= document.getElementById("navigation--homepage").offsetTop) {
        document.querySelectorAll("#navigation--homepage a").forEach(node => {       
          node.classList.remove("active");
        });
      }
    }

    $(window).on("resize", function(){ 
      sticky = header.offsetTop;
    })
  }


  if(document.getElementById("navigation--project")) {

    window.onscroll = function() {
      stickyHomepageNav()
      makeTabActive()
      activateArrow()
    };

    // Get the header
    var header = document.getElementById("navigation--project");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickyHomepageNav() {   
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    } 

   

    function makeTabActive() {
      var positions = [];
      document.querySelectorAll("#navigation--project a").forEach(node => {       
        var offset = document.querySelector(node.getAttribute('href')).offsetTop;        
        positions = [...positions, offset];
      });
      var indexArray = positions.reduce((r,v,k) => {
        if (positions[k+1] === undefined) {
          if (window.pageYOffset >= v) {
            return [...r, k]
          } else {
            return [...r, null]
          }          
        } else {
          if (window.pageYOffset >= v && window.pageYOffset < positions[k+1]) {
            return [...r,k];
          } else {
            return [...r,null];
          }
        }
        
      },[]).filter(o => o !== null);
      if (indexArray.length > 0 ) {
        var index = indexArray[0];
        document.querySelectorAll("#navigation--project a").forEach(node => {       
          node.classList.remove("active");
        });
        document.querySelectorAll("#navigation--project a")[index].classList.add("active");
      }
      // console.log(positions, window.pageYOffset)

      if(window.pageYOffset <= document.getElementById("navigation--project").offsetTop) {
        document.querySelectorAll("#navigation--project a").forEach(node => {       
          node.classList.remove("active");
        });
      }
    }

    $(window).on("resize", function(){ 
      sticky = header.offsetTop;
    })
  }
  
});

// let siblings = n => [...n.parentElement.children].filter(c=>c!=n);
// document.querySelectorAll('#navigation--homepage a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       // var offset = document.getElementById("navigation--homepage").clientHeight;  
//       siblings(e.currentTarget).map(el => {
//         el.classList.remove("active");
//       });  
//       e.currentTarget.classList.add("active");    
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth',
//           block: "start", 
//           inline: "nearest"
//       });
//   });
// });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: "start", 
          inline: "nearest"
      });
  });
});


document.querySelectorAll("#ourteam .image ul").forEach(anchor => {
  anchor.addEventListener('click', function(e) {     
    if (e.currentTarget.children[0].classList.contains("hidden")) {
      e.currentTarget.children[1].classList.add("hidden");
      e.currentTarget.children[0].classList.remove("hidden");
    } else {
      e.currentTarget.children[0].classList.add("hidden");
      e.currentTarget.children[1].classList.remove("hidden");
    }
  })
});

document.querySelectorAll(".input-text input").forEach(anchor => {
  anchor.addEventListener("focusin", function(e){
    e.currentTarget.parentNode.querySelector(".placeholder").classList.add("on");  
  });  
  anchor.addEventListener("focusout", function(e){
    if (e.currentTarget.value === "") {
      e.currentTarget.parentNode.querySelector(".placeholder").classList.remove("on");
    }
  });  
})
document.querySelectorAll(".textarea-text textarea").forEach(anchor => {
  anchor.addEventListener("focusin", function(e){
    e.currentTarget.parentNode.querySelector(".placeholder").classList.add("on");  
  });  
  anchor.addEventListener("focusout", function(e){
    if (e.currentTarget.value === "") {
      e.currentTarget.parentNode.querySelector(".placeholder").classList.remove("on");
    }
  });  
})
document.querySelectorAll(".select-text").forEach(anchor => {
  anchor.querySelector(".selection-trigger").addEventListener("click", function(e){
    if(e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      e.currentTarget.parentNode.querySelector(".select-options").classList.add("hidden");
    } else {
      e.currentTarget.classList.add("active");
      e.currentTarget.parentNode.querySelector(".select-options").classList.remove("hidden");
    }
  });
  anchor.querySelectorAll(".select-options li").forEach(el => {
    el.addEventListener("click", function(e){
      anchor.querySelector("input").value = e.currentTarget.innerHTML;
      anchor.querySelector(".placeholder").classList.add("on");
      anchor.querySelector(".select-options").classList.add("hidden");
      anchor.querySelector(".selection-trigger").classList.remove("active");
    });
  });
  // anchor.querySelector("input").addEventListener("click", function(){   
  //   anchor.querySelector(".selection-trigger").classList.add("active");   
  //   anchor.querySelector(".select-options").classList.remove("hidden");
  // })
})

if (document.getElementById("goTop")) {
  document.getElementById("goTop").addEventListener("click",function(e){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  function activateArrow() {
    if (window.pageYOffset >= 400) {
      document.getElementById("goTop").classList.remove("hidden");
    } else {
      document.getElementById("goTop").classList.add("hidden");
    }
  }
  
  window.onscroll = function() {  
    activateArrow()
  };
}

if (document.getElementById("map")) {
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
}
