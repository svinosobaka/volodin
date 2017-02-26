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
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:08"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:10"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:11"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:12"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:13"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:14"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:15"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:16"
},
{
  "likes": 267,
  "dislikes": 236,
  "time": "2017-02-26 03:17"
},
{
  "likes": 270,
  "dislikes": 238,
  "time": "2017-02-26 03:18"
},
{
  "likes": 270,
  "dislikes": 238,
  "time": "2017-02-26 03:19"
},
{
  "likes": 270,
  "dislikes": 238,
  "time": "2017-02-26 03:20"
},
{
  "likes": 270,
  "dislikes": 238,
  "time": "2017-02-26 03:22"
}]
});
