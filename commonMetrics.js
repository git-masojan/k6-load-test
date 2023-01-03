import { sleep, check } from "k6";
import { Gauge, Rate, Counter, Trend} from "k6/metrics";

const myFailRateDuration = new Rate('fail_rate_duration');
let successRateDuration = new Rate("success_rate_duration");
let successRateResponseCode = new Rate("success_rate_response_code");
let errorRateDuration = new Rate("error_rate_duration");
let timeoutRateDuration = new Rate("timeout_rate_duration");
let errorRateResponseCode = new Rate("error_rate_response_code");
let errorRateResponseBody = new Rate("error_rate_response_body");
let successRateResponseBody = new Rate("success_rate_response_body");
let emptyRateResponseBody = new Rate("empty_rate_response_body");
let status200 = new Counter('status_200');
let status500 = new Counter('status_500');
let status504 = new Counter('status_504');
let status503 = new Counter('status_503');
let status520 = new Counter('status_520');
let status400 = new Counter('status_400');
let status403 = new Counter('status_403');
let status429 = new Counter('status_429');
let errRespBody = new Counter('error_counter_response_body');
let succRespBody = new Counter('success_counter_response_body');
let emptyRespBody = new Counter('empty_counter_response_body');

export const customMetrics = (res) => {
  emptyRateResponseBody.add(res.body.includes('"nodes":[]'))
  errorRateResponseBody.add(res.body.includes('errors'));
  successRateResponseBody.add(!res.body.includes('errors'));
  successRateResponseCode.add(res.status === 200);
  errorRateResponseCode.add(res.status !== 200);
  successRateDuration.add(res.timings.duration <= 100);
  errorRateDuration.add(res.timings.duration > 100);
  myFailRateDuration.add(res.timings.duration > 100);
  timeoutRateDuration.add(res.timings.duration >= 60000);
  errRespBody.add(res.body.includes('errors'));
  succRespBody.add(!res.body.includes('errors'));
  emptyRespBody.add(res.body.includes('"nodes":[]'));
  status200.add(res.status === 200);
  status500.add(res.status === 500);
  status504.add(res.status === 504);
  status503.add(res.status === 503);
  status520.add(res.status === 520);
  status400.add(res.status === 400);
  status403.add(res.status === 403);
  status429.add(res.status === 429);

  const checkRes = check(res, {
      'Response code is 200': (r) => r.status === 200,
      "Response code was not 400": (r) => r.status !== 400,
      "Response code was not 401": (r) => r.status !== 401,
      "Response code was not 403": (r) => r.status !== 403,
      "Response code was not 429": (r) => r.status !== 429,
      "Response code was not 500": (r) => r.status !== 500,
      "Response code was not 504": (r) => r.status !== 504,
      "Response code was not 503": (r) => r.status !== 503,
      "Response code was not 520": (r) => r.status !== 520,
      "Response body does not contain Error": (r) => !r.body.includes('errors'),
  })
};

export const customThreshold = {
  thresholds: {
    success_rate_response_body: ['rate == 1'], 
    success_rate_response_code: ['rate == 1'],
    success_rate_duration: ['rate == 1'],
    empty_rate_response_body: ['rate == 0'], 
    error_rate_response_code: ['rate == 0'],
    error_rate_response_body: ['rate == 0'],
    error_counter_response_body: ['count == 0'],
    empty_counter_response_body: ['count == 0'],
    error_rate_duration: ['rate == 0'],
    http_req_duration: ['avg <= 100'],
    http_req_failed: ['rate == 0'],
    status_400: ['rate == 0'],
    status_403: ['rate == 0'],
    status_429: ['rate == 0'],
    status_500: ['rate == 0'],
    status_503: ['rate == 0'],
    status_504: ['rate == 0'],
    status_520: ['rate == 0']
  },
};