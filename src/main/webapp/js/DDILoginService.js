/**
 * Created by chris on 16-5-3.
 */

angular.module('ddiApp').factory('LoginSer', ['$http', '$location', '$window', function ($http, $location, $window) {

    return {
        getCode: function () {
            $http({
                url: 'https://www.facebook.com/dialog/oauth?client_id=1139710409407100&redirect_uri=http%3a%2f%2flocalhost%3a8000%2fTools%2fomicsdi',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            console.log($location.$$absUrl);
        },
        getUsername: function (username) {
            return username;
        },
        getUserId: function (userId) {
            return userId;
        },

        authenticate: function (provider) {
            $window.open("https://github.com/login/oauth/authorize?response_type=code&client_id=2a2e68940ee81396ace5&redirect_uri=http://localhost:8000/Tools/omicsdi&scope=user:email", provider, "width=1020, height=618");
        }
    };
}]);
