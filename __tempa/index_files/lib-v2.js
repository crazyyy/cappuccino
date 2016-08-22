(function () {
    var LOAD_DELAY_MS = 1500;

    function loadScripts(onScriptsLoaded) {
        var script = document.createElement('script');
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
        document.head.appendChild(script);
        script.onload = function () {
            var script = document.createElement('script');
            script.src = "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js";
            document.head.appendChild(script);
            script.onload = function () {
                onScriptsLoaded();
            }
        };
    }

    function onScriptsLoaded() {
        window.telerWdJQuery = jQuery.noConflict(true);
        loadCallbackButton();

        function loadCallbackButton() {
            telerWdJQuery.get("//" + telerWdDomain + "/rest/public/widget/callback/" + telerWdWidgetId + "/show_mode", function (data) {
                if(data.showAllowedNow) {
                    telerWdJQuery.get("//" + telerWdDomain + "/rest/public/widget/callback/" + telerWdWidgetId + "/trigger", function (data) {
                        telerWdJQuery("body").append(data);
                        if(!telerWdJQuery.cookie("TELERSESSION_REFERRER")) {
                            //expires when session ends
                            telerWdJQuery.cookie("TELERSESSION_REFERRER", document.referrer, { expires: 36500 });
                        }
                    });
                }
            });
        }
    }

    setTimeout(function() {
        loadScripts(onScriptsLoaded);
    }, LOAD_DELAY_MS);
})();