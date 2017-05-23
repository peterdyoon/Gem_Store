var app = angular.module('MyApp', ['avatar', 'storeProducts', 'ngRoute', 'navBar']);

app.controller("ReviewController", function ($scope) {
    $scope.newReview = {};
    $scope.addReview = function (product) {
        if (!product.reviews) {
            product.reviews = [];
        }
        product.reviews.push($scope.newReview);
        $scope.newReview = {};
    }
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "Templates/main.html"
    })
    .when("/page1", {
        templateUrl: "Templates/page1.html"
    })
    .when("/page2", {
        templateUrl: "Templates/page2.html",
//        controller: function () {}
    });
}]);

angular.module("MyApp").controller("myController", ['$scope', '$http', 'AvatarFactory', function ($scope,
    $http, AvatarFactory) {
    $scope.Avatar = AvatarFactory;
    $scope.gem = gem;
}]);

var gem = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Nobody knows what this is. ',
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-01.gif',
            thumb: 'gem-01.gif'
        }
},
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "It's the pentagon baby!",
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-02.gif',
            thumb: 'gem-02.gif'
        }
},
    {
        name: "Sick Gem",
        price: 50,
        description: "It's the sick gem baby!",
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-03.gif',
            thumb: 'gem-03.gif'
        }
},
    {
        name: "Fat Gem",
        price: 50000,
        description: "It's the sick gem baby!",
        canPurchase: false,
        soldOut: false,
        images: {
            full: 'gem-04.gif',
            thumb: 'gem-04.gif'
        }
},
    {
        name: "Cheese Gem",
        price: 3,
        description: "It's the sick gem baby!",
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-05.gif',
            thumb: 'gem-05.gif'
        }
},
    {
        name: "Batman Gem",
        price: 5000,
        description: "It's the sick gem baby!",
        canPurchase: true,
        soldOut: true,
        images: {
            full: 'gem-06.gif',
            thumb: 'gem-06.gif'
        }
},
    {
        name: "Ryan Gem",
        price: .01,
        description: "It's the Ryan gem baby!",
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-07.gif',
            thumb: 'gem-07.gif'
        }
},
    {
        name: "Sick Gem",
        price: 50,
        description: "It's the sick gem baby!",
        canPurchase: true,
        soldOut: false,
        images: {
            full: 'gem-08.gif',
            thumb: 'gem-08.gif'
        }
},
    {
        name: "PeterYoony Gem",
        price: 1000,
        description: "A rare Peter Yoon appeared!",
        canPurchase: true,
        soldOut: true,
        images: {
            full: 'gem-09.gif',
            thumb: 'gem-09.gif'
        }
}];
