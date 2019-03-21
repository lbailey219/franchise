function getZipcode(zipcode) {
  // debugger
  console.log(zipcode);
  $('#modal--zipcode').val(zipcode);
}

function submitForm(zipcode, email) {
  console.log('this is the zipcode: ', zipcode);
  console.log(email);
  // $('#modal--zipcode').val(zipcode);
}

$(document).ready(function() {
  // evnt handlers
  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);
  });

  $('#modal--submit').click(function(){
    var zipcode = $('#modal--zipcode').val();
    var email = $('#modal--email').val();

    submitForm(zipcode, email);
  });
});
