import React, { Component } from "react";
import UserLayout from "../../../hoc/user";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";

class AddFile extends Component {
  constructor() {
    super();
    this.state = {
      formSuccess: false,
      formError: false,
      uploading: false,
      files: []
    };
  }

  onDrop(files) {}

  render() {
    return (
      <UserLayout>
        <h1>Admin Upload File</h1>
        <div>
          <Dropzone
            onDrop={e => this.onDrop(e)}
            multiple={false}
            className="dropzone_box"
          >
            {dropzoneProps => {
              return (
                <div className="wrap">
                  <FaPlusCircle />
                </div>
              );
            }}
          </Dropzone>
          {this.state.uploading ? (
            <div
              className="dropzone_box"
              style={{ textAlign: "center", paddingTop: "60px" }}
            >
              <CircularProgress style={{ color: "#00bcd4" }} thickness={7} />
            </div>
          ) : null}
          <div style={{ clear: "both" }}>
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : (
              ""
            )}
          </div>
          <hr />
          <div>Uploads</div>
        </div>
      </UserLayout>
    );
  }
}

export default AddFile;
