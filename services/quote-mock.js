var $cxp = {};

$cxp.guid = function () {
	return (new Date().getTime()).toString(16) + '' + (~~(Math.random() * 10000)).toString(16);
};

var product = {
	"id": "9000",
	"name": "Vehicle insurance",
	"premium": 142.32,
	"paymentFrequency": 12,
	"deductible": true,
	"mandatory": true,
	"selected": true,
	"duration": "TBD",
	"startDate": "10/10/2015",
	"endDate": "10/10/2017",
	"discount": {
		"id": $cxp.guid(),
		"percentage": 5
	},
	"coverages":  [
		{
			"id": "1000",
			"name": "Third Party liability",
			"premium": 142.32,
			"paymentFrequency": "Anually",
			"insuredSum": 2222222,
			"mandatory": true,
			"selected": false,
			"disabled": false,
			"deductible": true,
			"insuredPercentage": 33,
			"subCoverageDefinition": [
				{
					"id": "1001",
					"name": "Health damage",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "1002",
					"name": "Property damage",
					"selected": false,
					"mandatory": true
				}
			]
		},
		{
			"id": "2000",
			"name": "Mini Casco",
			"premium": 142.32,
			"paymentFrequency": "Anually",
			"insuredSum": 345345,
			"mandatory": false,
			"selected": false,
			"disabled": false,
			"deductible": true,
			"insuredPercentage": 33,
			"subCoverageDefinition": [
				{
					"id": "2001",
					"name": "Theft",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "2002",
					"name": "Fire",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "2003",
					"name": "Fall of object",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "2004",
					"name": "Hail",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "2005",
					"name": "Storm",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "2006",
					"name": "Vehicle upholstery",
					"selected": false,
					"mandatory": true
				}
			]
		},
		{
			"id": "3000",
			"name": "Flexi casco",
			"premium": 142.32,
			"paymentFrequency": "Anually",
			"insuredSum": 6353434,
			"mandatory": false,
			"selected": false,
			"disabled": false,
			"deductible": true,
			"insuredPercentage": 33,
			"subCoverageDefinition": [
				{
					"id": "3001",
					"name": "Theft",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3002",
					"name": "Fire",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3003",
					"name": "Fall of object",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3004",
					"name": "Hail",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3005",
					"name": "Storm",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3006",
					"name": "Collison with immovables",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3007",
					"name": "Collision with moveables",
					"selected": false,
					"mandatory": false
				},
				{
					"id": "3008",
					"name": "Car rental loss",
					"selected": false,
					"mandatory": false
				}
			]
		},
		{
			"id": "4000",
			"name": "Auto casco",
			"premium": 142.32,
			"paymentFrequency": "Anually",
			"insuredSum": 2346454,
			"mandatory": false,
			"selected": false,
			"disabled": false,
			"deductible": true,
			"insuredPercentage": 33,
			"subCoverageDefinition": [
				{
					"id": "4001",
					"name": "Theft",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4002",
					"name": "Fire",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4003",
					"name": "Fall of object",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4004",
					"name": "Acts of nature",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4005",
					"name": "Collision with animals",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4006",
					"name": "Vehicle damage",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4007",
					"name": "Events and demonstration",
					"selected": false,
					"mandatory": true
				},
				{
					"id": "4008",
					"name": "Roadside assistance",
					"selected": false,
					"mandatory": true
				}
			]
		}
	],
	"vehicle": {
        "make": "String",
        "model": "String",
        "modelType": "String",
        "licensePlate": "String",
        "vehicleType": "String",
        "constructionYear": "String",
        "dangerousSubstance": "String",
        "loadCapacity": "String",
        "performance": "Number",
        "performanceUnit": "String",
        "usage": "String",
        "cubicCapacity": "String",
        "registrationArea": "String",
        "id": "String"
    }
};

module.exports = product;