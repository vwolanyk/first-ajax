document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var requestRoot = document.querySelector('button')
  var requestPingPong = document.querySelector('button.pingpong')
  var requestCount = document.querySelector('button.count')
  var requestTime = document.querySelector('button.time')
  var requestCar = document.querySelector('button.car')

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
    console.log("error: "+ errorThrown)
    console.log(jqXHR.responseText);

    step12.prepend("OOPS!! LOOKS LIKE THERE WAS A "+ errorThrown);
  step12.prepend(jqXHR.responseText)}).always(function(){console.log("Request Complete!")});

  });

  requestCount.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data:{amount: ""},
      dataType: 'text',

    }).done(function(responsedata){
      console.log(responsedata);
      console.log('done');
      step7.append("And the Number is: " +responsedata)
    }).fail(function(jqXHR, textStatus, errorThrown){console.log('fail');console.log(jqXHR);});

  });

  requestTime.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data:{timezone:  'Pacific/Honolulu'} ,
      dataType: 'text' ,

    }).done(function(responsedata){
    step8.append(responsedata); })

  });

requestCar.addEventListener('click', function(){
$.ajax({
  url: 'http://first-ajax-api.herokuapp.com/a_car',
  method: 'GET',

  dataType: 'html',

}).done(function(responsedata){
  carlist.innerHTML += responsedata;
})

})

});
