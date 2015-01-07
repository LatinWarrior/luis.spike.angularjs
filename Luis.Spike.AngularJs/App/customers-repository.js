'use strict';

registrationModule.factory('customersRepository',
    function (restangularProvider) {
        return {
            get: function () {
                restangularProvider.setBaseUrl('/api');
                restangularProvider.all('customers').getList().then(function(customers) {
                    return customers;
                });
            }
        }
    });