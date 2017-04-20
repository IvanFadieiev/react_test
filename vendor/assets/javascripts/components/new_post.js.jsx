var NewPost = React.createClass({
    newPostClick() {
        const title = this.refs.title.value;
        const body = this.refs.body.value;
        const published = this.refs.published.checked;

        const self = this;

        $.ajax({
            url: '/posts.json',
            type: 'POST',
            data: { post: { title: title, body: body, published: published } },
        }).done(function(post){
            self.props.handleSubmit(post);
            console.log('NEW POST' + post);
            self.refs.title.value = '';
            self.refs.body.value = '';
            self.refs.published.checked = false;
        });
    },

    render() {
        return (
            <div>
                <input ref='title' placeholder='Enter the title of the post' />
                <button onClick={this.props.hide}>Hide</button><br/><br/>
                <input ref='body' placeholder='Enter a body' /><br/><br/>
                <label>
                    Published:
                    <input ref="published" type="checkbox" />
                </label>
                <br/>
                <button onClick={this.newPostClick}>Submit</button>
            </div>
        )
    }
});
