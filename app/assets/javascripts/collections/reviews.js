var ReviewsCollection = Backbone.Collection.extend({

  model: ReviewModel,
  url: '/reviews'

});
