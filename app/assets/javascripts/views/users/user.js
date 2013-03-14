var UserView = Backbone.View.extend({

tagName: "tr",

    initialize: function(){
    },

    render: function(){
        this.$el.html(JST["users/user"]({ model: this.model }));
        return this;
    }


});