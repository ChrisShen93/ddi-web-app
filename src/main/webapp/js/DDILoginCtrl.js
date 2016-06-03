/**
 * Created by chris on 16-5-3.
 */

angular.module('ddiApp').controller('LoginCtrl', ['$scope', '$rootScope', '$location', '$auth', function ($scope, $rootScope, $location, $auth) {

    $scope.authenticate = function (provider) {
        $auth.authenticate(provider)
            .then(function(data) {
                console.log('You have successfully signed in with ' + provider + '!');
                console.log(data);
                $rootScope.userId = data.data.id + "@" + provider;
                $rootScope.userName = data.data.name;
                $rootScope.accessToken = data.data.access_token;
                $location.path('/');
            })
            .catch(function(error) {
                if (error.error) {
                    // Popup error - invalid redirect_uri, pressed cancel button, etc.
                    console.error(error.error);
                } else if (error.data) {
                    // HTTP response error from server
                    console.error(error.data.message, error.status);
                } else {
                    console.error(error);
                }
            });
    };
}]);
