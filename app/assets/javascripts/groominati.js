 Groominati = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  reviewsCollection: null,
  initialize: function(data) {
    this.reviewsCollection = new ReviewsCollection(data.reviews);
    new  GroominatiRouter();
    Backbone.history.start();
  }
};


