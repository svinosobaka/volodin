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
 		"title": "КАК ЖЕ ЗАЕБАЛА ЭТА ЕБАНАЯ МРАЗЬ"
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
 		"text": "Chart Title"
 	}],
 	"dataProvider":[{
  "likes": 34,
  "dislikes": 4,
  "time": "2017-02-25 19:35"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:35"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:40"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:41"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:42"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:43"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:44"
},
{
  "likes": 35,
  "dislikes": 4,
  "time": "2017-02-25 19:45"
},
{
  "likes": 1357,
  "dislikes": 1466,
  "time": "2017-02-25 19:49"
},
{
  "likes": 1357,
  "dislikes": 1466,
  "time": "2017-02-25 19:50"
}]
});
