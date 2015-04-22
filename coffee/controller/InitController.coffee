###
  InitController
  //bliep
  Initializer for the page.
###
app.controller 'InitController', ['$scope', '$builder', 'UserService', 'FormService', 'ComponentService', ($scope, $builder, $user, $form, $component) ->

  $scope.path = 'ROOT'
  $scope.greeting = '<b>Hello</b>';
  
  for component of components
    $component.register("scorecard", components[component]);

  $scope.form = $builder.forms['default'];
  # Fixes: https://github.com/kelp404/angular-form-builder/blob/master/example/demo.js
  
  $scope.greeting = 'Hey Finan'

  $scope.click = ->
    console.log $form.get($scope.path)
    return
    
        
  $scope.goLevelUp = ->
      alert "Gedrukt"
    return

  return
]