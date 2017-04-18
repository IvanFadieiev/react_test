var Posts = React.createClass({

    getInitialState() {
      return { checked_post: [] }
    },

    componentDidMount: function() {
        console.log('this mounted POSTS')
    },

    render: function() {
        var render_post = [];
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
                          <div className="post_published">
                              <label>
                                  Published:
                                  <input
                                      name="published"
                                      type="checkbox"
                                      defaultChecked={post.published}
                                  />
                              </label>
                          </div><br></br>
                          <div className="button">
                              <input type="button" onClick={this.handleCheck} value="Click Me!" id={post.id} />
                              <a href="#" id={post.id} onClick={showPost}>{post.url}</a><br></br>
                          </div><br></br>
                      </div>
                    )
                  }, this
              )
          }
          <div className="post">
              <div key={c_post.id} id={c_post.id}>
                  <div className="post_title">
                      {c_post.title}
                  </div><br></br>
                  <div className="post_body">
                      {c_post.body}
                  </div><br></br>
                  {Buttons(c_post, this.state)}
              </div>
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

function Buttons(c_post,state) {
    if (state.checked_post.length == 0) {
        return "NOT SELECTED";
    }
    return (
        <div>
            <div className="post_published">
                <label>
                    Published:
                    <input
                        name="published"
                        type="checkbox"
                        defaultChecked={c_post.published}
                    />
                </label>
            </div><br></br>
            <div className="button">
                <input type="button" onClick={this.handleCheck} value="Click Me!" id={c_post.id} />
                <a href="#" id={c_post.id} onClick={showPost}>{c_post.url}</a><br></br>
            </div><br></br>
        </div>
    );
}