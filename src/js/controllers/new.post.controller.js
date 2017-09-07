angular
.module('WDI_Project_4')
.controller('PostsNewCtrl', PostsNewCtrl);

PostsNewCtrl.$inject = ['Post', '$state', 'CurrentUserService'];
function PostsNewCtrl(Post, $state, CurrentUserService) {
  const vm = this;

  vm.addPost = addPost;
  vm.post = {};

  function addPost() {
    vm.post.user_id = CurrentUserService.currentUser.id;
    // vm.post.user_id = CurrentUserService.currentUser.id;
    Post
    .save({ post: vm.post })
    .$promise
    .then(() => $state.go('postsIndex'));
    console.log(vm.post);
  }
}
