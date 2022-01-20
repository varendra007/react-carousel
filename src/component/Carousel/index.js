import React, { useState } from 'react';
import data from '../../data/carouselData';
// import './styles.css';
import './style.css'
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
			<div
				id="root-component"
				// style={{
				// 	display: 'flex',
				// 	flexDirection: 'row',
				// 	margin: '150px 40px 0 10px',
				// 	// backgroundColor: 'red',
				// 	borderRadius: '8px',
				// 	paddingRight: '20px',
				// 	position: 'absolute',
				// 	width: '90%',

				// 	// width: 'min-content'
				// }}
			>
				<div
					id="left-column"
					// style={{
					// 	backgroundColor: 'blueviolet',
					// 	borderRadius: '8px',
					// 	padding: '40px 50px 30px 40px',
					// 	width: '',
					// }}
				>
					{data.map((el, ind) => (
						<h4
							style={{
								textAlign: 'left',
								color: currentIndex === ind + 1 ? 'white' : 'black',
							}}
							className={currentIndex === ind + 1 ? 'active-title' : 'title'}
							onClick={handleTitleClick.bind(this, ind + 1)}
						>
							{el.title}
						</h4>
					))}
				</div>
				<div
					className="right-column"
					// style={{ position: 'relative', width: '70%', marginLeft: '100px' }}
				>
					{data.map((el, ind) => (
						<div
							style={{
								position: 'absolute',

								height: '100%',
							}}
							className={currentIndex === ind + 1 ? 'active-card' : 'card'}
						>
							<h1 style={{}}>{el.title}</h1>
							<p>{el.description}</p>
							<div
								className="abcd"
								style={
									{
										// display: 'flex',
										// position: 'absolute',
										// justifyContent: 'center',
										// alignItems: 'center',
										// bottom: 0,
										// left: 0,
										// right: 0,
									}
								}
							>
								<h1 onClick={handlePrev.bind(this, ind + 1)}> {'<'} </h1>
								{data.map((e, ind) => (
									<div
										className={currentIndex === ind + 1 ? 'active-dot' : 'dots'}
										onClick={handleTitleClick.bind(this, ind + 1)}
									></div>
								))}
								<h1 onClick={handleNext.bind(this, ind + 1)}>{'>'}</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Carousel;
