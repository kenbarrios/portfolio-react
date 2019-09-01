import React from 'react';
import PropTypes from 'prop-types';
import GalleryItemModalCloseButton from './GalleryItemModalCloseButton';
import GalleryItemModalImage from './GalleryItemModalImage';

class GalleryItemModal extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			modalOpen: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(bool) {
		this.setState({
			modalOpen: bool
		}, () => {
			this.props.reset(
				this.state.modalOpen
			)
		})
	}
	render() {
		let proj = this.props.project;
		return(
			<div className='gallery-item-modal'>
				<div className='gallery-item-modal-body'>
					<GalleryItemModalCloseButton close={this.handleClick} />
					
					<GalleryItemModalImage project={proj} />
					
					<section className='gallery-modal-info'>
						<div className='half-info top'>
							<div className='modal-title'>
								<h3>{proj.title}</h3>
							</div>
							<div className='modal-brief'>
								<p>{proj.brief}</p>
							</div>
						</div>
						<div className='half-info bottom'>
							<div className='tech-list-div'>
								<ul>
								{ proj.tech.map((tech) => {
									return(
										<li key={tech}>{tech}</li>
									)
								})}
								</ul>
							</div>
							<div className='site-repo-div'>
								<a href={proj.site} target='_blank'>website</a>
								<a href={proj.repo} target='_blank'>github repo</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

GalleryItemModal.propTypes = {
	project: PropTypes.object.isRequired
}

export default  GalleryItemModal;