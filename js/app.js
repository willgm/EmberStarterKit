App = Ember.Application.create();

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("endereco");
    this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
