(function() {

    "use strict";

    angular
        .module("customerManagement")
        .controller("CustomerListCtrl", ["customerResource", CustomerListCtrl]);

    function CustomerListCtrl(customerResource) {
        // when using the controller as syntax, the model is defined in this variable.
        var vm = this;

        customerResource.query(function(data) {
            vm.customers = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());