angular
  .module('WDI_Project_4')
  .controller('CountriesIndexCtrl', CountriesIndexCtrl);

CountriesIndexCtrl.$inject = ['Country'];
function CountriesIndexCtrl(Country){
  const vm = this;
  vm.countries = Country.query();
}
