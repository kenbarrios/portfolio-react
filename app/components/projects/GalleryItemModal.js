import React from 'react';

class GalleryItemModal extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			modalOpen: true
		}
		console.log('props? ', this.props.project);
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
				<aside className='back-button' onClick={this.handleClick.bind(this)}>
					<a className='fa fa-times' aria-hidden='true'></a>
				</aside>
				<div className='gallery-modal-image-container'>
					<img className='gallery-modal-image' src={require('../../images/' + proj.alias + '.jpeg')} alt={proj.title} />
				</div>
				<section className='gallery-modal-info'>
					<div className='half-info'>
						<div>
							<h3>{proj.title}</h3>
						</div>
						<div>
							<p>{proj.brief}</p>
						</div>
					</div>
					<div className='half-info'>
						<div className='site-repo-div'>
							<a href={proj.site} target='_blank'>Website</a>
						</div>
						<div>
							<a href={proj.repo} target='_blank'>Github Repo</a>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

module.exports = GalleryItemModal;