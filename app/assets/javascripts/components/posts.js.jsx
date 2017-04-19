var Posts = React.createClass({

    getInitialState() {
      return { checked_post: [] }
    },

    componentDidMount: function() {
        console.log('this mounted POSTS')
    },

    render: function() {
        var c_post = this.state.checked_post
    return (
      <div className="posts_list">
          {
              this.props.posts.map(function(post,index){
                  return (
                      <div key={index} id={post.id}>
                          <div className="post_title">
                              {post.title}
                          </div><br></br>
                          <div className="post_body">
                              {post.body}
                          </div><br></br>
                          {Buttons(post, this)}
                      </div>
                    )
                  }, this
              )
          }
          <div className="post">
              <Post post={this.state.checked_post} state={this.state} index="9191919" />
          </div>
      </div>
    );
  },

    handleCheck: function(e){
        var id = e.target.id;
        var p = []
        this.props.posts.map(function(post){
            if (post.id == parseInt(id)){
                p.push(post)
            }
        })
        this.setState({checked_post: p[0]});
    }
});

function showPost(e){
    e.preventDefault();
    alert(e.target)
}

