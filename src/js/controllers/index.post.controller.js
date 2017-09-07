angular
.module('WDI_Project_4')
.controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['Post', 'Comment', 'CurrentUserService', '$stateParams', '$state'];
function PostsIndexCtrl(Post, Comment, CurrentUserService, $stateParams, $state){
  const vm = this;
  vm.posts = Post.query();

  vm.addComment = addComment;
  vm.deleteComment = deleteComment;

  function addComment(post) {
    vm.comment.user_id = CurrentUserService.currentUser.id;
    vm.comment.post_id = post.id;

    Comment
    .save( { comment: vm.comment })
    .$promise
    .then(comment => {
      post.comments.push(comment);
    });
  }

  function deleteComment(post, comment) {
    Comment
      .remove({ id: comment.id })
      .$promise
      .then(comment => {
        const index = post.comments.indexOf(comment);
        post.comments.splice(index, 1);
        console.log(post.comments);
      });
  }
}
