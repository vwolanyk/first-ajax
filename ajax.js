document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var requestRoot = document.querySelector('button')
  var requestPingPong = document.querySelector('button.pingpong')
  requestRoot.addEventListener('click',function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text',
    });
  });

  requestPingPong.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    dataType: 'text',
  }).done(function(responsedata){

    console.log(responsedata);
    step3456.append(responsedata);
  }).fail(function(jqXHR, textStatus, errorThrown){
    step12.prepend("OOPS!! LOOKS LIKE THERE WAS A "+ errorThrown);
});

  });


});
