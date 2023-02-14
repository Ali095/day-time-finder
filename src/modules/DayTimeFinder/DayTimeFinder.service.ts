import { BaseAPIService } from '../../api/base.api'
import { convertTimezone } from '../../common/helpers';

export type GeoLocation = { latitude: string, longitude: string, timeOffsetinSec: number, timezone: string, ip: string };
export type DayTime = { sunrise: string, sunset: string };
export type GeoData = { sunrise: string, sunset: string, timezone: string, ip: string; }

export class DayTimeFinderService extends BaseAPIService {
	private externalApiService: BaseAPIService;
	constructor() {
		super()
		this.externalApiService = new BaseAPIService(undefined, { useBaseUrl: false });
	}

	/**
	 * Fetch the geolocation from specific IP address in clusing the timezone offset.
	 * @param ipValue IP address to fetch the geo location
	 * @returns [GeoLocation] Location inclusing timezone data
	 */
	private async getGeoLocationFromIp(ipValue: string): Promise<GeoLocation> {
		const geoResponse = await this.externalApiService.get(`https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_IP_BASE_API_KEY}&ip=${ipValue}`);
		const { latitude, longitude } = geoResponse.data.location;
		const { id: timezone, gmt_offset: timeOffsetinSec } = geoResponse.data.timezone;
		const { ip } = geoResponse.data;
		return { latitude, longitude, timeOffsetinSec, timezone, ip };
	}

	/**
	 * Fetch the sunset and sunrise times for passed geolocation
	 * @param [GeoLocation] location params to fetch the sunset and sun rise times
	 * @returns Sunrise and sunset times
	 */
	private async calculateDayTime({ latitude, longitude, timeOffsetinSec }: GeoLocation): Promise<DayTime> {
		const sunriseSunsetResponse = await this.externalApiService.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`);
		const { sunrise, sunset } = sunriseSunsetResponse.data.results;
		new Date().getTimezoneOffset()
		return {
			sunrise: convertTimezone(new Date().toDateString() + ' ' + sunrise, timeOffsetinSec),
			sunset: convertTimezone(new Date().toDateString() + ' ' + sunset, timeOffsetinSec),
		};
	}

	/**
	 * Fetch the day time for passed IP Address.
	 * @param ip String format IP address
	 * @returns sunset and sunrise times with ip and timezones
	 */
	public async getDayTimeFromIp(ip: string): Promise<GeoData> {
		const geoLocation = await this.getGeoLocationFromIp(ip);
		const { sunrise, sunset } = await this.calculateDayTime(geoLocation);
		return {
			sunrise, sunset,
			timezone: geoLocation.timezone,
			ip: geoLocation.ip
		}

	}
}

export const dayTimeFinderService = new DayTimeFinderService();
export default dayTimeFinderService;
