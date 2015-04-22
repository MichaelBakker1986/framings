###
  FormObjectService
  
  Service for adding components.
###
app.factory 'FormObjectService', ['$rootScope', '$builder', ($rootScope, $builder) ->
  service = {}
  
  service.register = (name, object) ->
    # registers a new formobject.
    
    # https://github.com/kelp404/angular-form-builder $builder.registerComponent 
    
    # notes:
    # - default options per property
    
    return
        
  service
]