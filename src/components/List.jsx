import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ListContent from './ListContent.js'

class List extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {

    };

  }
  componentDidMount() {

  }

  render(){

      return(
        <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="todolist not-done">
                <h1>Todos</h1>
                <input type="text" className="form-control add-todo" placeholder="Add todo"/>
                <button id="checkAll" className="btn btn-success">Mark all as done</button>

                <hr/>
                <ul id="sortable" className="list-unstyled">
                  <ListItem
                    isCompleted={true}
                    name={ListContent[0] }/>
                    <ListItem
                      isCompleted={false}
                      name={ListContent[1] }/>
                </ul>
                <div className="todo-footer">
                  <strong>
                    <span className="count-todos"></span>
                  </strong>
                  Items Left
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" className="list-unstyled">
                  <li>Some item
                    <button className="remove-item btn btn-default btn-xs pull-right">
                      <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        </div>
      );

  }
}

List.propTypes={

};

export default List;
