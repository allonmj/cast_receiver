/**
 *  current json schema for chromecast's onEvent data.
 *
 *  @author bhurthib
 */

event.data = {
  requestType = "REQUEST_TYPE",
  requestData = {Additional_data_for_this_specific_request},
  contextData = {Additional_information_about_this_specific_request}
}

event.data.requestType = {
  //the string the name of the request app
}

event.data.requestData = {
  //any additional data use for the request app.  the actual schema of the requestData will depend on the request app
}

event.data.contextData = {
 //include context information like time, phone information, etc. This will be common information to be used across all request apps.
  
}