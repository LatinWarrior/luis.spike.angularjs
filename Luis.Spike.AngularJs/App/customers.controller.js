////(function () {
//'use strict';

////registrationModule.controller('customersController',
////    function ($scope, customersRepository) {
////        $scope.courses = customersRepository.get();
////    });

//var customersController = angular.module('customersController', []);

//console.log('In customersController');

//customersController.factory('customersService', ['$resource',
//  function ($resource) {
//      return $resource('/api/Customers', {}, {
//          query: { method: 'GET', params: {}, isArray: true }
//      });
//  }]);

//customersController.controller('customersController', [
//    '$scope', '$http', '$resource', 'customersService', function($scope, $http, $resource, customersService) {

//        var customers = [];

//        //customersService.query(function(blocks) {
//        //    angular.forEach(blocks, function(block) {
//        //        angular.forEach(block.expansions, function(expansion) {
//        //            angular.forEach(expansion.customers, function(customer) {
//        //                customers.push(customer);
//        //            });
//        //        });
//        //    });

//        customers = customersService.query();

//        console.log(customers);

//        $scope.customers = customers;

//        console.log($scope.customers);
//    }

////console.log($scope.customers);


//        //$scope.customersCount = 10;    
//]);


////registrationModule
////     .controller('customersController', ['$scope', 'restangular', function ($scope, Restangular) {
////    console.log('In customersController');
////         var vm = this;
////         vm.customers = [];
////         Restangular.all('customers').getList().then(function (customers) {
////             vm.customers = customers;
////         });
////}]);

////customersController.$inject = ['restangular'];

////function customersController($scope, Restangular) {
////    /* jshint validthis:true */
////    var vm = this;
////    vm.customers = [];

////    console.log(Restangular);

////    activate();

////    function activate() {
////        var baseCustomers = Restangular.all('customers');
////        baseCustomers.getList().then(function (customers) {
////            vm.customers = customers;
////        });
////    }
////}