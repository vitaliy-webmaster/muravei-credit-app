import React from "react";
import Modal from "react-responsive-modal";

class ModalWindow extends React.Component {

	componentDidMount() {
		document.getElementById("site-wrapper").classList.add("modal-open");
	}

	render() {
		const { isOpen, onModalClose, container } = this.props;
		return (
			<Modal open={isOpen}
						 onClose={onModalClose}
						 showCloseIcon={false}
						 classNames={{ overlay: "modal-overlay", modal: "modal-content", closeButton: "modal-close-btn" }}
						 animationDuration={1000}
						 container={container}
						 focusTrapped
						 center
			>
				{this.props.children}
			</Modal>
		);
	}

	componentWillUnmount() {
		document.getElementById("site-wrapper").classList.remove("modal-open");
	}
}

export default ModalWindow;