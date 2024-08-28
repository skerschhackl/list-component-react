import TagList from './TagList';

type ListContentProps = {
	tags: string[];
};

const ListContent = ({ tags }: ListContentProps) => (
	<div className='list-content'>
		<TagList tags={tags}></TagList>
	</div>
);

export default ListContent;