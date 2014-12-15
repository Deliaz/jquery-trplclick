## TrplClick &mdash; real 'triple click' event plugin for jQuery

Triple click event *'trplclick'* will be triggered only when all three clicks fired with equal interval.

### Usage: 
```javascript
$('.myBtn').on('trplclick', function () {
  // Your awesom code here
});
```

### Options
Default settings are suitable for most cases, but you can customize it anyway
* **minClickInterval** &mdash; minimum allowable value between the first and second clicks. Default: `100`
* **maxClickInterval** &mdash; maximum allowable value between the first and second clicks. Default: `500`
* **minPercentThird** &mdash; minimum deviation for third click (in percents) between time of first and second clicks. Default: `85.0`
* **maxPercentThird** &mdash; maximun deviation for third click (in percents) between time of first and second clicks. Default: `130.0`
