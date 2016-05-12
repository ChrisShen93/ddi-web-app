/**
 * Created by chris on 16-5-3.
 */

angular.module('ddiApp').controller('LoginCtrl', ['$scope', '$location', 'LoginSer', function ($scope, $location, LoginSer) {
    // var code = $location.$$absUrl.substring($location.$$absUrl.indexOf("code") + 5);
    // console.log(code);
    console.log($location.absUrl());
    // console.log($location.search());//此方法获取code必须开启html5模式

    $scope.loginFB = function () {
        LoginSer.getCode();
    }

}]);
