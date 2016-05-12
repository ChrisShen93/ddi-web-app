/**
 * Created by chris on 16-5-10.
 */

function getKeyValue(key, jscallback) {
    var paramValue = window.localStorage.getItem(key);
    window.localStorage.removeItem(key);
    jscallback(paramValue);
}

function setKeyValue(key, value) {
    window.localStorage.setItem(key, value);
}
