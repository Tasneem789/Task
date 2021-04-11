
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      $("#panel").css({"background-color": "#93e5f3", "color": "white"});
    });
  });
  
  $("#flip2").ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });
  
  $("#flip3").ready(function(event){
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });
  
  $("#flip4").ready(function(){
    $("#flip4").click(function(){
      $("#panel4").slideToggle("slow");
    });
  });
  
  $("#flip5").ready(function(){
    $("#flip5").click(function(){
      $("#panel5").slideToggle("slow");
      $("#panel5").css({"background-color": "#93e5f3", "color": "white"});
    });
  });