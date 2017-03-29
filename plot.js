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
  "likes": 366,
  "dislikes": 369,
  "time": "2017-03-29 18:25"
},
{
  "likes": 367,
  "dislikes": 369,
  "time": "2017-03-29 18:26"
},
{
  "likes": 368,
  "dislikes": 370,
  "time": "2017-03-29 18:26"
},
{
  "likes": 368,
  "dislikes": 370,
  "time": "2017-03-29 18:26"
},
{
  "likes": 368,
  "dislikes": 370,
  "time": "2017-03-29 18:27"
},
{
  "likes": 370,
  "dislikes": 370,
  "time": "2017-03-29 18:27"
}]
});
