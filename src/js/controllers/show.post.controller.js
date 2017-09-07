angular
.module('WDI_Project_4')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = ['Post', 'Comment', '$stateParams'];
function PostsShowCtrl(Post, Comment, $stateParams) {
  const vm = this;
  // vm.addComment = addComment;
  vm.post = Post.get({ id: $stateParams.id });
}
