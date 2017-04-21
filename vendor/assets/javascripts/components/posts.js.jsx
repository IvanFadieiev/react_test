var Posts = React.createClass({

    getInitialState: function() {
        return (
            this.state = {
                checked_post: [],
                posts: [],
                show_link: false,
            }
        );
    },

    componentWillMount: function() {
        const self = this;
        $.get('/posts.json', function( data ) {
            self.setState({posts: data.posts});
            console.log(data.posts);
        });
    },

    handleCheck: function(e){
        const id = e.target.id;
        const p = [];

        this.state.posts.map(function(post){
            if (post.id == parseInt(id)){
                p.push(post)
            }
        });

        this.setState({checked_post: p[0]});
    },

    handleSubmit: function(post){
        const newState = this.state.posts.concat(post);
        this.setState({ posts: newState });
        console.log('asdasd' + post)
    },

    newPostButton: function(state) {

        const showLinkBool = state.show_link;

        if (showLinkBool) {
            return(
                <div>
                    <NewPost handleSubmit={this.handleSubmit} hide={() => this.changeShowLink(false)}/>
                </div>
            );
        }
        return(
            <div>
                <button onClick={() => this.changeShowLink(true)}>New Post</button><br/>
            </div>
        );
    },

    changeShowLink: function(bool){
        this.setState({ show_link: bool });
    },

    hide_bar: function(){
        this.setState({ checked_post: [] });
    },

    render: function() {

        const c_post = this.state.checked_post;

        return (

            <div className="posts_list">
                {
                    this.newPostButton(this.state)
                }<br/>
                {
                    this.state.posts.map(
                        function(post,index){
                            return (
                                <div key={index} id={post.id}>
                                    <Post
                                        show_title="true"
                                        post={post}
                                        state={this.state}
                                        index={index}
                                        handler={this.handleCheck}
                                        show="true"
                                    />
                                </div>
                            )
                        }, this
                    )
                }
                <div className="post">
                    <Post
                        post={this.state.checked_post}
                        state={this.state}
                        index="-1"
                        handler={this.handleCheck}
                    />
                    {this.state.checked_post.length == 0 ? '' : <button onClick={this.hide_bar}>Hide</button>}
                </div>
            </div>

        );
    }
});
