App = Ember.Application.create();

App.Base = [
        {
            estado: 'SP',
            logradouro: 'teste'
        }
    ];

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("endereco");
    this.route("about");
});

App.EnderecoRoute = Ember.Route.extend({
  model: function() {
    return App.Base;
  }
});
