function getZipcode(zipcode) {
    console.log(zipcode);
}


$(document).ready(function() {
// evnt handlers
  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);
  });
});
