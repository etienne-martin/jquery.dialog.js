# jquery.dialog.js

This plugin is a lightweight replacement for the browser's ~~boring~~ default dialog boxes.

![Alert dialog](https://github.com/etienne-martin/jquery.dialog.js/raw/master/alert.png "Alert dialog")
![Prompt dialog](https://github.com/etienne-martin/jquery.dialog.js/raw/master/prompt.png "Prompt dialog")
![Confirm dialog](https://github.com/etienne-martin/jquery.dialog.js/raw/master/confirm.png "Confirm dialog")

## Getting Started

Embed [jquery.dialog.css](https://github.com/etienne-martin/dialog/blob/master/build/jquery.dialog.css) and [jquery.dialog.js](https://github.com/etienne-martin/dialog/blob/master/build/jquery.dialog.js) in your page.  
Minified version: [jquery.dialog.min.css](https://github.com/etienne-martin/dialog/blob/master/build/jquery.dialog.min.css), [jquery.dialog.min.js](https://github.com/etienne-martin/dialog/blob/master/build/jquery.dialog.min.js)

### Requirements

This plugin has been tested with the following version of jQuery: [3.1.0](https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js).

## Examples

Here's some basic examples on how to use the plugin:

### Alert

Replaces the default browser ```alert()``` function.

```javascript
dialog.alert({
	message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
});
```

### Prompt

Replaces the default browser ```prompt()``` function.

```javascript
dialog.prompt({
	message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	callback: function(value){
		console.log(value);
	}
});
```

### Confirm

Replaces the default browser ```confirm()``` function.

```javascript
dialog.confirm({
	message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	callback: function(response){
		console.log(response);
	}
});
```

#### Try it yourself!

[Download the project](https://github.com/etienne-martin/dialog/archive/master.zip) and open ```example.html``` in your favorite browser.

## Options

#### title
<sup>Type: String  
Default: ```""```  
Affects: alert, prompt & confirm</sup>   
The title of the dialog.

#### message 
<sup>Type: String  
Default: ```""```  
Affects: alert, prompt & confirm</sup>  
The body of the dialog.

#### button
<sup>Type: String  
Default: ```"Ok"```  
Affects: alert, prompt & confirm</sup>  
The label of the confirmation button.

#### cancel
<sup>Type: String  
Default: ```"Cancel"```  
Affects: confirm</sup>  
The label of the cancellation button.

#### required
<sup>Type: Boolean  
Default: ```false```  
Affects: alert, prompt & confirm</sup>  
Whether or not the user should interact with the dialog box.  
Prevents the user from closing the dialog without entering any value.

#### position
<sup>Type: String  
Default: ```"fixed"```  
Affects: alert, prompt & confirm</sup>  
Changes the css positioning of the dialog box. Can be either ```fixed``` or ```absolute```.

#### animation
<sup>Type: String  
Default: ```"scale"```  
Affects: alert, prompt & confirm</sup>  
The animation used to animate the dialog box. Can be either ```scale```, ```fade``` or ```slide```.

#### input
<sup>Type: Object  
Default: ```{
			type: "text"
		}```  
Affects: prompt</sup>  
List of attributes to apply to the prompt input.

#### validate
<sup>Type: Function  
Default: ```function(value){}```  
Affects: prompt</sup>  
Function used to validate the submitted value. This function should return ```true``` or ```false```.  
Prevents the dialog from closing if the submitted value is invalid.

#### callback
<sup>Type: Function  
Default: ```function(){}```  
Affects: alert, prompt & confirm</sup>  
The function to be executed when the user closes/submits the dialog box.

## Built With

* [Grunt](https://gruntjs.com/) - The JavaScript Task Runner
* [jQuery](https://jquery.com/) - A fast, small, and feature-rich JavaScript library
* [Sass](http://sass-lang.com/) - Syntactically Awesome Style Sheets

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Update the README.md with details of changes to the plugin.

Update [example.html](https://github.com/etienne-martin/dialog/blob/master/example.html) with examples demonstrating the changes to the plugin.

Build the project & test all the features before submitting your pull request.

## Authors

* **Etienne Martin** - *Initial work* - [etiennemartin.ca](http://etiennemartin.ca/)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](https://github.com/etienne-martin/dialog/blob/master/LICENSE.txt) file for details.
