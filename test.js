// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

// export const options = { vus: 10, duration: '5m' }

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
    })
    sleep(12.1)

    response = http.get('https://identity.star-pre.astra.co.id/.well-known/openid-configuration', {
      headers: {
        accept: 'application/jwk-set+json, application/json',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    sleep(0.6)

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetMySecurityPermission {\\n  getMyPermissionsFromSecurity {\\n    service\\n    roleName\\n    roleId\\n    connectionId\\n    connectionType\\n    permissions\\n    __typename\\n  }\\n}\\n","operationName":"GetMySecurityPermission","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
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
    })

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetInboxNotification {\\n  getInboxByLoginFromNotifications(order: {created: DESC}) {\\n    id\\n    category\\n    detail\\n    status\\n    messageContent\\n    icon\\n    created\\n    metadata {\\n      key\\n      value\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetInboxNotification","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query getBookingCancelReasonList {\\n  getBookingCancelReasonFromBookings {\\n    value\\n    description\\n    __typename\\n  }\\n}\\n","operationName":"getBookingCancelReasonList","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetDealerByIdFromWorkplace($DealerId: UUID!) {\\n  getDealerByIdFromWorkplace(Dealer: $DealerId) {\\n    id\\n    aHMCode\\n    dealerName\\n    operationalStartTime\\n    operationalEndTime\\n    typeChannel\\n    dealerCode\\n    customerNo\\n    mainDealerId\\n    __typename\\n  }\\n}\\n","operationName":"GetDealerByIdFromWorkplace","variables":{"DealerId":""}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetBookingSlotInformationFromResourceMgmt($dealerId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {\\n  getBookingSlotInformationFromResourceMgmt(\\n    input: {dealerId: $dealerId, startDate: $startDate, endDate: $endDate}\\n  ) {\\n    date\\n    items {\\n      time\\n      totalBooking\\n      totalPitAvailable\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingSlotInformationFromResourceMgmt","variables":{"dealerId":"","startDate":"2022-06-19","endDate":"2022-06-25"}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
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
    })

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetBookingListFromBookings($BookingDate: Date!, $BookingTime: TimeSpan, $DealerId: UUID!) {\\n  getBookingListFromBookings(\\n    input: {bookingDate: $BookingDate, bookingTime: $BookingTime, dealerId: $DealerId}\\n    where: {documentStatus: {neq: CANCELLED}}\\n  ) {\\n    id\\n    dealerId\\n    dealerCode\\n    bookingDate\\n    bookingTime\\n    customerNo\\n    customerName\\n    customerMobilePhoneNumber\\n    plateNumber\\n    totalSlotDuration\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingListFromBookings","variables":{"BookingDate":"2022-06-21","DealerId":""}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
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
    })

    response = http.options('https://api.star-pre.astra.co.id/graphql/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.options('https://api.star-pre.astra.co.id/graphql/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.options('https://api.star-pre.astra.co.id/graphql/', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.post(
      'https://identity.star-pre.astra.co.id/connect/token',
      {
        grant_type: 'refresh_token',
        refresh_token: '7AD2D069591274ABFE724FFFE4182EC993F4B9ECD827944619B5A5F4BBDE57FB-1',
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
      }
    )
    sleep(0.5)

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetDealerByIdFromWorkplace(\$DealerId: UUID!) {\\n  getDealerByIdFromWorkplace(Dealer: \$DealerId) {\\n    id\\n    aHMCode\\n    dealerName\\n    operationalStartTime\\n    operationalEndTime\\n    typeChannel\\n    dealerCode\\n    customerNo\\n    mainDealerId\\n    __typename\\n  }\\n}\\n","operationName":"GetDealerByIdFromWorkplace","variables":{"DealerId":"${vars['connectionId1']}"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetBookingSlotInformationFromResourceMgmt(\$dealerId: UUID!, \$startDate: DateTime!, \$endDate: DateTime!) {\\n  getBookingSlotInformationFromResourceMgmt(\\n    input: {dealerId: \$dealerId, startDate: \$startDate, endDate: \$endDate}\\n  ) {\\n    date\\n    items {\\n      time\\n      totalBooking\\n      totalPitAvailable\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingSlotInformationFromResourceMgmt","variables":{"dealerId":"${vars['connectionId1']}","startDate":"2022-06-19","endDate":"2022-06-25"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      `{"query":"query GetBookingListFromBookings(\$BookingDate: Date!, \$BookingTime: TimeSpan, \$DealerId: UUID!) {\\n  getBookingListFromBookings(\\n    input: {bookingDate: \$BookingDate, bookingTime: \$BookingTime, dealerId: \$DealerId}\\n    where: {documentStatus: {neq: CANCELLED}}\\n  ) {\\n    id\\n    dealerId\\n    dealerCode\\n    bookingDate\\n    bookingTime\\n    customerNo\\n    customerName\\n    customerMobilePhoneNumber\\n    plateNumber\\n    totalSlotDuration\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingListFromBookings","variables":{"BookingDate":"2022-06-21","DealerId":"${vars['connectionId1']}"}}`,
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(4.3)

    response = http.get('https://identity.star-pre.astra.co.id/connect/userinfo', {
      headers: {
        accept: 'application/json, application/jwt',
        authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTE2MSwiaWF0IjoxNjU1ODA1MTYxLCJleHAiOjE2NTgzOTcxNjEsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiNUJFRjY1OTU5MTE3MzI2REE3NEQ2MURDQ0U4MzEzNzkifQ.jbDYvMmqB_CjLKrAPzwPwvZcp-Cx_AESd7O9LwodTmsSTl_lqgKP0utbtE32riQdhsLUCYvqIwTLbNSxAmjKl4UgsmlAE7w65Cz1TLZgS-3eXk3PcfHJTkRt0Q8iXd830HvUWf_wVrQZGSCL5FocA6gB6pH9P7MAVQh982qum_SxVUVsNw9mKTETQ9lM99BxyJFe7T4WrfP9sgxQIdRuapFhtuPZhjI8piGIPGMpUgulh64m7z5_vmNvqh5KQ6eooiJXdIU0MMMtN92_uF3yvlUGCYj3hRjcTExBox1IuBflIgUwqbCQsGru_gOPxMwZJ6Z3B2wzLppwQY_ZpYKRFw',
        dnt: '1',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.options('https://identity.star-pre.astra.co.id/connect/userinfo', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization',
        'access-control-request-method': 'GET',
        origin: 'https://www.star-pre.astra.co.id',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(2.2)

    response = http.post(
      'https://api.star-pre.astra.co.id/graphql/',
      '{"query":"query GetMySecurityPermission {\\n  getMyPermissionsFromSecurity {\\n    service\\n    roleName\\n    roleId\\n    connectionId\\n    connectionType\\n    permissions\\n    __typename\\n  }\\n}\\n","operationName":"GetMySecurityPermission","variables":{}}',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NTgwNTEyOCwiaWF0IjoxNjU1ODA1MTI4LCJleHAiOjE2NTgzOTcxMjgsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsInN0YXJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImV4dGVybmFsIl0sImNsaWVudF9pZCI6InN0YXJfYXBpIiwic3ViIjoiMzA4N2FkY2I5MjQ0NDMxY2EzZjk4YjMwZWM5NDIyMzUiLCJhdXRoX3RpbWUiOjE2NTU3OTY5NjUsImlkcCI6IkF6dXJlQjJDIiwibmFtZSI6InBhcnRjb3VudGVyMDQwMDQiLCJnaXZlbm5hbWUiOiJwYXJ0Y291bnRlcjA0MDA0Iiwic3VybmFtZSI6IiIsImVtYWlsIjoiIiwicm9sZXMiOiJbe1wiSWRcIjpcIjVkOGQ3NDU1ZjM4NTQ2ODdiMWI4OGFkNDE5YjY0MmVlXCIsXCJDb25uZWN0aW9uVHlwZVwiOlwiQnVzaW5lc3NBcmVhXCIsXCJDb25uZWN0aW9uSWRcIjpcIjgyMjNkMTE0ZjM2NDQ4MDBhNzAzODQ5OTVmOGQwOGI3XCJ9XSIsInNpZCI6IjI2OTNGNTM2RUJCOTM5N0EyQTg0MzRBOUE2QkM3MkFBIiwianRpIjoiRTAxMjNEQTQ5RUIxODNDNEMzOUIwNEFCRDBENDk5QzIifQ.TpleffU0W13D6NU_0g9J_yClvziMOYRi-xSachVE_OIxj3y7bwWJsZdaq9jr5JpUZB8C6InQiw8r1NJY935VU0mBuUr91Irl-7UtzI3Ynf7SbMBmntVNrEHEhaSnqNuoPCThaNxV8Y76H-Pu6C0_60EbfYuHESDdOzS2kgduOZWf3nTEDnUhCxNLC2i09cOG6LJjX86B6Noh6vXf7oGUHIGn6Gpam31bWFW_mvti14_6zA26EXfwG_LvIRElsZ2llCCKgQ79FeQ-3rwSaK0_U2a6VNfEaMICdwC9CA8Zne0_MQsdPS06PmRqKinuMoFuFDVBspImFKt523nGvP7EdA',
          dnt: '1',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
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
    })
  })
}