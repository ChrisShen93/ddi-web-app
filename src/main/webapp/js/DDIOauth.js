/**
 * Created by chris on 16-5-25.
 */

angular.module('DDIOauth', [])
    .constant('DDIOauthConfig', {
        endBaseUrl: 'http://localhost:9091',
        providers: {
            facebook: {
                name: 'facebook',
                url: endBaseUrl + '/login/facebook',
                authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
                redirectUri: window.location.origin + '/',
                scope: 'profile',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: {
                    width: 580,
                    height: 400
                }
            },
            github: {
                name: 'github',
                url: endBaseUrl + '/login/github',
                authorizationEndpoint: 'https://github.com/login/oauth/authorize',
                redirectUri: window.location.origin,
                scope: 'profile',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: {
                    width: 1020,
                    height: 618
                }
            }
        }
    })
    .provider('$auth', ['DDIOauthConfig', function (config) {
        Object.defineProperties(this, {
            baseUrl: {
                get: function () {
                    return config.baseUrl;
                }
            }
        })
    }])
;