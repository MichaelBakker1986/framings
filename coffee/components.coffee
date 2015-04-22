components =
  scorecard:
    component: 'Scorecard'
    group: 'Finan'
    popover: 
      label: 
        label: 'Label:'
        input: '<input type="text" value="label" ng-model="label" />'
      description:
        label: 'Description:'
        input: '<textarea ng-model="description">{{description}}</textarea>'
      placeholder:
        label: 'Placeholder:'
        input: '<input type="text" value="{{placeholder}}" ng-model="placeholder" />'     
    label: 'Scorecard'
    description: 'Scorecard model'
    placeholder: ''
    html: '<div class="scorecard"><h3>{{label}}</h3><div class="left"><a class="btn btn-primary clickAble" ng-click="goLevelUp()">Druk hier!</a></div><div class="right"></div></div>'
