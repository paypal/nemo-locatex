/* global module: true, require: true, console: true */
"use strict";
var async = require("async");
module.exports = {
	"setup": function (config, result, callback) {
		var returnObj = result;
		returnObj.locatex = (function locatex(_locator) {
			var locale = (result.props && result.props.locale) ? result.props.locale : "default",
				locatr = this.locator;
			_locator.split(".").forEach(function (level) {
				locatr = locatr[level];
			});
			return locatr[locale] || locatr["default"] || locatr;

		}).bind(result);
		callback(null, config, returnObj);

	}
};
