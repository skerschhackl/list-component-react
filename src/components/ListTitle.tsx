import { formatDateTime, formatDate } from '../utils/dateHelper';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/** 
 * @todo:
 * At the moment we only display the tooltip when on desktop, 
 * Consideration: adding click/ tap functionality to display 
 * additional information on mobile devices
  */

type ListTitleProps = {
	owner: string;
	createdAt: string;
	updatedAt: string;
	isMobile: boolean;
};

const ListTitle = ({ owner, createdAt, updatedAt, isMobile }: ListTitleProps) => (
	<div className='list-title'>
		<span className='list-title--span'>@{(owner !== 'null') ? owner : 'unknown'}</span>

		<Tooltip 
			title={
				<>
					<div>Created: {formatDateTime({ dateString: createdAt })}</div>
					<div>Updated: {formatDateTime({ dateString: updatedAt })}</div>
				</>
			}
			placement="top-end"        
		>
			<Button  
				color="primary" 
				endIcon={
					!isMobile && <InfoOutlinedIcon className='list-item-info--title--icon' fontSize='inherit' />
				}
				sx={{ textTransform: "inherit" }}
			>
				{formatDate({ dateString: createdAt })}
			</Button>
		</Tooltip>
	</div>
);

export default ListTitle;