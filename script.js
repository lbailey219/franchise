function getZipcode(zipcode) {
  // debugger
  console.log(zipcode);
  $('#modal--zipcode').val(zipcode);
}

$(document).ready(function() {
  // evnt handlers
  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);
    });
    
    $('#modal--submit').click(function(){
    var zipcode = $('#zipcode').val();
    var email = $('[name="email"]').val();

     submitForm('zipcode, email');
   });



  });
