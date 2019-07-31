
// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

// const URL = "http://192.168.1.213:8061/";
// const PIC_IP = "192.168.1.118:6080";
const URL = "http://api.genvana.cn/";
const PIC_IP = "res.genvana.cn";
const URL_PIC = "http://" + PIC_IP + "/upload/";
const UploadUrl = "http://" + PIC_IP + "/file/uploadBase64";


const PageSize = 10;

const getRequestParams = function () {
	var request = {
		RequestKey: "",
		UserID: "0",
		UserName: "",
		DepartmentID: "0",
		PositionID: "0",
		DepartmentLevel: "",
		BooksID: "",
		//接口调用来源 0:ERP 1:厂商 2:客户商城 3:业务宝 4:APP商城 5:H5商城 ,
		SourceFrom: 4,
		RequestTime: "",
		Sign: "",
		PageIndex: 1,
		PageSize: 15,
		ClientIP: "127.0.0.1",
		OrderNo: "",
		LogType: "",
		RoleIDs: ""
	}
	var user = getUserStorage();
	if (user != null) {
		request.UserName = user.EmployeeName;
		request.UserID = user.EmployeeID;
		request.DepartmentID = user.DepartmentID;
		request.DepartmentLevel = user.Type;
		request.PositionID = user.PositionID;
		request.RoleIDs = user.RoleIDs;
	} 
	request.RequestTime = getNowFormatDate();
	request.RequestKey = guid();
	return request;
}

function guid() {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const callApi = function (url, param, callback,tempPageSize) {
	var request = getRequestParams();
	request.Data = param;
	request.PageSize = tempPageSize?tempPageSize:PageSize;
	request.LogType = url.split("/")[2];
	console.log("一页数量："+request.PageSize)
	console.log(JSON.stringify(request));
	console.log(URL + url);
	const requestTask = uni.request({
		url: URL + url,
		data: request,
		timeout: 10000, //超时时间设置为10秒；
		method: "POST",
		header: {
			'Content-Type': 'application/json'
		},
		success: (result) => {
			if (result.statusCode == 200) {
				if (result.data.IsSuccess) {
					callback(true, result.data.Data, "");
				} else {
					callback(false, null, result.data.ErrMsg);
					console.log(JSON.stringify(result));
					uni.showToast({
						title: result.data.ErrMsg,
						duration: 2000
					});
				}
			} else {
				callback(false, null, result.statusCode);
				console.log(JSON.stringify(result));
				uni.showToast({
					title: result.statusCode,
					duration: 2000
				});
			}

		},
		fail: (data, code) => {
			console.log(JSON.stringify(code) + "========" + JSON.stringify(data));
			callback(false, null, JSON.stringify(data));
			uni.showToast({
				title: JSON.stringify(data),
				duration: 2000
			});
		}
	});
}

const callApiByPage = function (url, param, PageIndex, callback) {
	var request = getRequestParams();

	request.PageIndex = PageIndex;
	request.PageSize = PageSize;
	request.Data = param;
	request.LogType = url.split("/")[2];
	console.log(JSON.stringify(request));
	console.log(URL + url);
	
	const requestTask = uni.request({
		url: URL + url,
		data: request,
		timeout: 10000, //超时时间设置为10秒；
		method: "POST",
		header: {
			'Content-Type': 'application/json'
		},
		success: (result) => {
			if (result.statusCode == 200) {
				if (result.data.IsSuccess) {
					callback(true, result.data.Data, "");
				} else {
					callback(false, null, result.data.ErrMsg);
					console.log(JSON.stringify(result));
					uni.showToast({
						title: result.data.ErrMsg,
						duration: 2000
					});
				}
			} else {
				callback(false, null, result.statusCode);
				console.log(JSON.stringify(result));
				uni.showToast({
					title: result.statusCode,
					duration: 2000
				});
			}
	
		},
		fail: (data, code) => {
			console.log(JSON.stringify(code) + "========" + JSON.stringify(data));
			callback(false, null, JSON.stringify(data));
			uni.showToast({
				title: JSON.stringify(data),
				duration: 2000
			});
		}
	});
}


const getUserStorage = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
	if(ret){
		return JSON.parse(ret);
	}else{
		return null;
	}
}
const clearUsers = function () {
	uni.removeStorageSync(USERS_KEY);
}

const setUserStorage = function (userInfo) {
    uni.setStorageSync(USERS_KEY, JSON.stringify(userInfo));
}

const getStorage = function (key) {
    let ret = '';
    ret = uni.getStorageSync(key);
	if(ret){
		return JSON.parse(ret);
	}else{
		return null;
	}
}

const setStorage = function (key,info) {
    uni.setStorageSync(key, JSON.stringify(info));
}

const getNowFormatDate = function() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
		" " + date.getHours() + seperator2 + date.getMinutes() +
		seperator2 + date.getSeconds();
	return currentdate;
}

export default {
    getUserStorage,
    setUserStorage,
    getStorage,
    setStorage,
	clearUsers,
	callApi,
	callApiByPage,
	URL,
	URL_PIC,
	PageSize,
	getRequestParams,
}