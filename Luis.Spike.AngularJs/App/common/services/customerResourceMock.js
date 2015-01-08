
(function () {

    "use strict";

    var app = angular
        .module("customerResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var customers = [
            { "id": 1, "firstName": "Clyde", "lastName": "Harber", "middleName": "Kolby", "email": "cedrick_monahan@hotmail.com" },
            { "id": 2, "firstName": "Owen", "lastName": "Muller", "middleName": "Alexandrea", "email": "judson@hotmail.com" },
            { "id": 3, "firstName": "Shyann", "lastName": "Haag", "middleName": "Toy", "email": "raquel.ebert@hotmail.com" },
            { "id": 4, "firstName": "Austin", "lastName": "Friesen", "middleName": "Bridget", "email": "shirley.conroy@gmail.com" },
            { "id": 5, "firstName": "Janice", "lastName": "Parisian", "middleName": "Leonardo", "email": "leopold@yahoo.com" },
            { "id": 6, "firstName": "Collin", "lastName": "King", "middleName": "Joe", "email": "braeden@gmail.com" },
            { "id": 7, "firstName": "Citlalli", "lastName": "McDermott", "middleName": "Morton", "email": "germaine@gmail.com" },
            { "id": 8, "firstName": "Rosemary", "lastName": "Stanton", "middleName": "Lelah", "email": "louisa@hotmail.com" },
            { "id": 9, "firstName": "Gordon", "lastName": "Gorczany", "middleName": "Darrin", "email": "missouri@yahoo.com" },
            { "id": 10, "firstName": "Shea", "lastName": "Carter", "middleName": "Leann", "email": "carissa.jones@gmail.com" },
            { "id": 11, "firstName": "Cody", "lastName": "Hoppe", "middleName": "Ben", "email": "forrest@hotmail.com" },
            { "id": 12, "firstName": "Alexandre", "lastName": "Berge", "middleName": "Moshe", "email": "josh_jacobs@hotmail.com" },
            { "id": 13, "firstName": "Luigi", "lastName": "Greenholt", "middleName": "Linda", "email": "allison@hotmail.com" },
            { "id": 14, "firstName": "Shana", "lastName": "Hartmann", "middleName": "Domenico", "email": "monserrat.daniel@gmail.com" },
            { "id": 15, "firstName": "Karl", "lastName": "Murray", "middleName": "Hobart", "email": "tatum@gmail.com" },
            { "id": 16, "firstName": "Rey", "lastName": "Koelpin", "middleName": "Nat", "email": "lucius@hotmail.com" },
            { "id": 17, "firstName": "Margie", "lastName": "Harris", "middleName": "Karlie", "email": "ramon_wuckert@gmail.com" },
            { "id": 18, "firstName": "Jarrett", "lastName": "Hackett", "middleName": "Torey", "email": "else_hills@hotmail.com" },
            { "id": 19, "firstName": "Betty", "lastName": "Feeney", "middleName": "Nichole", "email": "kory@gmail.com" },
            { "id": 20, "firstName": "Josh", "lastName": "Bradtke", "middleName": "Ari", "email": "sharon@gmail.com" },
            { "id": 21, "firstName": "Alfred", "lastName": "Davis", "middleName": "Kathleen", "email": "rex.fay@yahoo.com" },
            { "id": 22, "firstName": "Paris", "lastName": "Lindgren", "middleName": "Angelita", "email": "bud.leffler@gmail.com" }
        ];

        var customerUrl = "/api/customers";

        $httpBackend.whenGET(customerUrl).respond(customers);
    });

}());