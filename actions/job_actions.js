import axios from "axios";
import reverseGeoCode from "latlng-to-zip";
import { FETCH_JOBS } from "./types";
import qs from 'qs';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeoCode(region);
    const url = buildJobsUrl(zip);
    
    let { data } = await axios.get({url,headers:{
      'Content-Type':'application/x-www-form-urlencoded'
     }});
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch(e) {
    
    console.error(e);
  }
};
