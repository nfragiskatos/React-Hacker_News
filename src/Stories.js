import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();

	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<section className="stories">
			{hits.map((story) => {
				const { objectID: id, title, num_comments, url, points, author } = story;
				return (
					<article key={id} className="story">
						<h4 className="title">{title}</h4>
						<p className="info">
							{points} points by <span>{author} | </span> {num_comments} comments
						</p>
						<div>
							<a className="read-link" target="_blank" rel="noopener noreferrer" href={url}>
								read more
							</a>
							<button onClick={() => removeStory(id)} className="remove-btn">
								remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
