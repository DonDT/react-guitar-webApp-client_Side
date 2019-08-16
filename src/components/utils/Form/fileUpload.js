import React, { Component, createRef } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaPlusCircle } from "react-icons/fa";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadedFiles: [],
      uploading: false
    };
  }

  onDrop = files => {
    this.setState({
      uploading: true
    });
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    formData.append("file", files[0]);

    axios.post("/api/users/uploadimage", formData, config).then(response => {
      console.log(response.data);

      this.setState(
        {
          uploading: false,
          uploadedFiles: [...this.state.uploadedFiles, response.data]
        },
        () => {
          this.props.imagesHandler(this.state.uploadedFiles);
        }
      );
    });
  };

  onRemove = id => {
    axios.get(`/api/users/removeimage?public_id=${id}`).then(response => {
      let images = this.state.uploadedFiles.filter(item => {
        return item.public_id !== id;
      });
      this.setState({ uploadedFiles: images }, () => {
        this.props.imagesHandler(images);
      });
    });
  };

  showUploadedImages = () =>
    this.state.uploadedFiles.map((item, i) => (
      <div
        className="dropzone_box"
        // key={item.public_id}
        key={i}
        onClick={() => this.onRemove(item.public_id)}
      >
        <div
          className="wrap"
          style={{ background: `url(${item.url}) no-repeat` }}
        />
      </div>
    ));

  static getDerivedStateFromProps(props, state) {
    if (props.reset) {
      return (state = {
        uploadedFiles: []
      });
    }
    return null;
  }

  render() {
    const dropzoneRef = createRef();

    return (
      <div>
        <section>
          <div className="dropzone clear">
            <Dropzone
              ref={dropzoneRef}
              multiple={false}
              onDrop={e => this.onDrop(e)}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzone_box">
                  <input {...getInputProps()} />
                  <div className="wrap">
                    <FaPlusCircle />
                  </div>{" "}
                </div>
              )}
            </Dropzone>
            {this.showUploadedImages()}
            {this.state.uploading ? (
              <div
                className="dropzone_box"
                style={{ textAlign: "center", paddingTop: "60px" }}
              >
                <CircularProgress style={{ color: "#00bcd4" }} thickness={7} />
              </div>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}

export default FileUpload;
