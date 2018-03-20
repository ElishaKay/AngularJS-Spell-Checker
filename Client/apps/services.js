'use strict';

var dictServiceModule = angular.module('spellChecker.services', []);
/* Services */
dictServiceModule.factory('dictService', function ($http) {
    var dictService = {};
//    $http.get('http://localhost/spellchecker/api/dict').success(function (data, status) {
//        dictService.en_ca = data;
//    });

    return dictService;
});


// Demonstrate how to register services
// In this case it is a simple value service.
dictServiceModule.value('version', '0.1');
dictServiceModule.value('dictUrl', 'http://localhost/spellchecker/api/dict');
