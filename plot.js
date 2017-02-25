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
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:28"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:29"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:31"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:32"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:33"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:34"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:35"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:36"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:37"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:38"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:39"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:40"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:40"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:45"
},
{
  "likes": 45,
  "dislikes": 39,
  "time": "2017-02-25 20:45"
}]
});
