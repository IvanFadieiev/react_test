var Post = React.createClass({
    componentDidMount: function() {
        console.log('this mounted POST')
    },

    showTitle: function (post, show) {
        if (show){
            return(
                <div className="post_title">
                    {post.title}
                    {Buttons(post, this)}
                </div>
            )
        } return(
            <div>
                <div className="post_title">
                    {post.title}
                </div>
                <div className="post_body">
                    {post.body}
                </div>
                { this.check_index(post) }
            </div>
        )
    },

    check_index: function(post){
        if(post.published){
            return(
                <div className="post_published">
                    <label>
                        Published:
                        <input name="published" type="checkbox" defaultChecked={post.published}/>
                    </label>
                    <br/>
                </div>
            )
        }
    },

    render: function() {

        const post = this.props.post;
        const state = this.props.state;
        const index = this.props.index;

        return (
            <div key={index} id={post.id}>
                {this.showTitle(post, this.props.show_title)}
            </div>
        );
    }

});
