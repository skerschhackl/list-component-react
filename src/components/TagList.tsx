import * as React from 'react';
import '../styles/tag.css'

type TagProps = {
	name: string
};
type TagListProps = {
	tags: string[];
};

/** 
 * Consider moving Tag to its own file if complexity increases 
 */
const Tag = ({ name }: TagProps) => (
	<div className='tag'>#{name}</div>
);

const TagList = ({ tags }: TagListProps) => (
	<span className='tag-container' data-testid='tag-container'>
		{tags.map(tag => (
			<Tag key={tag} name={tag}></Tag>
		))}
	</span>
);

export default TagList;