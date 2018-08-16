(function($){
  $(function(){

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {indicators:false, height:500});
  });