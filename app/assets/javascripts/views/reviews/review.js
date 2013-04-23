var ReviewView = Backbone.View.extend({

    tagName: "tr",

    events: {
    "click a.editReview": "editReview",
    "click a.showReview": "showReview",
    "click a.deleteReview": "deleteReview",
    "click a.newReview": "newReview"
    },

    initialize: function(options){
    },

    render: function(){
        this.$el.html(JST["reviews/review"]({ model: this.model, index: this.options.index }));
        return this;
    },

    editReview: function(){
        alert(this.model.get('title'));
        var editReviewView = new EditReview({model: this.model});
        console.log(editReviewView.el);
        $('body').html(editReviewView.render().$el);
    },

    showReview: function(){
        alert("show");
    },

    deleteReview: function(){
        alert("delete");
    },

    newReview: function(){
        alert("delete");
    }
});
