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
  "likes": 372,
  "dislikes": 371,
  "time": "2017-03-29 18:33"
},
{
  "likes": 372,
  "dislikes": 371,
  "time": "2017-03-29 18:34"
},
{
  "likes": 373,
  "dislikes": 371,
  "time": "2017-03-29 18:35"
},
{
  "likes": 376,
  "dislikes": 371,
  "time": "2017-03-29 18:36"
},
{
  "likes": 376,
  "dislikes": 371,
  "time": "2017-03-29 18:37"
},
{
  "likes": 377,
  "dislikes": 371,
  "time": "2017-03-29 18:38"
},
{
  "likes": 380,
  "dislikes": 371,
  "time": "2017-03-29 18:39"
},
{
  "likes": 380,
  "dislikes": 371,
  "time": "2017-03-29 18:40"
},
{
  "likes": 382,
  "dislikes": 371,
  "time": "2017-03-29 18:41"
},
{
  "likes": 382,
  "dislikes": 371,
  "time": "2017-03-29 18:42"
},
{
  "likes": 383,
  "dislikes": 371,
  "time": "2017-03-29 18:43"
},
{
  "likes": 383,
  "dislikes": 371,
  "time": "2017-03-29 18:44"
},
{
  "likes": 383,
  "dislikes": 371,
  "time": "2017-03-29 18:45"
},
{
  "likes": 383,
  "dislikes": 371,
  "time": "2017-03-29 18:46"
},
{
  "likes": 385,
  "dislikes": 372,
  "time": "2017-03-29 18:47"
},
{
  "likes": 385,
  "dislikes": 372,
  "time": "2017-03-29 18:48"
},
{
  "likes": 385,
  "dislikes": 372,
  "time": "2017-03-29 18:49"
},
{
  "likes": 385,
  "dislikes": 372,
  "time": "2017-03-29 18:50"
},
{
  "likes": 385,
  "dislikes": 372,
  "time": "2017-03-29 18:51"
}]
});
