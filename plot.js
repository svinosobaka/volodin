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
  "likes": 16,
  "dislikes": 0,
  "time": "2017-03-02 17:08"
},
{
  "likes": 16,
  "dislikes": 1,
  "time": "2017-03-02 17:09"
},
{
  "likes": 17,
  "dislikes": 1,
  "time": "2017-03-02 17:10"
},
{
  "likes": 18,
  "dislikes": 1,
  "time": "2017-03-02 17:11"
},
{
  "likes": 18,
  "dislikes": 1,
  "time": "2017-03-02 17:12"
},
{
  "likes": 18,
  "dislikes": 1,
  "time": "2017-03-02 17:13"
},
{
  "likes": 18,
  "dislikes": 1,
  "time": "2017-03-02 17:14"
},
{
  "likes": 19,
  "dislikes": 1,
  "time": "2017-03-02 17:15"
},
{
  "likes": 20,
  "dislikes": 1,
  "time": "2017-03-02 17:16"
},
{
  "likes": 21,
  "dislikes": 1,
  "time": "2017-03-02 17:17"
},
{
  "likes": 21,
  "dislikes": 1,
  "time": "2017-03-02 17:18"
},
{
  "likes": 21,
  "dislikes": 1,
  "time": "2017-03-02 17:19"
},
{
  "likes": 21,
  "dislikes": 1,
  "time": "2017-03-02 17:20"
},
{
  "likes": 21,
  "dislikes": 1,
  "time": "2017-03-02 17:21"
}]
});
