var React = require('react');

var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.whenClicked}><span className="glyphicon glyphicon-chevron-right"/></button>
    );
  }
});

var Member = React.createClass({
  handleClick: function() {
    this.setState({flip: !this.state.flip});
  },
  getInitialState: function() {
    return {flip: false};
  },
  render: function() {
    return (
      <div className="col-sm-4 col-md-2" id='team'>
        <div className="thumbnail">
          <div className="caption">
            <h4>{this.props.name + " "}
            <Button whenClicked={this.handleClick}/>
            </h4>
              <div className={this.state.flip ? "hidden": "show"}>
                <img src={this.props.photo} className="img-circle"/>
                  <p>
                    <a href={this.props.github} className="btn btn-default" role="button"><img src="./app/img/GitHub-Mark-32px.png"/></a>
                    <a href={this.props.linkedin} className="btn btn-default" role="button"><img src="./app/img/In-Black-34px-R.png" /></a>
                  </p>
                </div>
                <div className={this.state.flip ? "show":"hidden"}>
                  <p>{this.props.info}</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
});

var Team = React.createClass({

  render: function() {
    var list = this.props.membersData.map(function(membersProps, index) {
      return (
        <Member key={index} {...membersProps} />
      );
    }.bind(this));
    return (
      <div>
      <h3>Pico Tech Team Members</h3>
      {list}
      </div>
    );
  }
});




module.exports = Team;
