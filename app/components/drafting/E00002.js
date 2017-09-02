import React from 'react';
import DraftingHeader from './components/DraftingHeader';
import DraftingImage from './components/DraftingImage';

function E00002() {
	return (
		<section className='drafting-wrapper'>

			<DraftingHeader title='playing with css' date='09/01/2017' />
			<article className='l_width--100% l_flex l_wrap_w l_direction_r l_col_s-full'>
				<div className="l_flex l_justify_c l_align_c l_pos_r l_col_half_m l_m--10 u_border--2 u_border_about t_c_about t_align_c h_overlay_dia h_c_white">
					<h2>diagonal</h2>
				</div>
				<div className="l_flex l_justify_c l_align_c l_pos_r l_col_half_m l_m--10 u_border--2 u_border_drafting t_c_drafting t_align_c h_overlay_hor h_c_white">
					<h2>horizontal</h2>
				</div>
				<div className="l_flex l_justify_c l_align_c l_pos_r l_col_half_m l_m--10 u_border--2 u_border_project t_c_project t_align_c h_overlay_ver h_c_white">
					<h2>vertical</h2>
				</div>
			</article>

		</section>
	);
}

module.exports = E00002;