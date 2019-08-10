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
      ? this.props.list.map(value => (
          <ListItem key={value._id} style={{ padding: "10px 0" }}>
            <ListItemText primary={value.name} />
            <ListItemSecondaryAction>
              <Checkbox
                color="primary"
                onChange={this.handleToggle(value._id)}
                checked={this.state.checked.indexOf(value._id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))
      : null;

  handleToggle = value => () => {
    const { checked } = this.state;
    // This is the same as above 'const checked = this.state.checked;'
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // this.props.handleFilters(newChecked) or as a call back function
    this.setState({ checked: newChecked }, () => {
      this.props.handleFilters(newChecked);
    });
  };

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
