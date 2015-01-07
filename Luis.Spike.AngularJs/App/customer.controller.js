//(function () {
'use strict';

//registrationModule.controller('customersController',
//    function ($scope, customersRepository) {
//        $scope.courses = customersRepository.get();
//    });

var customerController = angular.module('customerController', []);

console.log('In customerController');

customerController.controller('customerController', ['$scope', '$http', 'customers', function ($scope, $http, customerService) {

    var customers = [];    

        $scope.customers = customers;  
    //$scope.customersCount = 10;
}]);

customerController.factory('customerService', function () {
    return {
        getData: function () {
            var customers = [
                { firstName: 'John Doe', lastName: 'Doe', Id: '1' },
                { firstName: 'Mary', lastName: 'Homes', Id: '2' },
                { firstName: 'Chris', lastName: 'Karl', Id: '3' }
            ];

            return customers;
        }
    };

});


