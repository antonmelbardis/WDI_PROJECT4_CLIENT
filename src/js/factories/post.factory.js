angular
.module('WDI_Project_4')
.factory('Post', postFactory);

postFactory.$inject = ['API', '$resource'];
function postFactory(API, $resource){
  return $resource(`${API}/posts/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
