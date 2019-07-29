import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

class CollapseCheckbox extends Component {
  state = {
    open: false,
    checked: []
  };

  componentDidMount() {
    if (this.props.initialState) {
      this.setState({
        open: this.props.initialState
      });
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleAngle = () =>
    this.state.open ? (
      <IoIosArrowUp className="icon" />
    ) : (
      <IoIosArrowDown className="icon" />
    );

  renderList = () =>
    this.props.list
      ? this.props.list.map((value, i) => <div key={i}>hey</div>)
      : null;

  render() {
    return (
      <div className="collapse_item_wrapper">
        <List style={{ borderBottom: "1px solid #dbdbdb" }}>
          <ListItem
            onClick={this.handleClick}
            style={{ padding: "10px 23px 10px 0" }}
          >
            <ListItemText
              primary={this.props.title}
              className="collapse_title"
            />
            {this.handleAngle()}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.renderList()}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

export default CollapseCheckbox;
