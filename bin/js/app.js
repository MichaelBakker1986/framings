(function()
{
	var app, components;
	app = angular.module('app', [ 'builder', 'builder.components', 'validator.rules' ]);
	app.filter('ucfirst', function()
	{
		(function(input, scope)
		{
		});
		return input.substring(0, 1).toUpperCase() + input.substring(1);
	});
	components = {
		scorecard : {
			component : 'Scorecard',
			group : 'Finan',
			popover : {
				label : {
					label : 'Label:',
					input : '<input type="text" value="label" ng-model="label" />'
				},
				description : {
					label : 'Description:',
					input : '<textarea ng-model="description">{{description}}</textarea>'
				},
				placeholder : {
					label : 'Placeholder:',
					input : '<input type="text" value="{{placeholder}}" ng-model="placeholder" />'
				}
			},
			label : 'Scorecard',
			description : 'Scorecard model',
			placeholder : '',
			html : '<div class="scorecard"><h3>{{label}}</h3><div class="left"><a class="btn btn-primary clickAble" ng-click="goLevelUp()">Druk hier!</a></div><div class="right"></div></div>'
		}
	};
	/*
	 * Function Description
	 */
	app.controller('BreadcrumbController', [ '$scope', 'FormService', function($scope, $form)
	{
		$scope.form = $form;
		$scope.breadcrumb = [];
		$scope.$watch('form.path', function(_new, _old)
		{
			console.log('It has been changed');
			$scope.breadcrumb = _new;
		});
		$scope.setPath = function()
		{
			$scope.form.setPath($scope._path);
			$scope.breadcrumb = $scope.form.path;
		};
	} ]);
	/*
	 * Function Description
	 */
	app.controller('FooterController', [ '$scope', 'UserService', function($scope, $user)
	{
		$scope.user = $user;
		$scope.$watch('user.username', function(_new, _old)
		{
		});
		return console.log('It has been changed yeah!');
	} ]);
	app.controller('FormController', [ '$scope', 'UserService', function($scope, $user)
	{
		return $scope.user = $user;
	} ]);
	/*
	 * InitController //bliep Initializer for the page.
	 */
	app.controller('InitController', [ '$scope', '$builder', 'UserService', 'FormService', 'ComponentService', function($scope, $builder, $user, $form, $component)
	{
		var component;
		$scope.path = 'ROOT';
		$scope.greeting = '<b>Hello</b>';
		for (component in components)
		{
			$component.register("scorecard", components[component]);
		}
		$scope.form = $builder.forms['default'];
		$scope.greeting = 'Hey Finan';
		$scope.click = function()
		{
			console.log($form.get($scope.path));
		};
		$scope.goLevelUp = function()
		{
			return alert("Gedrukt");
		};
		return;
	} ]);
	/*
	 * ComponentService Service for adding components.
	 */
	app.factory('ComponentService', [ '$rootScope', '$builder', function($rootScope, $builder)
	{
		var service;
		service = {};
		service.register = function(name, object)
		{
			$builder.registerComponent(object.component, {
				group : object.group,
				label : object.label,
				description : object.description,
				placeholder : object.placeholder,
				required : false,
				validationOptions : [ {
					label : 'none',
					rule : '/.*/'
				}, {
					label : 'number',
					rule : '[number]'
				}, {
					label : 'email',
					rule : '[email]'
				}, {
					label : 'url',
					rule : '[url]'
				} ],
				template : object.html,
				popoverTemplate : service.popoverFactory(object.popover)
			});
		};
		service.popoverFactory = function(properties)
		{
			var html;
			html = '<form> <div class="form-group"> <label class="control-label">' + properties.label.label + ' </label>' + properties.label.input + '</div> <hr/> <div class="form-group"> <input type="submit" ng-click="popover.save($event)" class="btn btn-primary" value="Save"/> <input type="button" ng-click="popover.cancel($event)" class="btn btn-default" value="Cancel"/> <input type="button" ng-click="popover.remove($event)" class="btn btn-danger" value="Delete"/> </div> </form>';
			return html;
		};
		service.template = function(name)
		{
		};
		return service;
	} ]);
	/*
	 * FormObjectService Service for adding components.
	 */
	app.factory('FormObjectService', [ '$rootScope', '$builder', function($rootScope, $builder)
	{
		var service;
		service = {};
		service.register = function(name, object)
		{
		};
		return service;
	} ]);
	/*
	 * FormService Service for the overall page.
	 */
	app.factory('FormService', function($rootScope)
	{
		var service;
		service = {};
		service.form = {
			ROOT : {
				data01 : {
					data02 : {}
				}
			}
		};
		service.path = [];
		/*
		 * Get Gets the form-data by a given string (split by dots). Example: service.get('ROOT.data01.data02');
		 */
		service.get = function(path)
		{
			var data, i, key, len, ref;
			data = this.form;
			ref = path.split('.');
			for (i = 0, len = ref.length; i < len; i++)
			{
				key = ref[i];
				data = data[key];
			}
			return data;
		};
		service.set = function(path, obj)
		{
			return void 0;
		};
		service.setPath = function(string)
		{
			var data, i, key, len, ref;
			data = [];
			ref = string.split('.');
			for (i = 0, len = ref.length; i < len; i++)
			{
				key = ref[i];
				data.push({
					key : key,
					name : key
				});
			}
			this.path = data;
			return data;
		};
		service.goTo = function(path)
		{
		};
		return service;
	});
	app.factory('UserService', function($rootScope)
	{
		var service;
		service = {};
		service.username = null;
		service.email = null;
		return service;
	});
}).call(this);
