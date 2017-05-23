angular.module('navBar', []);

angular.module('navBar').directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: "Templates/nav.html" 
    }
});