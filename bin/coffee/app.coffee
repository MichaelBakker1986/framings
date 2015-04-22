app = angular.module('app', [
    'builder'
    'builder.components'
    'validator.rules'
    ])
    
app.filter 'ucfirst', ->
    (input, scope) ->
    input.substring(0, 1).toUpperCase() + input.substring(1)