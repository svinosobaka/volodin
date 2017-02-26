AmCharts.makeChart("chartdiv", {
 	"type": "serial",
 	"categoryField": "time",
 	"dataDateFormat": "YYYY-MM-DD HH:NN",
 	"categoryAxis": {
 		"minPeriod": "mm",
 		"parseDates": true
 	},
 	"chartCursor": {
 		"enabled": true,
 		"categoryBalloonDateFormat": "JJ:NN"
 	},
 	"chartScrollbar": {
 		"enabled": true
 	},
 	"trendLines": [],
 	"graphs": [{
 		"bullet": "round",
 		"id": "AmGraph-1",
 		"title": "Лайки",
 		"valueField": "likes"
 	}, {
 		"bullet": "square",
 		"id": "AmGraph-2",
 		"title": "Дизлайки",
 		"valueField": "dislikes"
 	}],
 	"guides": [],
 	"valueAxes": [{
 		"id": "ValueAxis-1",
 		"title": "Количество"
 	}],
 	"allLabels": [],
 	"balloon": {},
 	"legend": {
 		"enabled": true,
 		"useGraphSettings": true
 	},
 	"titles": [{
 		"id": "Title-1",
 		"size": 15,
 		"text": "Ольгино за работой"
 	}],
 	"dataProvider":[{
  "likes": 20,
  "dislikes": 574,
  "time": "2017-02-26 21:21"
},
{
  "likes": 20,
  "dislikes": 578,
  "time": "2017-02-26 21:22"
},
{
  "likes": 20,
  "dislikes": 596,
  "time": "2017-02-26 21:23"
},
{
  "likes": 20,
  "dislikes": 601,
  "time": "2017-02-26 21:24"
},
{
  "likes": 20,
  "dislikes": 606,
  "time": "2017-02-26 21:25"
},
{
  "likes": 20,
  "dislikes": 606,
  "time": "2017-02-26 21:26"
},
{
  "likes": 20,
  "dislikes": 624,
  "time": "2017-02-26 21:27"
},
{
  "likes": 20,
  "dislikes": 641,
  "time": "2017-02-26 21:28"
},
{
  "likes": 20,
  "dislikes": 655,
  "time": "2017-02-26 21:29"
},
{
  "likes": 20,
  "dislikes": 660,
  "time": "2017-02-26 21:30"
},
{
  "likes": 20,
  "dislikes": 669,
  "time": "2017-02-26 21:31"
},
{
  "likes": 21,
  "dislikes": 686,
  "time": "2017-02-26 21:32"
},
{
  "likes": 21,
  "dislikes": 695,
  "time": "2017-02-26 21:33"
},
{
  "likes": 21,
  "dislikes": 697,
  "time": "2017-02-26 21:34"
},
{
  "likes": 21,
  "dislikes": 712,
  "time": "2017-02-26 21:35"
},
{
  "likes": 21,
  "dislikes": 721,
  "time": "2017-02-26 21:36"
},
{
  "likes": 21,
  "dislikes": 725,
  "time": "2017-02-26 21:37"
},
{
  "likes": 22,
  "dislikes": 735,
  "time": "2017-02-26 21:38"
},
{
  "likes": 22,
  "dislikes": 735,
  "time": "2017-02-26 21:39"
},
{
  "likes": 24,
  "dislikes": 746,
  "time": "2017-02-26 21:40"
},
{
  "likes": 24,
  "dislikes": 748,
  "time": "2017-02-26 21:41"
},
{
  "likes": 24,
  "dislikes": 753,
  "time": "2017-02-26 21:42"
},
{
  "likes": 24,
  "dislikes": 775,
  "time": "2017-02-26 21:43"
}]
});
