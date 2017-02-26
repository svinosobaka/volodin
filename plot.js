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
  "likes": 31,
  "dislikes": 16,
  "time": "2017-02-26 03:23"
},
{
  "likes": 32,
  "dislikes": 16,
  "time": "2017-02-26 03:24"
}]
});
