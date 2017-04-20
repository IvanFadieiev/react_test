function Buttons(c_post, self) {
    if ((self.props.state.checked_post.length == 0) && (self.props.show != 'true') ) {
        return "";
    }
    return (
        <div className="button">
            <button onClick={self.props.handler} value="show Info" id={c_post.id}>Show Info</button>
            <br/>
        </div>
    );
}
