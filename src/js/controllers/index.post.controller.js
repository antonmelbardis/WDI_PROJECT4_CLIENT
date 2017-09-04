angular
  .module('WDI_Project_4')
  .controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post){
  const vm = this;
  vm.countries = Post.query();
}
