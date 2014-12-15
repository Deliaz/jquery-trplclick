/*!
* TrplClick - real Triple Click event plugin for jQuery
* Version: 1.1.0
* Author: @deliaz https://github.com/Deliaz
* Licensed under the MIT license
*/

"use strict";
(function ($) {
    $.event.special.trplclick = {
        setup: function () {
            $(this).bind('click', clickHandler);
        },
        teardown: function () {
            $(this).unbind('click', clickHandler);
        },
        add: function (obj) {
            var oldHandler = obj.handler;

            // Default settings
            var defaults = {
                minClickInterval: 100,
                maxClickInterval: 500,
                minPercentThird: 85.0,
                maxPercentThird: 130.0
            };

            // Runtime
            var hasOne = false,
                hasTwo = false,
                time = [0, 0, 0],
                diff = [0, 0];

            obj.handler = function (event, data) {
                var now = Date.now(),
                    conf = $.extend({}, defaults, event.data);

                // Clear runtime after timeout fot the 2nd click
                if (time[1] && now - time[1] >= conf.maxClickInterval) {
                    obj.clearRuntime();
                }
                // Clear runtime after timeout fot the 3rd click
                if (time[0] && time[1] && now - time[0] >= conf.maxClickInterval) {
                    obj.clearRuntime();
                }

                // Catch third click
                if (hasTwo) {
                    time[2] = Date.now();
                    diff[1] = time[2] - time[1];

                    var deltaPercent = 100.0 * (diff[1] / diff[0]);

                    if (deltaPercent >= conf.minPercentThird && deltaPercent <= conf.maxPercentThird) {
                        oldHandler.apply(this, arguments);
                    }
                    obj.clearRuntime();
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

                    (diff[0] >= conf.minClickInterval && diff[0] <= conf.maxClickInterval) ?
                        hasTwo = true : obj.clearRuntime();
                }

            };

            /**
             * Clear runtime
             */
            obj.clearRuntime = function() {
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
        $(this).triggerHandler('trplclick', [event.data]);
    }

})(jQuery);