/**
 * Created by chris on 16-5-9.
 */

var appID = 1139710409407100;

function fbLogin() {
    var path = 'https://www.facebook.com/dialog/oauth?';
    var queryParams = ['client_id=' + appID,
        'redirect_uri=http://localhost:8000/Tools/omicsdi'];
        // ,
        // 'response_type=token'];
    var query = queryParams.join('&');
    var url = path + query;
    window.location.replace(url);

}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    // if (r != null) return unescape(r[2]); return null;
    console.log(r);
    console.log("getUrlParam");
}

function checkFbHashLogin() {

    if (window.location.hash.length > 3) {
        var hash = window.location.hash.substring(1);
        if(hash.split('=')[0] == 'access_token')
        {
            var path = "https://graph.facebook.com/me?";
            var queryParams = [hash, 'callback=displayUser'];
            var query = queryParams.join('&');
            var url = path + query;
            console.log(url);

            //use jsonp to call the graph
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }

    }
}

