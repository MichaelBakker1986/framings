###
  ComponentService
  
  Service for adding components.
###
app.factory 'ComponentService', ['$rootScope', '$builder', ($rootScope, $builder) ->
  service = {}
  
  service.register = (name, object) ->
    # registers a new component.
    $builder.registerComponent(object.component, {
      group: object.group,
      label: object.label,
      description: object.description,
      placeholder: object.placeholder,
      required: false,
      validationOptions: [
        {
          label: 'none',
          rule: '/.*/'
        }, {
          label: 'number',
          rule: '[number]'
        }, {
          label: 'email',
          rule: '[email]'
        }, {
          label: 'url',
          rule: '[url]'
        }
      ],
      template: object.html,
      popoverTemplate: service.popoverFactory(object.popover);
      });
           
      
    # https://github.com/kelp404/angular-form-builder $builder.registerComponent 
    
    # notes:
    # - default options per property
    
    return
    
  service.popoverFactory = (properties) ->
    # generates a popover template

    html = 
        '<form>
        <div class="form-group">
        <label class="control-label">'+ properties.label.label+ ' </label> 
        ' + properties.label.input + '
        </div>
        <hr/>
        <div class="form-group">
        <input type="submit" ng-click="popover.save($event)" class="btn btn-primary" value="Save"/>
        <input type="button" ng-click="popover.cancel($event)" class="btn btn-default" value="Cancel"/>
        <input type="button" ng-click="popover.remove($event)" class="btn btn-danger" value="Delete"/>
        </div>
        </form>'

    return html
    
  # docs; vorig projectje van vorige week
        
  service.template = (name) ->
    # sets a template-url for the chosen template
    
    # example: $component.template('custom')
    # output: 'templates/components/customComponent.html'
    
  service
  ]