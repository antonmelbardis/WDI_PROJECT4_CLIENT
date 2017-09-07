angular
.module('WDI_Project_4')
.controller('SeminarsShowCtrl', SeminarsShowCtrl);

SeminarsShowCtrl.$inject = ['Seminar', '$stateParams', '$rootScope', 'CurrentUserService', 'User'];
function SeminarsShowCtrl(Seminar, $stateParams, $rootScope, CurrentUserService, User) {
  const vm = this;

  vm.seminar = Seminar.get({ id: $stateParams.id });

  vm.attendSeminar = function attendSeminar() {
    User.get({id: CurrentUserService.currentUser.id})
    .$promise
    .then(data => {
      console.log('here is data', data);
      // console.log(vm.seminar.user_ids);
      // vm.newUser = data;
      vm.seminar.users.push(data);
      vm.seminar.user_ids.push(data.id);
      // vm.newSeminar = vm.seminar;
      Seminar
      .update({id: $stateParams.id }, {seminar: vm.seminar})
      .$promise
      .then(data2 => {
        console.log(data2);
      });
    });
  };
}
