window.Groominati = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    alert('Hello from Backbone!');
    var reviews = new Groominati.Collections.Reviews(data.reviews);
    new ExampleApp.Routers.Tasks({ tasks: reviews});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Groominati.initialize();
});
