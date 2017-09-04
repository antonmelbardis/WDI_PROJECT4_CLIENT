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
      console.log(data);
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
  // vm.attendSeminar = function attendSeminar() {
  //   User.get({id: CurrentUserService.currentUser.id})
  //   .$promise
  //   .then(data => {
  //     vm.newUser = data;
  //     vm.seminar.users.push(data);
  //     console.log(vm.seminar.users);
  //     Seminar
  //     .update({id: $stateParams.id }, {seminar: vm.seminar})
  //     .$promise
  //     .then(data2 => {
  //       console.log(data2);
  //     });
  //   });
  // };


}



// event = Event.find_by_id(params[:event_id])
// user = User.find_by_id(params[:user_id])
// attendance= event.attendances.create(user_id=>user.id)
