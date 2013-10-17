var Groominati = new Marionette.Application();

Groominati.addRegions({
  mainRegion: "#main-region"
});

Groominati.on("initialize:after", function() {

  console.log("Groominati has started!");
  Backbone.history.start();

});
