function Buttons(c_post, self) {
    // self.state.checked_post.length == 0
    if (false) {
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
                <input type="button" onClick={self.handleCheck} value="Click Me!" id={c_post.id} />
                <a href="#" id={c_post.id} onClick={showPost}>{c_post.url}</a><br></br>
            </div><br></br>
        </div>
    );
}