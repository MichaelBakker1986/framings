###
  FormService
  
  Service for the overall page.
###
app.factory 'FormService', ($rootScope) ->
  service = {}
  
  # Form-data
  service.form =
    ROOT:
      data01:
        data02:
          {}
  
  service.path = []
  
  ###
    Get

    Gets the form-data by a given string (split by dots).
    Example: service.get('ROOT.data01.data02');
  ###
  service.get = (path) ->
    data = this.form
    for key in path.split '.'
      data = data[key]
    data

  service.set = (path, obj) ->
    
    undefined

  service.setPath = (string) ->
    data = []
    for key in string.split '.'
      data.push
        key: key,
        name: key
      
    this.path = data
    data
    
  service.goTo = (path) ->
    
    
    
    return

  service
