class Posts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checked_post: [],
            posts: [],
            show_link: false,
        };
    }

    componentWillMount() {
        const self = this;
        $.get('/posts.json', function( data ) {
            self.setState({posts: data.posts});
            console.log(data.posts);
        });
    }

    handleCheck(e){
        const id = e.target.id;
        const p = [];

        this.state.posts.map(function(post){
            if (post.id == parseInt(id)){
                p.push(post)
            }
        });

        this.setState({checked_post: p[0]});
    }

    handleSubmit(post){
        const newState = this.state.posts.concat(post);
        this.setState({ posts: newState });
        console.log('asdasd' + post)
    }

    newPostButton(state) {

        const showLinkBool = state.show_link;

        if (showLinkBool) {
            return(
                <div>
                    <NewPost handleSubmit={this.handleSubmit.bind(this)} hide={() => this.changeShowLink(false)}/>
                </div>
            );
        }
        return(
            <div>
                <button onClick={() => this.changeShowLink(true)}>New Post</button><br/>
            </div>
        );
    }

    changeShowLink(bool){
        this.setState({ show_link: bool });
    }

    hide_bar(){
        this.setState({ checked_post: [] });
    }

    render() {

        const c_post = this.state.checked_post;

        return (

            <div className="posts_list">
                {
                    this.newPostButton(this.state)
                }<br/>
                {
                    this.state.posts.map(function(post,index){
                            return (
                                <div key={index} id={post.id}>
                                    <Post
                                        show_title="true"
                                        post={post}
                                        state={this.state}
                                        index={index}
                                        handler={this.handleCheck.bind(this)}
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
                        handler={this.handleCheck.bind(this)}
                    />
                    {this.state.checked_post.length == 0 ? '' : <button onClick={this.hide_bar.bind(this)}>Hide</button> }
                </div>
            </div>

        );
    }
}

