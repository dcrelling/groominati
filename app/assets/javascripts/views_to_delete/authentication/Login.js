var Login = Backbone.View.extend({

    events: {
        'submit form': 'login'
    },

    initialize: function(){
        this.model = new UserSession();
        this.modelBinder = new Backbone.ModelBinder();
    },


    render: function(){
        this.modelBinder.bind(this.model, this.el);
        this.$el.html(JST["authentication/login"]({ model: this.model}));
        return this;
    },

    login: function(e){

      var self = this,
        el = $(this.el);

    e.preventDefault();

    el.find('input.btn-primary').button('loading');
    el.find('.alert-error').remove();

    this.model.save(this.model.attributes, {
      success: function(userSession, response) {
        el.find('input.btn-primary').button('reset');
        //BD.currentUser = new BD.Models.User(response);
        //BD.vent.trigger("authentication:logged_in");
      },
      error: function(userSession, response) {
        var result = $.parseJSON(response.responseText);
        el.find('form').prepend(BD.Helpers.Notifications.error(result.error));
        el.find('input.btn-primary').button('reset');
      }
    });

    }


})
