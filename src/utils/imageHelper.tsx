
type ImageParameters = {
	type: string;
};

type ListImageParameters = {
	imageId: string
};

const IMAGE_URL = 'https://cataas.com/cat/';
const LIST_IMAGE_URL_PARAMETERS: ImageParameters  = {
	type: 'square'
};

const createQueryString = (params: ImageParameters) => {
	return '?' + Object.entries(params)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');
};

export const getListImageUrl = ({ imageId }: ListImageParameters) => {
	return IMAGE_URL + imageId + createQueryString(LIST_IMAGE_URL_PARAMETERS);
};
