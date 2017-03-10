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
  "likes": 4,
  "dislikes": 2,
  "time": "2017-03-10 19:46"
},
{
  "likes": 4,
  "dislikes": 2,
  "time": "2017-03-10 19:48"
},
{
  "likes": 5,
  "dislikes": 3,
  "time": "2017-03-10 19:49"
},
{
  "likes": 5,
  "dislikes": 3,
  "time": "2017-03-10 19:50"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:51"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:52"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:53"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:54"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:55"
},
{
  "likes": 5,
  "dislikes": 4,
  "time": "2017-03-10 19:56"
},
{
  "likes": 6,
  "dislikes": 4,
  "time": "2017-03-10 19:57"
},
{
  "likes": 6,
  "dislikes": 4,
  "time": "2017-03-10 19:58"
}]
});
