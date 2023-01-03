// Creator: k6 Browser Recorder 0.6.2

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
    thresholds: {
        'http_req_duration{type:getURLServiceManagementBooking}': ['avg<500'],
        'http_req_duration{type:getURLOpenIDConfig}': ['avg<500'],
        'http_req_duration{type:queryGetMySecurityPermission}': ['avg<500'],
        'http_req_duration{type:options}': ['avg<500'],
        'http_req_duration{type:queryGetInboxNotification}': ['avg<500'],
        'http_req_duration{type:queryGetBookingCancelReasonList}': ['avg<500'],
        'http_req_duration{type:queryGetDealerByIdFromWorkplace}': ['avg<500'],
        'http_req_duration{type:queryGetBookingSlotInformationFromResourceMgmt}': ['avg<500'],
        'http_req_duration{type:postConnectToken}': ['avg<500'],
        'http_req_duration{type:queryGetBookingListFromBookings}': ['avg<500'],
        'http_req_duration{type:getConnectUserInfo}': ['avg<500'],
        'http_req_duration{type:optionsConnectUserInfo}': ['avg<500'],
    }
}

export default function main() {
  let response

  const vars = {}

  group('page_1 - https://www.star-pre.astra.co.id/servicemanagement/booking', function () {
    response = http.get('https://www.star-pre.astra.co.id/servicemanagement/booking', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
      tags: {
        type: 'getURLServiceManagementBooking'
      }
    })

    response = http.get('https://identity.star-pre.astra.co.id/.well-known/openid-configuration', {
      headers: {
        accept: 'application/jwk-set+json, application/json',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
      tags: {
        type: 'getURLOpenIDConfig'
      }
    })

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetMySecurityPermission {\\n  getMyPermissionsFromSecurity {\\n    service\\n    roleName\\n    roleId\\n    connectionId\\n    connectionType\\n    permissions\\n    __typename\\n  }\\n}\\n","operationName":"GetMySecurityPermission","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetMySecurityPermission'
          }
      }
    )

    vars['connectionId1'] = jsonpath.query(
      response.json(),
      '$.data.getMyPermissionsFromSecurity[1].connectionId'
    )[0]

    response = http.options('https://api.star-pre.astra.co.id/graphql/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
      tags: {
        type: 'options'
      }
    })

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetInboxNotification {\\n  getInboxByLoginFromNotifications(order: {created: DESC}) {\\n    id\\n    category\\n    detail\\n    status\\n    messageContent\\n    icon\\n    created\\n    metadata {\\n      key\\n      value\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetInboxNotification","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetInboxNotification'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query getBookingCancelReasonList {\\n  getBookingCancelReasonFromBookings {\\n    value\\n    description\\n    __typename\\n  }\\n}\\n","operationName":"getBookingCancelReasonList","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetBookingCancelReasonList'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetDealerByIdFromWorkplace($DealerId: UUID!) {\\n  getDealerByIdFromWorkplace(Dealer: $DealerId) {\\n    id\\n    aHMCode\\n    dealerName\\n    operationalStartTime\\n    operationalEndTime\\n    typeChannel\\n    dealerCode\\n    customerNo\\n    mainDealerId\\n    __typename\\n  }\\n}\\n","operationName":"GetDealerByIdFromWorkplace","variables":{"DealerId":""}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetDealerByIdFromWorkplace'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetBookingSlotInformationFromResourceMgmt($dealerId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {\\n  getBookingSlotInformationFromResourceMgmt(\\n    input: {dealerId: $dealerId, startDate: $startDate, endDate: $endDate}\\n  ) {\\n    date\\n    items {\\n      time\\n      totalBooking\\n      totalPitAvailable\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingSlotInformationFromResourceMgmt","variables":{"dealerId":"","startDate":"2022-06-19","endDate":"2022-06-25"}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetBookingSlotInformationFromResourceMgmt'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetBookingListFromBookings($BookingDate: Date!, $BookingTime: TimeSpan, $DealerId: UUID!) {\\n  getBookingListFromBookings(\\n    input: {bookingDate: $BookingDate, bookingTime: $BookingTime, dealerId: $DealerId}\\n    where: {documentStatus: {neq: CANCELLED}}\\n  ) {\\n    id\\n    dealerId\\n    dealerCode\\n    bookingDate\\n    bookingTime\\n    customerNo\\n    customerName\\n    customerMobilePhoneNumber\\n    plateNumber\\n    totalSlotDuration\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingListFromBookings","variables":{"BookingDate":"2022-06-21","DealerId":""}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetBookingListFromBookings'
          }
      }
    )

    response = http.options('https://api.star-pre.astra.co.id/graphql/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
      tags: {
        type: 'options'
      }
    })

    response = http.post(
      'https://identity.star-pre.astra.co.id/connect/token',
      {
        grant_type: 'refresh_token',
        refresh_token: 'C1BBC2C62DE52300A7860C22912AD16175D104A1FA01E3FC3E3FA41071973045-1',
        scope: 'openid profile email offline_access star_api',
        client_id: 'star_api',
      },
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/x-www-form-urlencoded',
          dnt: '1',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'postConnectToken'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetDealerByIdFromWorkplace(\$DealerId: UUID!) {\\n  getDealerByIdFromWorkplace(Dealer: \$DealerId) {\\n    id\\n    aHMCode\\n    dealerName\\n    operationalStartTime\\n    operationalEndTime\\n    typeChannel\\n    dealerCode\\n    customerNo\\n    mainDealerId\\n    __typename\\n  }\\n}\\n","operationName":"GetDealerByIdFromWorkplace","variables":{"DealerId":"${vars['connectionId1']}"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetDealerByIdFromWorkplace'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetBookingSlotInformationFromResourceMgmt(\$dealerId: UUID!, \$startDate: DateTime!, \$endDate: DateTime!) {\\n  getBookingSlotInformationFromResourceMgmt(\\n    input: {dealerId: \$dealerId, startDate: \$startDate, endDate: \$endDate}\\n  ) {\\n    date\\n    items {\\n      time\\n      totalBooking\\n      totalPitAvailable\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingSlotInformationFromResourceMgmt","variables":{"dealerId":"${vars['connectionId1']}","startDate":"2022-06-19","endDate":"2022-06-25"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetBookingSlotInformationFromResourceMgmt'
          }
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetBookingListFromBookings(\$BookingDate: Date!, \$BookingTime: TimeSpan, \$DealerId: UUID!) {\\n  getBookingListFromBookings(\\n    input: {bookingDate: \$BookingDate, bookingTime: \$BookingTime, dealerId: \$DealerId}\\n    where: {documentStatus: {neq: CANCELLED}}\\n  ) {\\n    id\\n    dealerId\\n    dealerCode\\n    bookingDate\\n    bookingTime\\n    customerNo\\n    customerName\\n    customerMobilePhoneNumber\\n    plateNumber\\n    totalSlotDuration\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingListFromBookings","variables":{"BookingDate":"2022-06-21","DealerId":"${vars['connectionId1']}"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetBookingListFromBookings'
          }
      }
    )

    response = http.get('https://identity.star-pre.astra.co.id/connect/userinfo', {
      headers: {
        accept: 'application/json, application/jwt',
        authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE2NiwiaWF0IjoxNjU1ODAzMTY2LCJleHAiOjE2NTgzOTUxNjYsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDE4OUM0MTA4RjNEMkE2MUExOTZFQjM5MzU5QzJEN0QifQ.LmMEMbGLbaVfge6MdUSC9hz-M3mOdwRSUweTLmTW2V-7lnmGqWJOmkElo1i1-Bfe4DV7HENtq-h14ItHJ8tmPaQjRltuyPW2YsU8jUYi3a6Alp3ZgXJ4pKFdsFWSO5RD3dW7o6ZgCNhWNR-7QXZTZb-QH--W5mJtd2eiJQw95cTjAvbw1sR7LNHpx0f8bvE3kBScAbBfW2X7YfxtXEn-RyQjsEpvfkjLKWkUiJeG3nrW8NsYc1s3_bpao3xPuO44ujshFTyO0Y-vOLD4HUqCg8x5lmATt4CN6VN9y-PU3HBymFjKrg-ZABKNYRF8De7-a9y9gTNiIcBUFtey1WBF5w',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
      tags: {
        type: 'getConnectUserInfo'
      }
    })

    response = http.options('https://identity.star-pre.astra.co.id/connect/userinfo', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
      tags: {
        type: 'optionsConnectUserInfo'
      }
    })
    sleep(1.1)

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetMySecurityPermission {\\n  getMyPermissionsFromSecurity {\\n    service\\n    roleName\\n    roleId\\n    connectionId\\n    connectionType\\n    permissions\\n    __typename\\n  }\\n}\\n","operationName":"GetMySecurityPermission","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwMzE0NCwiaWF0IjoxNjU1ODAzMTQ0LCJleHAiOjE2NTgzOTUxNDQsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNDk0QkMwM0JBMUJDNkRCMTc3OTVENjEzQzNDNEQ5RUUifQ.aVfWy_K6X3PtI9jB0jMeAtzFsrj1EJFRDsV1Vz9VpDLwR0wR5z9HD-9Cs7XODHQxOQgMjQEJTNEnLihS0rZxCJrAVNUXhRghDPKQWonv3I1x1M0hJyIIbkswcM0n7CZ8snzkqZ5mKSLQUEOEFVRaGAOs2IGRasmSw6xic0XV_oEq19LNaH6z9SUP0x6MLwBgs6pYfN4uJW7vFThRleOl7wM7GZfoaPxINsXP4aCjxJPphHmAjP-KXJD6_dGwiWV-2ktkk_V6zdVleYBf2EkBOPnDgEj3xrBDDcbdeibmeL2HiZBJFsP9HP9fel1ncYJfKQb4sSSmHNJ0_muOcEAa-w',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
        tags: {
            type: 'queryGetMySecurityPermission'
          }
      }
    )
  })
}

export function handleSummary(data) {
    return {
        "summaryViewJadwalBooking.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}