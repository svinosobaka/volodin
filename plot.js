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
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 19:56"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 19:57"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 19:58"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 19:59"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 20:00"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 20:02"
},
{
  "likes": 131,
  "dislikes": 96,
  "time": "2017-02-25 20:03"
},
{
  "likes": 132,
  "dislikes": 100,
  "time": "2017-02-25 20:15"
},
{
  "likes": 132,
  "dislikes": 100,
  "time": "2017-02-25 20:16"
},
{
  "likes": 132,
  "dislikes": 100,
  "time": "2017-02-25 20:17"
},
{
  "likes": 132,
  "dislikes": 100,
  "time": "2017-02-25 20:18"
},
{
  "likes": 132,
  "dislikes": 100,
  "time": "2017-02-25 20:19"
}]
});
