angular
.module('WDI_Project_4')
.controller('SeminarsNewCtrl', SeminarsNewCtrl);

SeminarsNewCtrl.$inject = ['Seminar', 'Country', 'Teaching_Module', '$state', 'CurrentUserService'];

function SeminarsNewCtrl(Seminar, Country, Teaching_Module, $state, CurrentUserService) {
  const vm = this;

  vm.addSeminar = addSeminar;

  vm.countries = Country.query();
  vm.teaching_modules = Teaching_Module.query();

  vm.seminar = {};

  function addSeminar() {
    vm.seminar.created_by = CurrentUserService.currentUser.id;
    vm.seminar.user_ids = [CurrentUserService.currentUser.id];
    console.log(vm.seminar.user_ids);
    Seminar
    .save({ seminar: vm.seminar})
    .$promise
    .then(() => $state.go('seminarsIndex'));
  }

}
