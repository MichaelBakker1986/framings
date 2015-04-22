###
  Function
  
  Description
  
###
app.controller 'BreadcrumbController', ['$scope', 'FormService', ($scope, $form) ->

  $scope.form = $form;
    
  $scope.breadcrumb = []  
    
  $scope.$watch 'form.path', (_new, _old) ->
    console.log 'It has been changed'
    $scope.breadcrumb = _new
    return

  $scope.setPath = ->
    $scope.form.setPath($scope._path)
    $scope.breadcrumb = $scope.form.path
    return

  return
]