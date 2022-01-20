import React, { useState } from 'react';
import data from '../../data/carouselData';
import './style.css';
const Carousel = () => {
	const [currentIndex, setIndex] = useState(1);
	const handleTitleClick = (ind) => {
		setIndex(ind);
	};

	const handleNext = (ind) => {
		if (data.length !== currentIndex) {
			setIndex((prevState) => prevState + 1);
		} else {
			setIndex((prevState) => 1);
		}
	};

	const handlePrev = (ind) => {
		if (currentIndex === 1) {
			setIndex((prevState) => data.length);
		} else {
			setIndex((prevState) => prevState - 1);
		}
	};

	return (
		<>
			<div className="root-component">
				<div className="left-column">
					<h2 className="logo">AFFIXLEARN</h2>
					{data.map((el, ind) => (
						<h4
							style={{
								textAlign: 'left',
								color: currentIndex === ind + 1 ? 'white' : 'black',
							}}
							className={`${
								currentIndex === ind + 1 ? 'active-title' : 'title'
							} btn`}
							onClick={handleTitleClick.bind(this, ind + 1)}
						>
							{el.title}
						</h4>
					))}
				</div>
				<div className="right-column">
					{data.map((el, ind) => (
						<div className={currentIndex === ind + 1 ? 'active-card' : 'card'}>
							<h1 style={{marginBottom: 0}}>{el.title}</h1>
							<hr
								className='title-underline'
							
							></hr>
							<p className="description">{el.description}</p>
							<div className="sliding-container">
								<h1
									className="btn btn-prev"
									onClick={handlePrev.bind(this, ind + 1)}
								>
									{'<'}
								</h1>
								{data.map((e, ind) => (
									<div
										className={`btn ${
											currentIndex === ind + 1 ? 'active-dot' : 'dots'
										}`}
										onClick={handleTitleClick.bind(this, ind + 1)}
									></div>
								))}
								<h1
									className="btn btn-next"
									onClick={handleNext.bind(this, ind + 1)}
								>
									{'>'}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Carousel;
