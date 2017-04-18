var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    published: React.PropTypes.bool
  },

    getInitialState() {
        return { items: [] }
    },

    componentDidMount: function() {
        console.log('this mounted POST')
    },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
        <div>Published: {this.props.published ? 'true' : 'false' }</div>
          <input type="button" onClick={this.handleDelete} value="Click Me!" />
          <input type="button" onClick={this.deech} value="Click Me2!" />
      </div>
    );
  },

    handleDelete: function() {
        // this.setState((prevState, props) => {
        //     return {item: prevState.counter + props.step};
        // });
        console.log('asd')
    },

    deech: function(){
      debugger;
    }
});


function Deech(){
    alert(this)
}