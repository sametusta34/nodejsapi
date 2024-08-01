class ResponseDataList {
    constructor(responseCode, dataList, responseMessage, responseErrorMessage){
        this.responseCode = responseCode;
        this.dataList = dataList;
        this.responseMessage = responseMessage;
        this.responseErrorMessage = responseErrorMessage || null;
    }
}

export default ResponseDataList;