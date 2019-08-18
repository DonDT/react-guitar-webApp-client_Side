import React, { Component } from "react";
//import Lightbox from "react-images";
import Carousel, { Modal, ModalGateway } from "react-images";

class ImageLightbox extends Component {
  state = {
    lightboxIsOpen: true,
    currentImage: this.props.pos,
    images: [],
    modalIsOpen: true
  };

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  static getDerivedStateFromProps(props, state) {
    if (props.images) {
      const images = [];
      props.images.forEach(element => {
        images.push({ src: `${element}` });
      });
      return (state = {
        images
      });
    }
    return false;
  }

  closeLightBox = () => {
    this.props.onclose();
  };
  openModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div>
        {/* <Carousel
          views={this.state.images}
          //currentImage={this.state.currentImage}
          //images={this.state.images}
          //isOpen={this.state.lightboxIsOpen}
          //onClickPrev={() => this.gotoPrevious()}
          //onClickNext={() => this.gotoNext()}
          //onClose={() => this.closeLightBox()}
        />
        */}

        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal} onClick={this.openModal}>
              <Carousel
                views={this.state.images}
                //onClick={() => this.openModal()}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default ImageLightbox;
