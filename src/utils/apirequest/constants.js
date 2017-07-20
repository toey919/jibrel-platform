/*
 * Common constants that used to handle API requests
 * Supposed workflow:
 * - we launch routine
 * - routine performs one or more requests
 * - routine finished (success/failure) or we abort routine
 */

export const API_REQUEST_STATUS__ROUTINE_NOT_INITIALIZED = "API_REQUEST_STATUS__ROUTINE_NOT_INITIALIZED";
export const API_REQUEST_STATUS__ROUTINE_LAUNCHED        = "API_REQUEST_STATUS__ROUTINE_LAUNCHED";
export const API_REQUEST_STATUS__ROUTINE_SUCCESS         = "API_REQUEST_STATUS__ROUTINE_SUCCESS";
export const API_REQUEST_STATUS__ROUTINE_FAILURE         = "API_REQUEST_STATUS__ROUTINE_FAILURE";
export const API_REQUEST_STATUS__ROUTINE_ABORTED         = "API_REQUEST_STATUS__ROUTINE_ABORTED";


export const API_REQUEST_STATUS__REQUEST_NOT_INITIALIZED = "API_REQUEST_STATUS__REQUEST_NOT_INITIALIZED";
export const API_REQUEST_STATUS__REQUEST_SENT            = "API_REQUEST_STATUS__REQUEST_SENT";
export const API_REQUEST_STATUS__REQUEST_SUCCESS         = "API_REQUEST_STATUS__REQUEST_SUCCESS";
export const API_REQUEST_STATUS__REQUEST_FAILURE         = "API_REQUEST_STATUS__REQUEST_FAILURE";