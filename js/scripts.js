$(document).ready(function(){
  $("#transportationSurvey").submit(function(event){

    event.preventDefault();
    $(".work-transportation").show();
    $(".fun-transportation").show();

    var workTransportations = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportation = $(this).val();
      // $(".workResults").append(workTransportation + "</br>");
      workTransportations.push(workTransportation);
    });

    workTransportations.forEach(function(item){
      $("ul.workResults").append("<li>" + item + "</li>");
    });

    $("#transportationSurvey").hide();


    var funTransportations =[];
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportation = $(this).val();
      funTransportations.push(funTransportation);
    });

    funTransportations.forEach(function(item) {
      $("ul.funResults").append("<li>" + item + "</li>");
    });
  });
});
