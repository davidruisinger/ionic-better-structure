(function() {
	'use strict';

	angular
		.module('app')
		.config(configure);

		configure.$inject = [];

	function configure () {
		// exceptionHandlerProvider.configure(config.appErrorPrefix);
		// configureStateHelper();

		// toastr.options.timeOut = 4000;
		// toastr.options.positionClass = 'toast-bottom-right';

		// ////////////////

		// function configureStateHelper() {
		// 	routerHelperProvider.configure({
		// 		docTitle: 'NG-Modular: '
		// 	});
		// }
	}

})();