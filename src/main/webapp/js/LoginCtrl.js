/**
 * Created by chris on 16-5-7.
 */

angular.module('ddiApp')
    .controller('LoginCtl', function ($scope, $auth, $location, $http) {

        $scope.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function (response) {
                    console.log(response.config.data.code);
                });
        };

        // $scope.code = $location.$$absUrl.substring($location.$$absUrl.indexOf("code") + 5);
        var code = $location.$$absUrl.substring($location.$$absUrl.indexOf("code") + 5);


        $scope.getCode = function () {
            // console.log(code);
            $http({
                url: 'http://localhost:9091/signin/getCode',
                method: 'GET',
                params: {
                    'code': code
                }
            }).success(function (data) {
                console.log(data);
            });
        };
    });
