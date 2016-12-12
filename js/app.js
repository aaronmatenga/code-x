(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;
    var colorList = ['red', 'blue', 'green', 'yellow'];
    var colorIndex = 0;
    var num1 = 2;
    var num2 = 3;

    $scope.showDetail = function() {
      var selectedItem = $data.items[colorIndex];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : 'Boss Cuts'});
    };

    $scope.toggleColor = function(direction) {
      direction = direction || 'right';
      if (direction == 'right') {
        colorIndex++;
        if (colorIndex == colorList.length) {
          colorIndex = 0;
        }
      } else {
        colorIndex--;
        if (colorIndex == -1) {
          colorIndex = colorList.length - 1;
        }
      }
      title_image.src = "images/codex-" + colorList[colorIndex] + ".png";
      go_image.src = "images/graphic-" + colorList[colorIndex] + ".png";
    }

    $scope.toggleNum1 = function(direction) {
      direction = direction || 'up';
      if (direction == 'up') {
        num1++;
        if (num1 == 10) {
          num1 = 0;
        }
      } else {
        num1--;
        if (num1 == -1) {
          num1 = 9;
        }
      }
      num1_select.textContent = num1;
    }

    $scope.toggleNum2 = function(direction) {
      direction = direction || 'up';
      if (direction == 'up') {
        num2++;
        if (num2 == 10) {
          num2 = 0;
        }
      } else {
        num2--;
        if (num2 == -1) {
          num2 = 9;
        }
      }
      num2_select.textContent = num2;
    }
  });

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              title: 'Boss Cuts',
              image: 'images/boss-cuts.jpg',
              logo: 'filepath/file.png',
              slogan: 'The Original Boss Style',
              desc: 'Get your hair cuts from the best in Hamilton.',
              phone: '07 855 6874',
              email: 'bosscutsnz@gmail.com',
              hours: 'Monday to Saturday\n9am - 5pm',
              address: '174 Clarkin Road\nFairfield, Hamilton',
              map: 'image path?',
              promotion: 'image path?'
          },
          {
              title: 'Company 2',
              image: 'images/boss-cuts.jpg',
              logo: 'filepath/file.png',
              slogan: 'The Original Boss Style',
              desc: 'Get your hair cuts from the best in Hamilton.',
              phone: '07 855 6874',
              email: 'bosscutsnz@gmail.com',
              hours: 'Monday to Saturday\n9am - 5pm',
              address: '174 Clarkin Road\nFairfield, Hamilton',
              map: 'image path?',
              promotion: 'image path?'
          },
          {
              title: 'Skratch Limited',
              image: 'images/skratch.png',
              logo: 'filepath/file.png',
              slogan: 'Mobile & Web App Development',
              desc: 'We develop mobile and web applications at an affordable price, without compromising quality.',
              phone: '07 843 8936',
              email: 'skratch.ltd@gmail.com\nmatenga.aaron@skratch.co.nz',
              hours: 'Friday\n9am - 5pm',
              address: '78 Kahikatea Drive\nMelville, Hamilton',
              map: 'image path?',
              promotion: 'image path?'
          },
          {
              title: 'Company 4',
              image: 'images/skratch.png',
              logo: 'filepath/file.png',
              slogan: 'Mobile & Web App Development',
              desc: 'We develop mobile and web applications at an affordable price, without compromising quality.',
              phone: '07 843 8936',
              email: 'skratch.ltd@gmail.com\nmatenga.aaron@skratch.co.nz',
              hours: 'Friday\n9am - 5pm',
              address: '78 Kahikatea Drive\nMelville, Hamilton',
              map: 'image path?',
              promotion: 'image path?'
          }
      ];

      return data;
  });
})();
