/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2014 PayPal                                                  │
 │                                                                             │
 │                                                                             │
 │   Licensed under the Apache License, Version 2.0 (the 'License'); you may   │
 │   not use this file except in compliance with the License. You may obtain   │
 │   a copy of the License at http://www.apache.org/licenses/LICENSE-2.0       │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an 'AS IS' BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/* global module: true */
'use strict';
module.exports = {
  'setup': function (nemo, callback) {
    nemo.locatex = function locatex(_locator) {
      var locale = (nemo.props && nemo.props.locale) ? nemo.props.locale : 'default',
        args = Array.prototype.slice.call(arguments),
        locatorArray = (args.length > 1) ? args : arguments[0].split('.'),
        locatr = nemo.locator;
      locatorArray.forEach(function (level) {
        locatr = locatr[level];
      });
      return locatr[locale] || locatr['default'] || locatr;

    };
    callback(null, nemo);
  }
};
