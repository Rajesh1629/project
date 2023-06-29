import React from 'react'

class SliderExample extends React.Component {
	render(){
		let settings = { 
			dots: true,
			className: 'sample'
		}
		return (
			<div {...settings} >
				<div><img src='http://placekitten.com/g/400/200' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
			</div>
			)
	}
}

export default SliderExample

