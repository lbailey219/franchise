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
    $('#modal--submit').on('click',function(){
       $('#removal-result').slideToggle();
     });




  });
