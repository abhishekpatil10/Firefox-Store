$(document).ready(function(){
    $('.nav-bars').click(function(){
        $('.nav-links').toggle(1000);
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }