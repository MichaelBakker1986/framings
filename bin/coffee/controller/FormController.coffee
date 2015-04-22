app.controller 'FormController', ['$scope', 'UserService', ($scope, $user) ->
  $scope.user = $user
]