angular
.module('WDI_Project_4')
.factory('Teaching_Module', Teaching_ModuleFactory);

Teaching_ModuleFactory.$inject = ['API', '$resource'];
function Teaching_ModuleFactory(API, $resource){
  return $resource(`${API}/teaching_modules/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
