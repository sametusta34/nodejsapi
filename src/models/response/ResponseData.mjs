class ResponseData {
    constructor(responseCode, data, responseMessage, responseErrorMessage) {
      this.responseCode = responseCode;
      this.data = data;
      this.responseMessage = responseMessage;
      this.responseErrorMessage = responseErrorMessage || null;
    }
  }

    export default ResponseData;