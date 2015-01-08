
(function () {
    "use strict";

    // Remove the dependency to customerResourceMock when the backend service is ready.
    var app = angular.module('customerManagement',
    ["common.services", "customerResourceMock"]);
}());