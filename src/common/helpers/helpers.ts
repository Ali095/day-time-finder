/**
 * Add or subtract seconds to date string passed and returns the time value i.e: 07:11 PM
 * @param date Date string
 * @param timeOffsetinSec numeric time in seconds;; It can be a negative number
 * @returns Time string i.e: 06:12 AM
 */
export const convertTimezone = (date: string, timeOffsetinSec: number): string => {
	const oldDate = new Date(date);
	return new Date(new Date(oldDate).setSeconds(oldDate.getSeconds() + timeOffsetinSec)).toLocaleTimeString();
}

/**
 * Check if passed value is a valid IP address. It checks on both ipv4 and ipv6 formats
 * @param ipAddress string value of IP address in IPV4 or IPV6 format.
 * @returns boolean true or false if value is IP address or not.
 */
export const validIPAddress = (ipAddress: string): boolean => {
	const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])$/;

	if (ipv4Regex.test(ipAddress) || ipv6Regex.test(ipAddress)) {
		console.log("passed");
		return true;
	}
	return false;
}
