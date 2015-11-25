DateInput = React.createClass({
  render() {
    var date = moment(this.props.value),
        formattedDate = date.format('YYYY-MM-DD');

    return (
      <ReactBootstrap.Input
        {...this.props}
        type='date'
        value={formattedDate}/>
    );
  }
});
