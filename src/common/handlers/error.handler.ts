import { toast } from 'react-toastify'

/** We can do alot of stuff here to handle multiple type of errors and generate numerous feedback for users for better understanding
 *
 * Right now we are just creating a toast message
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchErrorHandler = (error: any) => {
	const errorMesage = error.message || "Error occured while processing your request";
	toast.error(errorMesage);
	throw new Error('API server cannot fulfill the request at the moment');
}
