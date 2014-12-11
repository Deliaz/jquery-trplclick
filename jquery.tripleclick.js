/*!
* jQuery 'tripleclick' event plugin
* Author: @deliaz
* Licensed under the MIT license
*/

"use strict";
(function ($) {
    $.event.special.tripleclick = {
        setup: function () {
            $(this).bind('click', clickHandler);
        },
        teardown: function () {
            $(this).unbind('click', clickHandler);
        },
        add: function (handleObj) {
            var oldHandler = handleObj.handler;
            var defaults = {
                MinClickInterval: 100,
                MaxClickInterval: 500,
                MinPercentThird: 85.0,
                MaxPercentThird: 150.0
            };

            // Runtime for the handleObj
            var hasOne = false,
                hasTwo = false,
                time = [0, 0, 0],
                diff = [0, 0];

            handleObj.handler = function (event, data) {
                var now = Date.now(),
                    conf = $.extend({}, defaults, event.data);

                // Clear, if we failed timeout for 2-rd click
                if (time[1] && now - time[1] >= conf.MaxClickInterval) {
                    handleObj.clearRuntime();
                }
                // Clear, if we failed timeout for 3-rd click
                if (time[0] && time[1] && now - time[0] >= conf.MaxClickInterval) {
                    handleObj.clearRuntime();
                }

                // Catch third click
                if (hasTwo) {
                    time[2] = Date.now();
                    diff[1] = time[2] - time[1];

                    var deltaPercent = 100.0 * (diff[1] / diff[0]);

                    if (deltaPercent >= conf.MinPercentThird && deltaPercent <= conf.MaxPercentThird) {
                        oldHandler.apply(this, arguments);
                    }
                    handleObj.clearRuntime();
                }

                // Catch first click
                else if (!hasOne) {
                    hasOne = true;
                    time[0] = Date.now();
                }

                // Catch second click
                else if (hasOne) {
                    time[1] = Date.now();
                    diff[0] = time[1] - time[0];

                    (diff[0] >= conf.MinClickInterval && diff[0] <= conf.MaxClickInterval) ?
                        hasTwo = true : handleObj.clearRuntime();
                }

            };

            // Runtime clearing function
            handleObj.clearRuntime = function() {
                hasOne = false;
                hasTwo = false;
                time[0] = 0;
                time[1] = 0;
                time[2] = 0;
                diff[0] = 0;
                diff[1] = 0;
                //cuz i'm thug
            };
        }
    };

    function clickHandler(event) {
        $(this).triggerHandler('tripleclick', [event.data]);
    }

})(jQuery);