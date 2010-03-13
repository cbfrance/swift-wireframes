jQuery(function($) {
    $("#soft_input")
      .freebaseSuggest({soft:true})
      .bind("fb-select", function(e, data) {
        mylog("select id: " , data.id , ", name: " , data.name, data);
      })
      .bind("fb-submit", function(e, data) {
        mylog("submit id: " , data.id ,  ", name: " , data.name, data);
      });
  });

  // just to show that this actually connects
  function mylog() {
    var msg = "";
    $.each(arguments, function(i,n) {
      msg += n;
    });
    if (msg) {
      $("#msg").append("<span class='new'>" + msg + "</span>");
    }
  };