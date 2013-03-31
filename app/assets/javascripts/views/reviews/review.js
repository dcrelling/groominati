var ReviewView = Backbone.View.extend({

    tagName: "tr",

    events: {
    "click a.editReview": "editReview",
    "click a.showReview": "showReview",
    "click a.deleteReview": "deleteReview"
    },

    initialize: function(){
    },

    render: function(){
        this.$el.html(JST["reviews/review"]({ model: this.model }));
        return this;
    },

    editReview: function(){
        var editReviewView = new EditReview();
        console.log(editReviewView.el);
        $('body').html(editReviewView.render().$el);
    },

    showReview: function(){
        alert("show");
    },

    deleteReview: function(){
        alert("delete");
    }
});
