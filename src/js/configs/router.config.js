angular
  .module('WDI_Project_4')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('seminarsIndex', {
    url: '/seminars',
    templateUrl: '/js/views/seminar-index.html',
    controller: 'SeminarsIndexCtrl',
    controllerAs: 'seminarsIndex'
  })
  .state('postsIndex', {
    url: '/posts',
    templateUrl: '/js/views/post-index.html',
    controller: 'PostsIndexCtrl',
    controllerAs: 'postsIndex'
  })
  .state('postsNew', {
    url: '/posts/new',
    templateUrl: '/js/views/post-new.html',
    controller: 'PostsNewCtrl',
    controllerAs: 'vm'
  })
  .state('postsShow', {
    url: '/posts/:id',
    templateUrl: '/js/views/post-show.html',
    controller: 'PostsShowCtrl',
    controllerAs: 'PostsShow'
  })
  .state('seminarsNew', {
    url: '/seminars/new',
    templateUrl: '/js/views/seminar-new.html',
    controller: 'SeminarsNewCtrl',
    controllerAs: 'vm'
  })
  .state('seminarsShow', {
    url: '/seminars/:id',
    templateUrl: '/js/views/seminar-show.html',
    controller: 'SeminarsShowCtrl',
    controllerAs: 'SeminarsShow'
  })
  .state('countriesIndex', {
    url: '/countries',
    templateUrl: '/js/views/country-index.html',
    controller: 'CountriesIndexCtrl',
    controllerAs: 'countriesIndex'
  });

  $urlRouterProvider.otherwise('/');
}
