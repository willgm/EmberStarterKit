App = Ember.Application.create();

App.Endereco = Ember.Object.extend({
	estado: null,
	logradouro: null
});;

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("endereco");
    this.route("about");
});

App.EnderecoRoute = Ember.Route.extend({
  model: function() {
    return [
		App.Endereco.create({
			estado: 'SP',
			logradouro: 'teste'
		})
	];
  }
});
