var ReviewView = Backbone.View.extend({

    tagName: "tr",

    initialize: function(){
    },

    render: function(){
        this.$el.html(JST["reviews/review"]({ model: this.model }));
        return this;
    }
});
