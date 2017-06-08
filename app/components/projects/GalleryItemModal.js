import React from 'react';

class GalleryItemModal extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			modalOpen: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			modalOpen: false
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
				<div className='gallery-item-modal-background'>
					<aside className='back-button' onClick={this.handleClick.bind(this)}>
						<a className='fa fa-times' aria-hidden='true'></a>
					</aside>
					<div className='gallery-modal-image-container'>
						<img className='gallery-modal-image' src={require('../../images/' + proj.alias + '.jpeg')} alt={proj.title} />
					</div>
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

module.exports = GalleryItemModal;