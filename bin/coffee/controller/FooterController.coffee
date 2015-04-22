###
  Function
  
  Description
  
###
app.controller 'FooterController', ['$scope', 'UserService', ($scope, $user) ->

  $scope.user = $user

  $scope.$watch 'user.username', (_new, _old) ->
  console.log 'It has been changed yeah!'
]