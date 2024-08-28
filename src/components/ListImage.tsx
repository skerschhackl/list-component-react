import React, { useState } from 'react';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import DownloadingIcon from '@mui/icons-material/Downloading';
import { getListImageUrl } from '../utils/imageHelper';


type ListImageProps = {
	imageId: string;
};

const ListImage = ({ imageId }: ListImageProps) => {
	const [imageStatus, setImageStatus] = useState('loading');

  const handleImageLoaded = () => {
    setImageStatus('loaded');
  };

  const handleImageError = () => {
    setImageStatus('error');
  };

  return (
		<div className='list-image'>
			{imageStatus === 'loading' && <div className="list-image--placeholder">
				<DownloadingIcon data-testid="loading-icon" sx={{color: '#6c757d'}} /></div>}
			<img 
				src={getListImageUrl({ imageId: imageId })} 
				alt={imageId} // @todo need to find a descriptive alt text
				loading="lazy"
				onLoad={handleImageLoaded}
        onError={handleImageError}
        style={{ display: imageStatus === 'loaded' ? 'block' : 'none' }}
				className='list-image--img'
			/>
			{imageStatus === 'error' && <div className="list-image--placeholder">
				<BrokenImageIcon data-testid="broken-image-icon" sx={{color: '#6c757d'}} /></div>}
		</div>			
  )
};

export default ListImage;
