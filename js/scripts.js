$(document).ready(function(event){
  $("form#transportSurvey").submit(function(event){
  event.preventDefault();
  $("#workResponse").show();
  $("input:checkbox[name = worktrans]:checked").each(function(){
    var workTransportationMode = $(this).val();
    $("#workResponse").append(workTransportationMode + "<br>");
  });
  $("#funResponse").show();
  $("input:checkbox[name = funtrans]:checked").each(function(){
    var workTransportationMode = $(this).val();
    $("#funResponse").append(workTransportationMode + "<br>");
  });


  $("#transportSurvey").hide();
  });
});
