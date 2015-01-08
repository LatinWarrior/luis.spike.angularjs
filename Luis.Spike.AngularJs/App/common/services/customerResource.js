
(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("customerResource", ["$resource", customerResource]);

    function customerResource($resource) {
        return $resource("/api/customers/:Id",
        { Id: "@Id" },
        {
            'query': {
                method: 'GET',
                isArray: true,
                url: '/api/customers/:pageNo/:pageSize',
                params: { pageNo: '@pageNo', pageSize: '@pageSize' }
            }
        });
    }
}());