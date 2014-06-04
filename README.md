## nemo-locatex

Specify different Nemo locator objects per-locale.

Register as "locatex" (see below)

[![Build Status](https://travis-ci.org/paypal/nemo-drivex.svg?branch=master)](https://travis-ci.org/paypal/nemo-drivex)

### Installation

* Add nemo-locatex to your package.json (see nemo-locatex package.json for version)
* Add nemo-locatex to your plugins config

```javascript
{
	"plugins": {
		"drivex": {
			"module": "nemo-drivex",
			"register": true
		},
		"locatex": {
			"module": "nemo-locatex",
			"register": true
		}
	}
}
```

Now the locatex function will be available in any of your nemo tests which include locators.

### Changing your locator files

You don"t need to change your locator files unless you plan to use locale-specific locators. But if you do plan to use them, you need to add locale-specific and default sections to each locator which requires it:

myView.json:
```javascript
{
	"emailTextInput": {
		"locator": "login_email",
		"type": "id"
	},
	"passwordTextInput": {
		"locator": "login_password",
		"type": "id"
	},
	"loginButton": {
		"default": {
			"locator": "default-login-button",
			"type": "id"
		},
		"DE": {
			"locator": "Das login-button",
			"type": "id"
		}
	},
	"submitButton": {
		"default": {
			"locator": "submit",
			"type": "name"
		} ,
		"FR": {
			"locator": "le submit",
			"type": "name"
		}
	},
	"logoutLink": {
		"locator": "a[href*='cgi-bin/webscr?cmd=_logout']",
		"type": "css"
	}
}
```

In the above example, two locators are set up to be locale-specific. Three others don't have locale information.

### Setting locale

Add locale as a pass-through variable to Nemo in your tests. If you are using grunt, this means add locale to your gruntfile config for your tests as follows:

```javascript
"options": {
	"mocha": {
		"reportLocation": grunt.option("reportLocation") || "<%=loopmocha.basedir%>/report",
		"timeout": grunt.option("timeout") || 120000,
		"grep": grunt.option("grep") || 0,
		"debug": grunt.option("debug") || 0,
		"reporter": grunt.option("reporter") || "spec"
	},
	"nemoData": {
		"locale": nconf.get("LOCALE") || "default",
		"autoBaseDir": "<%=loopmocha.basedir%>",
		"targetBrowser": nconf.get("TARGET_BROWSER") || "firefox",
		"targetServer": nconf.get("TARGET_SERVER") || "localhost",
		"targetBaseUrl": "http://localhost:8000",
		"seleniumJar": nconf.get("SELENIUM_JAR") || "/usr/local/bin/selenium-standalone.jar",
		"serverProps": {"port": 4444}
	},
	"iterations": [
		{
			"description": "default"
		}
	]
},
```

### Usage in your tests

With LOCALE set in your Nemo grunt config, locatex auto-registered, and with a locator named "myView" pulled in via your nemo.setup:

Where you would have previously had this code:
```javascript
drivex.find(loc.login.loginButton).click();
```

Now you would have this instead:
```javascript
drivex.find(locatex("login.loginButton")).click();
```

This will use the appropriate locator based on the LOCALE setting.
