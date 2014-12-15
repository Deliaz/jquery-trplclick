## TrplClick &mdash; real 'triple click' event plugin for jQuery

Triple click event will be triggered only when all three clicks fired with equal interval.


### Usage: 
```javascript
$('.myBtn').on('trplclick', function () {
  // Your awesom code here
});
```
That's it! Now you have true 'triple click' event handler.

### Options
Default settings are suitable for most cases, but you can customize it anyway
* **minClickInterval** &mdash; minimum allowable value between the first and second clicks. <br>Default: `100` (ms)
* **maxClickInterval** &mdash; maximum allowable value between the first and second clicks. <br>Default: `500` (ms)
* **minPercentThird** &mdash; minimum deviation for third click (in percents) between time of first and second clicks. <br>Default: `85.0` (%)
* **maxPercentThird** &mdash; maximun deviation for third click (in percents) between time of first and second clicks. <br>Default: `130.0` (%)
