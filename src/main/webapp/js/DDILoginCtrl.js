/**
 * Created by chris on 16-5-3.
 */

angular.module('ddiApp').controller('LoginCtrl', ['$scope', '$location', 'LoginSer', '$auth', '$window', function ($scope, $location, LoginSer, $auth, $window) {
    // var code = $location.$$absUrl.substring($location.$$absUrl.indexOf("code") + 5);
    // console.log(code);
    console.log($location.absUrl());
    // console.log($location.search());//此方法获取code必须开启html5模式

    $scope.authenticate = function (provider) {
        console.log("this is authenticate");

        LoginSer.authenticate(provider);

        // $auth.authenticate(provider)
        //     .then(function (response) {
        //         console.log("this is $auth.authenticate");
        //         console.log("response:");
        //         console.log(response);
        //         // $location.path('/Tools/omicsdi');
        //     });

        // var Oauth = {};
        // Oauth.authenticate = function (provider) {
        //     var provider
        // }
    };

    $scope.loginFB = function () {
        LoginSer.getCode();
    }

}]);
