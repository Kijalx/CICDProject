import classes from "./EventDetail.module.css";
import React from 'react';

function EventDetail(props) {
	return (
		<section className={classes.detail}>
			<div className={classes.header}>
				<h1>{props.title}</h1>
			</div>

			<div className={classes.mainDiv}>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>

				<div className={classes.text}>
					<div className={classes.description}>Description</div>
					<div className={classes.event}>
						<div>{props.description}</div>
					</div>
					<div className={classes.publisher}>
						<p className={classes.para}>{props.publisher}</p>
					</div>
				</div>
			</div>
			<div className={classes.footer}></div>
		</section>
	);
}

export default EventDetail;

