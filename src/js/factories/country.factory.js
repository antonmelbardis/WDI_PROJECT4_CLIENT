angular
.module('WDI_Project_4')
.factory('Country', countryFactory);

countryFactory.$inject = ['API', '$resource'];
function countryFactory(API, $resource){
  return $resource(`${API}/countries/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
