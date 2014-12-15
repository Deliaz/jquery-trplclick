## TrplClick &mdash; real 'triple click' event plugin for jQuery

Triple click event will be triggered only when all three clicks are fired with equal interval.

### Install
Clone this repo or
```
bower install jquery-trplclick
```


### Usage: 
```javascript
$('.myBtn').on('trplclick', function () {
  // Your awesome code here
});
```
That's it! Now you have true 'triple click' event handler.

### Options
Default settings are suitable for almost ane cases, but you can customize it anyway
* **minClickInterval** &mdash; minimum allowable interval between the first and the second click. <br>Default: `100` (ms)
* **maxClickInterval** &mdash; maximum allowable interval between the first and the second click. <br>Default: `500` (ms)
* **minPercentThird** &mdash; minimum deviation for the third click (in percentages) between the intervals of the first and the second click. <br>Default: `85.0` (%)
* **maxPercentThird** &mdash; maximum deviation for third click (in percentages) between intervals of the first and the second click. <br>Default: `130.0` (%)
