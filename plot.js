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
 		"text": "Если не Путин то кот"
 	}],
 	"dataProvider":[{
  "likes": 20,
  "dislikes": 7,
  "time": "2017-02-26 19:05"
},
{
  "likes": 23,
  "dislikes": 8,
  "time": "2017-02-26 19:06"
},
{
  "likes": 23,
  "dislikes": 8,
  "time": "2017-02-26 19:07"
},
{
  "likes": 24,
  "dislikes": 8,
  "time": "2017-02-26 19:08"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:09"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:10"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:11"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:12"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:13"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:14"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:15"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:16"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:17"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:18"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:19"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:20"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:21"
},
{
  "likes": 25,
  "dislikes": 8,
  "time": "2017-02-26 19:22"
},
{
  "likes": 26,
  "dislikes": 9,
  "time": "2017-02-26 19:23"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:24"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:25"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:26"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:27"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:28"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:29"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:30"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:31"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:32"
},
{
  "likes": 27,
  "dislikes": 9,
  "time": "2017-02-26 19:33"
},
{
  "likes": 30,
  "dislikes": 9,
  "time": "2017-02-26 19:34"
},
{
  "likes": 30,
  "dislikes": 9,
  "time": "2017-02-26 19:35"
},
{
  "likes": 30,
  "dislikes": 9,
  "time": "2017-02-26 19:36"
},
{
  "likes": 30,
  "dislikes": 9,
  "time": "2017-02-26 19:37"
},
{
  "likes": 30,
  "dislikes": 9,
  "time": "2017-02-26 19:38"
}]
});
