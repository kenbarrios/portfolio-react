import React from 'react';
import DraftingHeader from './components/DraftingHeader';
import DraftingImage from './components/DraftingImage';

function E00003() {
	return (
		<section className='drafting-wrapper'>

			<DraftingHeader title='camarada' date='09/07/2017' />
			<article className='drafting-article l_width--100% l_flex l_wrap_w l_direction_r l_col_s-full'>
				<p className="l_m--10">Learning to toy around with svgs. Thinking through ideas for a future tattoo...</p>
				
				<DraftingImage title="camarada.png" />

				<DraftingImage title="circle-rada.png" />

			</article>

		</section>
	);
}

module.exports = E00003;