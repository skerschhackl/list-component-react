import { useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import { IListItem } from '../types/listItem';
import ListImage from './ListImage';
import ListTitle from './ListTitle';
import ListContent from './ListContent';

import '../styles/list.css';

type ListViewProps = {
  items: IListItem[];
};

export default function ListView({ items }: ListViewProps) {
  /** @todo: find better solution **/
	/** workaround to get MUI ImageList working for responsive behaviour **/
	/** Not ideal as it's using pixels to determine column width **/
	const matches = useMediaQuery('(min-width:576px)');
	const listStyleObj = {
    gridTemplateColumns: matches ? 'repeat(auto-fill, minmax(298px, 298px))!important' : '',
    margin: '0 auto',
    display: !matches ? 'block' : ''
  };
	
  return (
    <ImageList sx={listStyleObj}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Images from 2022 in random order</ListSubheader>
      </ImageListItem>
      {items.map(item => (
        <ImageListItem key={item._id} cols={1}>
          <ListImage imageId={item._id}></ListImage>
          <ImageListItemBar
						className='list-item-info'
            title={
							<ListTitle 
								createdAt={item.createdAt} 
								updatedAt={item.updatedAt} 
								owner={item.owner} 
								isMobile={!matches}
							></ListTitle>
						}
						subtitle={<ListContent tags={item.tags}></ListContent>}
						position="below"
					/>
        </ImageListItem>
      ))}
      </ImageList>
    );
  }