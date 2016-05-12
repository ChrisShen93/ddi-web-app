/**
 * Created by chris on 16-5-3.
 */

angular.module('ddiApp').factory('LoginSer', ['$http', '$location', function ($http, $location) {

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
        }
    };
}]);
