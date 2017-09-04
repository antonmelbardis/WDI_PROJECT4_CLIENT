angular
.module('WDI_Project_4')
.factory('Seminar', seminarFactory);

seminarFactory.$inject = ['API', '$resource'];
function seminarFactory(API, $resource){
  return $resource(`${API}/seminars/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
