(function() {

    "use strict";

    angular
        .module("customerManagement")
        .controller("CustomerListCtrl", ["customerResource", CustomerListCtrl]);

    function CustomerListCtrl(customerResource) {
        // when using the controller as syntax, the model is defined in the "this" variable.
        var vm = this;

        var main = {
            page: 1,
            take: 15
        };

        customerResource.query(function(data) {
            vm.customers = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());