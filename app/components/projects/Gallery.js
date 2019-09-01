import React from 'react';
import projects from '../../utilities/projects';
import GalleryItem from './GalleryItem';
import GalleryItemModal from './gallery-item-modal/GalleryItemModal';

class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			itemIsActive: false,
			activeItem: null
		}

		this.handleActivation = this.handleActivation.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleActivation(item) {
		this.setState({
			itemIsActive: this.state.itemIsActive = !this.state.itemIsActive,
			activeItem: item
			
		})
	}

	handleReset(bool) {
		this.setState({
			itemIsActive: bool,
			activeItem: null
		})
	}

	render() {
		const list = projects.getList();

		return(
			<section className='gallery'>
				<ul className='gallery-list'>
				{list.map((item) => {
					return(
						<GalleryItem key={item.id} project={item} activation={this.handleActivation} />
					)
				})}
				</ul>

				{!!this.state.activeItem && 
					<GalleryItemModal project={this.state.activeItem} activation={this.state.itemIsActive} reset={this.handleReset}/>
				}
				
			</section>
		)
	}
}

export default  Gallery;