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
}]
});
