import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      isCompleted: this.props.isCompleted,
    };

  }

  buttonPress(){
  //  (this.state.checked) ? this.setState({checked: false}) : this.setState({checked: true})

  }

  componentDidMount() {

  }

  render(){

      return(
        <div className="row">
          <div className="col-auto">
            {this.props.isCompleted ?
              <i className="fab fa-2x text-success fa fa-fw fa-check-circle"/> :
              <i className="fab fa-2x text-muted fa fa-fw fa-circle"/>
            }
          </div>
          <div className="col-9 d-flex align-items-center">
            <h4>{this.props.name}</h4>
          </div>
        </div>
      );

  }
}

ListItem.propTypes={
  name: PropTypes.string,
  isCompleted: PropTypes.bool,
};

export default ListItem;
