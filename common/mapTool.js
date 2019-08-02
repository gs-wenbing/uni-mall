const x_PI = 3.14159265358979324 * 3000.0 / 180.0;
const PI = 3.1415926535897932384626;
const ee = 0.00669342162296594323;
const a = 6378245.0;



const transformlat = function(lng, lat) {
	let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
	ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
	ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
	return ret
}
const transformlng = function(lng, lat) {
	let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
	ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
	ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
	ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
	return ret
}
/**  
 * 判断是否在国内，不在国内则不做偏移  
 * @param lng  
 * @param lat  
 * @returns {boolean}  
 */
const out_of_china = function(lng, lat) {
	return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
}

/**  
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换  
 * 即谷歌、高德 转 百度  
 * @param lng  
 * @param lat  
 * @returns {*[]}  
 */
const gcj02tobd09 = function(lng, lat) {
	let z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
	let theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
	let bd_lng = z * Math.cos(theta) + 0.0065;
	let bd_lat = z * Math.sin(theta) + 0.006;
	return [bd_lng, bd_lat]
}
/**  
 * WGS84转GCj02  
 * @param lng  
 * @param lat  
 * @returns {*[]}  
 */
const wgs84togcj02 = function(lng, lat) {
	if (out_of_china(lng, lat)) {
		return [lng, lat]
	} else {
		let dlat = transformlat(lng - 105.0, lat - 35.0);
		let dlng = transformlng(lng - 105.0, lat - 35.0);
		let radlat = lat / 180.0 * PI;
		let magic = Math.sin(radlat);
		magic = 1 - ee * magic * magic;
		let sqrtmagic = Math.sqrt(magic);
		dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
		dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
		let mglat = lat + dlat;
		let mglng = lng + dlng;
		return [mglng, mglat]
	}
}
/**  
 * GCJ02 转换为 WGS84  
 * @param lng  
 * @param lat  
 * @returns {*[]}  
 */
const gcj02towgs84 = function(lng, lat) {
	if (out_of_china(lng, lat)) {
		return [lng, lat]
	} else {
		let dlat = transformlat(lng - 105.0, lat - 35.0);
		let dlng = transformlng(lng - 105.0, lat - 35.0);
		let radlat = lat / 180.0 * PI;
		let magic = Math.sin(radlat);
		magic = 1 - ee * magic * magic;
		let sqrtmagic = Math.sqrt(magic);
		dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
		dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
		let mglat = lat + dlat;
		let mglng = lng + dlng;
		return [lng * 2 - mglng, lat * 2 - mglat]
	}
}

export default {
    gcj02towgs84,
	gcj02tobd09,
	wgs84togcj02
}
