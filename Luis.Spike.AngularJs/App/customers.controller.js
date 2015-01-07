//(function () {
'use strict';

//registrationModule.controller('customersController',
//    function ($scope, customersRepository) {
//        $scope.courses = customersRepository.get();
//    });

var customersController = angular.module('customersController', []);

console.log('In customersController');

customersController.controller('customersController', [
    '$scope', '$http', 'customersService', function($scope, $http, customersService) {

        var customers = [];

        //customersService.query(function(blocks) {
        //    angular.forEach(blocks, function(block) {
        //        angular.forEach(block.expansions, function(expansion) {
        //            angular.forEach(expansion.customers, function(customer) {
        //                customers.push(customer);
        //            });
        //        });
        //    });

        customers = customersService.query();

        console.log(customers);

        $scope.customers = customers;

        console.log($scope.customers);
    }

//console.log($scope.customers);


        //$scope.customersCount = 10;    
]);

customersController.factory('customersService', function () {
    return {
        query: function () {
            var customers = [
                { firstName: 'John Doe', lastName: 'Doe', Id: '1' },
                { firstName: 'Mary', lastName: 'Homes', Id: '2' },
                { firstName: 'Chris', lastName: 'Karl', Id: '3' }
            ];

            //console.log(customers);

            return customers;
        }
    };

});

//registrationModule
//     .controller('customersController', ['$scope', 'restangular', function ($scope, Restangular) {
//    console.log('In customersController');
//         var vm = this;
//         vm.customers = [];
//         Restangular.all('customers').getList().then(function (customers) {
//             vm.customers = customers;
//         });
//}]);

//customersController.$inject = ['restangular'];

//function customersController($scope, Restangular) {
//    /* jshint validthis:true */
//    var vm = this;
//    vm.customers = [];

//    console.log(Restangular);

//    activate();

//    function activate() {
//        var baseCustomers = Restangular.all('customers');
//        baseCustomers.getList().then(function (customers) {
//            vm.customers = customers;
//        });
//    }
//}