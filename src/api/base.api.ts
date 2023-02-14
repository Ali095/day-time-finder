import { fetchErrorHandler } from '../common/handlers';

export type APIResponse = {
	success: boolean,
	statusCode: number,
	message: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any
}

export class BaseAPIService {
	private baseUrl: string;
	constructor(baseAPIURL = "Base URL", options?: { useBaseUrl: boolean }) {
		const useDefaultUrl = options?.useBaseUrl;
		this.baseUrl = useDefaultUrl ? baseAPIURL : "";
	}

	private authHeader(requestUrl: string): HeadersInit {
		// return auth header with jwt if user is logged in and request is to the api url
		// We will configure it accordingly while working with real app
		return {};
	}

	private async handleResponse(response: Response): Promise<APIResponse> {
		const textResponse = await response.text();
		const data = textResponse && JSON.parse(textResponse);

		if (!response.ok) {
			if ([401].includes(response.status)) {
				// logout user from frontend if user is currently logged in from frontend because 401 Unauthorized returned from api and the token is expired at backend
			}

			// data.success = false;
			const error = data || response.statusText;
			return Promise.reject(error);
		}

		return {
			success: true,
			statusCode: response.status,
			message: data.message || "Request completed successfully",
			data: data.data || { ...data }
		}
	}

	public async get(apiPath: string): Promise<APIResponse> {
		const requestUrl: string = this.baseUrl + apiPath;
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: this.authHeader(requestUrl),
		};
		const response = await fetch(requestUrl, requestOptions).catch(fetchErrorHandler);
		return this.handleResponse(response);
	}

	async post(apiPath: string, body: Record<string, never>, credentials?: RequestCredentials): Promise<APIResponse | never> {
		const requestUrl: string = this.baseUrl + apiPath;
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', ...this.authHeader(requestUrl) },
			credentials: credentials || 'include',
			body: JSON.stringify(body)
		};
		const response = await fetch(requestUrl, requestOptions).catch(fetchErrorHandler);
		return this.handleResponse(response);
	}

	async put(apiPath: string, body: Record<string, never>): Promise<APIResponse> {
		const requestUrl: string = this.baseUrl + apiPath;
		const requestOptions: RequestInit = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', ...this.authHeader(requestUrl) },
			body: JSON.stringify(body)
		};
		const response = await fetch(requestUrl, requestOptions).catch(fetchErrorHandler);
		return this.handleResponse(response);
	}
}

export const apiService = new BaseAPIService();
export default apiService;
