var app = angular.module("formGenerator", []);
app.controller("formGeneratorCtrl", function($scope) {
	$scope.FormId = '';
	$scope.PortalId = '';
	$scope.Title = '';
	$scope.TriggerTime = '30';
	$scope.CustomErrorMessage = '';
	$scope.DisableOnMobile = false;

	$scope.showSnippet = function () {
		$scope.snippet = 
	'<script>\n' +
	'    $().ready( function() {\n' +
		'        HSPopup.init({\n' +
			"            formId: '" + $scope.FormId + "',\n" +
			"            portalId: '" + $scope.PortalId + "',\n" +
			"            title: '" + $scope.Title + "',\n" +
			"            triggerTime: " + ($scope.TriggerTime === '' ? "'',\n" : "'" + (parseInt($scope.TriggerTime.toString().replace(/\D/g,'')) || '') + "',\n") +
			"            customErrorMessage: '" + $scope.CustomErrorMessage + "',\n" +
			"            disableOnMobile: " + $scope.DisableOnMobile.toString() + "\n" +
			"        });\n" +
			"\n" +
			"        HSPopup.showPopup();\n" +
			'\n' +
		"        $('#button').on('click', function () {\n" +
		'                HSPopup.showPopup();\n' +
		'            });\n' +
	'        });\n' +
	'</script>';
	};
});
