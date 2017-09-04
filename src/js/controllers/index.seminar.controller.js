angular
  .module('WDI_Project_4')
  .controller('SeminarsIndexCtrl', SeminarsIndexCtrl);

SeminarsIndexCtrl.$inject = ['Seminar'];
function SeminarsIndexCtrl(Seminar){
  const vm = this;
  vm.seminars = Seminar.query();
}
