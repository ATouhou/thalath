// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('thalathah', ['ionic','ngIOS9UIWebViewPatch','angular-svg-round-progress'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })
  .state('play', {
    url: '/play',
    templateUrl: 'templates/play.html',
    controller: 'PlayController'
  });

  // default route
  $urlRouterProvider.otherwise('/');
})

.controller('HomeController', function($scope) {
  $scope.dictionaryLength = words_dictionary.length
})

.controller('PlayController', function($scope, $interval, $timeout, $ionicPopup) {
  var dictionaryLength = words_dictionary.length;
  var attempt, solutionSet, timer
  var timeBoost = 2500, timeStep = 200
  $scope.maxTime = 10000

  var stringToArray = function(string) {
    return [string[0], string[1], string[2]]
  }

  var newWord = function() {
    solutionSet = words_dictionary[Math.round(Math.random() * (dictionaryLength - 1))];
    var p = ""
    switch(solutionSet.length) {
      case 1:
        $scope.possibilities = "احتمال واحد";
        break;
      case 2:
        $scope.possibilities = "احتمالان";
        break;
      // TODO ADD MORE CASES NUMBER OF LETTERS INCREASE
      default:
        $scope.possibilities = solutionSet.length + " احتمالات";
    }
    resetWord()
  }

  var resetWord = function() {
    $scope.letters = _.shuffle(stringToArray(solutionSet[0]));
    $scope.lettersSelected = [false, false, false];
    $scope.correctAttempt = undefined;
    attempt = []
  }

  var checkAttempt = function() {
    if (_.contains(solutionSet, $scope.formatAttempt())) {
      $scope.currentTime = Math.min($scope.currentTime + timeBoost, $scope.maxTime)
      $scope.score++;
      $scope.correctAttempt = true;
      $timeout(function(){
        newWord();
      }, 1000)
    }
    else {
      // flash attempt
      $scope.correctAttempt = false;
      $timeout(function(){
        resetWord();
      }, 1000)
    }
  }

  var init = function() {
    $scope.score = 0;
    $scope.currentTime = $scope.maxTime
    newWord();
    timer = $interval(function() {
      if (($scope.currentTime-=timeStep) <= 0) {
        $interval.cancel(timer);
        var msg;
        switch (solutionSet.length) {
          case 1:
            msg = "الحل: "
            break;
          case 2:
            msg = "أحد الحلين: "
            break;
          default:
            msg = "أحد الحلول: ";
        }
        $ionicPopup.alert({
          title: 'انتهى الوقت',
          template: msg + solutionSet[0]
        }).then(init);
      }
    }, timeStep)
  }

  $scope.$on('$ionicView.enter', function() {
    init();
  })

  $scope.$on('$ionicView.leave', function() {
    $interval.cancel(timer);
    timer = undefined;
  })

  $scope.letterClicked = function(index) {
    $scope.lettersSelected[index] = !$scope.lettersSelected[index]
    if ($scope.lettersSelected[index]) {
      attempt.push(index)
      if (attempt.length == 3) checkAttempt()
    }
    else
      attempt = _.without(attempt, index)
  }

  $scope.formatAttempt = function() {
    return (_.reduce(attempt, function(memo, index){
      return memo + $scope.letters[index];
    }, "") + "___").substring(0, 3);

  }

  $scope.timerColor = function() {
    var ratio = Math.round($scope.currentTime * 100 / $scope.maxTime)
    if (ratio >= 50)
      return "green"
    else if (ratio >= 25)
      return "yellow"
    else return "red"
  }

});

