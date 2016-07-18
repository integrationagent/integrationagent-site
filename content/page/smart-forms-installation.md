---
title: Smart Forms for HubSpot
author: intagent
type: page
date: 2015-11-06
url: smart-forms-installation

---

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script type="text/javascript" src="/js/generator.js"></script>
<link rel="stylesheet" type="text/css" href="/css/generator.css" media="screen" />

To install Smart Forms, add a custom HTML module to a page or template and copy the generated code:

<div ng-app="formGenerator" ng-controller="formGeneratorCtrl">
	<form name="generator">
		<div ng-form name="portal">
			<div>Portal Id *</div>
			<input name="portalInput"
			ng-model="PortalId"
			class="Input"
			spellcheck="false"
			required placeholder="Your HubSpot Portal Id">
			<span ng-show="portal.portalInput.$touched && portal.portalInput.$invalid">Please enter the value</span>
		</div>
		<div ng-form name="formId">
			<div>Form Id *</div>
			<input name="formIdInput"
			ng-model="FormId"
			class="Input"
			spellcheck="false"
			required placeholder="Id of the form to show">
			<span ng-show="formId.formIdInput.$touched && formId.formIdInput.$invalid">Please enter the value</span>
		</div>
		<div ng-form name="title">
			<div>Form Title *</div>
			<input name="titleInput"
			ng-model="Title"
			class="Input"
			spellcheck="false"
			required placeholder="Form Title">
			<span ng-show="title.titleInput.$touched && title.titleInput.$invalid">Please enter the value</span>
		</div>
		<div ng-form name="triggerTime">
			<div>Trigger Time</div>
			<input ng-model="TriggerTime"
			class="Input"
			spellcheck="false" placeholder="Time in seconds to appear">
		</div>
		<div ng-form name="customErrorMessage">
			<div>Custom error message</div>
			<input ng-model="CustomErrorMessage"
			class="Input"
			spellcheck="false" placeholder="Custom Error Message">
		</div>
		<div ng-form name="disableOnMobile">
			<input ng-model="DisableOnMobile"
				type="checkbox" />
			<label>Disable on mobile</label>
		</div>
		<div><button type="submit"
				class="Button"
				ng-disabled="generator.$invalid"
				ng-click="showSnippet(); showed=true">Generate Code</button>
		</div>
	</form>
	<div>
		<textarea ng-model="snippet" ng-show="showed"
			spellcheck="false" class="generated_code"
			readonly></textarea>
	</div>
</div>

<p></p>
<p></p>

#### Copy Form Id to the generator
<img src="/img/form-installation/form_id.png" />

#### Add a "Custom HTML" module to a page or template and copy the generated code
<img src="/img/form-installation/html_module.png" />


<p>
Also, you can add the form as a custom module to HubSpot:<br/>
<a href="/smart-forms-installation-as-module">Advanced Intructions</a>

</p>


