var Post = React.createClass({
    componentDidMount: function() {
        console.log('this mounted POST')
    },

  render: function() {

    var post = this.props.post;
    var state = this.props.state;
    var index = this.props.index;

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

        );
    }
});


function showPost(e){
    e.preventDefault();
    alert(e.target)
}