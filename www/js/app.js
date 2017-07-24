angular.module('starter', ['ionic', 'starter.controllers', 'starter.module', 'starter.settings'])


.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})

.run(function($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function() {
        if (ionic.Platform.device() === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            window.cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        console.log("tyep of: " + typeof window.ga);

        if (typeof window.ga !== "undefined") {
            window.ga.startTrackerWithId('UA-84899403-18');
            window.ga.trackView('Home');
        }

        $rootScope.$on('$stateChangeSuccess', function() {
            if (typeof window.ga !== "undefined") {
                if ($state.current.name == "app.quicklinkA") {
                    window.ga.trackView('QUICKLINK A TITLE');
                }
                else if ($state.current.name == "app.quicklinkB") {
                    window.ga.trackView('QUICKLINK B TITLE');
                }
                else if ($state.current.name == "app.quicklinkC") {
                    window.ga.trackView('QUICKLINK C TITLE');
                }
                else {
                    window.ga.trackView($state.current.name);
                }
            }
        });
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })

    .state('app.quicklinkA', {
        url: '/quicklinkA',
        views: {
            'menuContent': {
                templateUrl: 'templates/quicklinkA.html'
            }
        }
    })

    .state('app.members', {
        url: '/members',
        views: {
            'menuContent': {
                templateUrl: 'templates/members.html'
            }
        }

    })

    .state('app.quicklinkB', {
        url: '/quicklinkB',
        views: {
            'menuContent': {
                templateUrl: 'templates/quicklinkB.html'
            }
        }
    })

    .state('app.quicklinkC', {
        url: '/quicklinkC',
        views: {
            'menuContent': {
                templateUrl: 'templates/quicklinkC.html'
            }
        }
    })

    .state('app.hotdeals', {
        url: '/hotdeals',
        views: {
            'menuContent': {
                templateUrl: 'templates/hotdeals.html'
            }
        }
    })

    .state('app.jobs', {
        url: '/jobs',
        views: {
            'menuContent': {
                templateUrl: 'templates/jobs.html'
            }
        }
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })

    .state('app.news', {
        url: '/news',
        views: {
            'menuContent': {
                templateUrl: 'templates/news.html'
            }
        }
    })

    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/events.html'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/home');
});
