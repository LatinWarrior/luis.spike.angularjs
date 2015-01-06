(function () {
    'use strict';

    angular
        .module('registrationModule')
        .controller('customersController', customersController);

    customersController.$inject = ['$location'];

    function customersController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'customersController';

        activate();

        function activate() { }
    }
})();
