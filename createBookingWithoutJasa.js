// Creator: k6 Browser Recorder 0.6.2

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
    thresholds: {
        'http_req_duration{type:mutationCreateBookingDraft}': ['avg<500'],
        'http_req_duration{type:queryGetListUnitTypeBooking}': ['avg<500'],
        'http_req_duration{type:queryGetListUnitTypeColorBooking}': ['avg<500'],
        'http_req_duration{type:querygetServiceHistoryList}': ['avg<500'],
        'http_req_duration{type:queryGetHoursServiceListBooking}': ['avg<500'],
        'http_req_duration{type:mutationRequestSlotForBookingFromResourceMgmt}': ['avg<500'],
        'http_req_duration{type:mutationUpdateBooking}': ['avg<500'],
        'http_req_duration{type:querygetBookingCancelReasonList}': ['avg<500'],
        'http_req_duration{type:queryGetBookingSlotInformationFromResourceMgmt}': ['avg<500'],
        'http_req_duration{type:queryGetBookingListFromBookings}': ['avg<500'],
        'http_req_duration{type:options}': ['avg<500'],
    }
}

export default function main() {
    let response

    const vars = {}

    group(
        'page_1 - https://www.star-pre.astra.co.id/servicemanagement/booking/create/new',
        function () {
            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"mutation createBookingDraft($input: BookingDraftInputFromBookings!) {\\n  createBookingDraftFromBookings(input: $input) {\\n    id\\n    documentNumber\\n    documentStatus\\n    __typename\\n  }\\n}\\n","operationName":"createBookingDraft","variables":{"input":{"dealerId":"8223d114-f364-4800-a703-84995f8d08b7","dealerCode":"04004","dealerName":"ASTRA MOTOR CILACAP","bookingType":"WALK_IN_AHASS","bookingSource":"WALK_IN","customerName":"FERGA DIPA","customerNo":"","customerAhmType":"REGULAR","customerMobilePhoneNumber":"08562337413","customerAddress":"JALAN GARDENA RAYA BLOK B7 NO.1B RT.7 RW.14, KEL.KOTABARU, BEKASI BARAT","customerEmail":"fergadipab@gmail.com"}}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'mutationCreateBookingDraft'
                    }
                }
            )

            vars['id'] = jsonpath.query(response.json(), '$.data.createBookingDraftFromBookings.id')[0]

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
                '{"query":"query GetListUnitTypeBooking {\\n  getAllUnitTypeFromInventory {\\n    id\\n    catalogueId\\n    catalogueCode\\n    commercialName\\n    threeDigitUnitType\\n    isBigBike\\n    __typename\\n  }\\n}\\n","operationName":"GetListUnitTypeBooking","variables":{}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'queryGetListUnitTypeBooking'
                    }
                }
            )

            vars['id3'] = jsonpath.query(response.json(), '$.data.getAllUnitTypeFromInventory[18].id')[0]

            // sleep(16.5)
            sleep(9)

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"query GetListUnitTypeColorBooking($catalogueUnitId: UUID!) {\\n  getAllUnitTypeColorFromInventory(\\n    where: {catalogueUnitId: {eq: $catalogueUnitId}}\\n  ) {\\n    id\\n    colorCode\\n    colorDescription\\n    __typename\\n  }\\n}\\n","operationName":"GetListUnitTypeColorBooking","variables":{"catalogueUnitId":"2d76eeca-5846-46bc-a529-fef5fce1c22b"}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'queryGetListUnitTypeColorBooking'
                    }
                }
            )

            vars['id2'] = jsonpath.query(
                response.json(),
                '$.data.getAllUnitTypeColorFromInventory[0].id'
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
            // sleep(9.1)
            sleep(2)

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"query getServiceHistoryList($machineNo: String!) {\\n  getServiceHistoryFromWorkshop(machineNo: $machineNo) {\\n    id\\n    documentNumber\\n    serviceDateTime\\n    dealerId\\n    dealerName\\n    serviceAdvisorAnalysis\\n    customerComplaints\\n    workTasks {\\n      workTaskId\\n      workTypeId\\n      workTypeDescription\\n      workTaskDescription\\n      taskPrice\\n      totalPrice\\n      workListParts {\\n        id\\n        catalogueId\\n        catalogueCode\\n        catalogueDesc\\n        quantity\\n        price\\n        totalPrice\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"getServiceHistoryList","variables":{"machineNo":"ABCDE1234567890"}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'querygetServiceHistoryList'
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
            // sleep(4.7)
            sleep(1)

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"query GetHoursServiceListBooking($dealerId: UUID!, $date: DateTime!, $bookingDuration: Int!) {\\n  getBookingAvailableServiceTimeFromResourceMgmt(\\n    input: {dealerId: $dealerId, date: $date, bookingDuration: $bookingDuration}\\n  ) {\\n    hour\\n    totalAvailable\\n    isEnable\\n    __typename\\n  }\\n}\\n","operationName":"GetHoursServiceListBooking","variables":{"dealerId":"8223d114-f364-4800-a703-84995f8d08b7","date":"2022-06-25","bookingDuration":0}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'queryGetHoursServiceListBooking'
                    }                    
                }
            )
            // sleep(14.4)
            sleep(7)

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                `{"query":"mutation RequestSlotForBookingFromResourceMgmt(\$dealerId: UUID!, \$bookingId: UUID!, \$date: DateTime!, \$bookingDuration: Int!) {\\n  requestSlotForBookingFromResourceMgmt(\\n    input: {dealerId: \$dealerId, bookingId: \$bookingId, date: \$date, bookingDuration: \$bookingDuration}\\n  ) {\\n    slotId\\n    startTime\\n    endTime\\n    pitType\\n    pitCode\\n    __typename\\n  }\\n}\\n","operationName":"RequestSlotForBookingFromResourceMgmt","variables":{"dealerId":"8223d114-f364-4800-a703-84995f8d08b7","bookingId":"${vars['id']}","date":"2022-06-25T08:00:00.000","bookingDuration":60}}`,
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'mutationRequestSlotForBookingFromResourceMgmt'
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
                'https://api.star-pre.astra.co.id/graphql/',
                `{"query":"mutation UpdateBooking(\$input: BookingInputFromBookings!) {\\n  updateBookingFromBookings(input: \$input) {\\n    id\\n    documentNumber\\n    documentDate\\n    documentStatus\\n    dealerId\\n    dealerCode\\n    dealerName\\n    bookingType\\n    bookingSource\\n    customerId\\n    customerNo\\n    customerName\\n    customerAhmType\\n    customerAddress\\n    customerEmail\\n    customerMobilePhoneNumber\\n    bookingWorkLists {\\n      workTaskId\\n      workTypeIsKPB\\n      workTaskCode\\n      workTaskDescription\\n      warrantyPeriod\\n      kilometerThreshold\\n      isWarranty\\n      difficultyFactor\\n      luxuryFactor\\n      regionFactor\\n      flatRate\\n      price\\n      discount\\n      bookingWorkListParts {\\n        catalogueId\\n        catalogueCode\\n        catalogueName\\n        catalogueDescription\\n        quantity\\n        totalQuantityBook\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"UpdateBooking","variables":{"input":{"id":"${vars['id']}","dealerId":"8223d114-f364-4800-a703-84995f8d08b7","dealerCode":"04004","dealerName":"ASTRA MOTOR CILACAP","bookingSource":"WALK_IN","bookingType":"WALK_IN_AHASS","customerId":null,"customerNo":"","customerName":"FERGA DIPA","customerAhmType":"REGULAR","customerAddress":"JALAN GARDENA RAYA BLOK B7 NO.1B RT.7 RW.14, KEL.KOTABARU, BEKASI BARAT","customerMobilePhoneNumber":"08562337413","customerEmail":"fergadipab@gmail.com","vehicleId":null,"plateNumber":"B1234KJK","vehicleOwnerName":"FERGA DIPA","kilometer":30000,"slotId":"5213d884-8730-4e22-fd7e-08da52658bde","catalogueUnitId":"${vars['id3']}","catalogueThreeDigitUnitType":"LN0","catalogueCode":"LN0","catalogueCommercialName":"SCOOPY SPORTY","catalogueUnitColorId":"${vars['id2']}","colorCode":"BK","colorDescription":"BLACK","frameNumber":"ABCDE1234567890","engineNumber":"ABCDE1234567890","bookingDate":"2022-06-25","bookingTime":"PT8H","serviceRecommedation":"","symptoms":"Stang goyang","totalPrice":0,"totalDiscount":0,"totalVATAmount":0,"totalTotalInclVAT":0,"totalSlotDuration":60,"bookingWorkLists":[]}}}`,
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'mutationUpdateBooking'
                    }
                }
            )
            // sleep(4.7)
            sleep(1)

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"query getBookingCancelReasonList {\\n  getBookingCancelReasonFromBookings {\\n    value\\n    description\\n    __typename\\n  }\\n}\\n","operationName":"getBookingCancelReasonList","variables":{}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
                        dnt: '1',
                        'content-type': 'application/json',
                        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"Linux"',
                    },
                    tags: {
                        type: 'querygetBookingCancelReasonList'
                    }
                }
            )

            response = http.post(
                'https://api.star-pre.astra.co.id/graphql/',
                '{"query":"query GetBookingSlotInformationFromResourceMgmt($dealerId: UUID!, $startDate: DateTime!, $endDate: DateTime!) {\\n  getBookingSlotInformationFromResourceMgmt(\\n    input: {dealerId: $dealerId, startDate: $startDate, endDate: $endDate}\\n  ) {\\n    date\\n    items {\\n      time\\n      totalBooking\\n      totalPitAvailable\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingSlotInformationFromResourceMgmt","variables":{"dealerId":"8223d114-f364-4800-a703-84995f8d08b7","startDate":"2022-06-19","endDate":"2022-06-25"}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
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
                '{"query":"query GetBookingListFromBookings($BookingDate: Date!, $BookingTime: TimeSpan, $DealerId: UUID!) {\\n  getBookingListFromBookings(\\n    input: {bookingDate: $BookingDate, bookingTime: $BookingTime, dealerId: $DealerId}\\n    where: {documentStatus: {neq: CANCELLED}}\\n  ) {\\n    id\\n    dealerId\\n    dealerCode\\n    bookingDate\\n    bookingTime\\n    customerNo\\n    customerName\\n    customerMobilePhoneNumber\\n    plateNumber\\n    totalSlotDuration\\n    __typename\\n  }\\n}\\n","operationName":"GetBookingListFromBookings","variables":{"BookingDate":"2022-06-21","DealerId":"8223d114-f364-4800-a703-84995f8d08b7"}}',
                {
                    headers: {
                        authorization:
                            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFEODJGREJGRTkxNERCRDY2QUUwNjhENEJCOURCRTlEIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnN0YXItcHJlLmFzdHJhLmNvLmlkLyIsIm5iZiI6MTY1NjUwMjc4MSwiaWF0IjoxNjU2NTAyNzgxLCJleHAiOjE2NTkwOTQ3ODEsImF1ZCI6InN0YXJfYXBpIiwiYW1yIjpbImV4dGVybmFsIl0sImF0X2hhc2giOiIxRC1VbGVXbDU2a2lwV0FvWFdJSDRRIiwic2lkIjoiMTUwMDZEQzI3NDY5RjU4MjIzNTAwOTVDRjE4RjBFRjAiLCJzdWIiOiJhMTI4NjA1Mjk1N2E0NDNjODIxNGRhOTQ0YTRjNjhmNCIsImF1dGhfdGltZSI6MTY1NjUwMjc3OSwiaWRwIjoiQXp1cmVCMkMifQ.n-CEcLKNfqpLVXYlfKQ9zee0rmbo0ISgnACGDCTIEch0UY63X9QSoz9wDWCMyPCFxConnEmKWFMzkCT8cOX_5iO85t1SKsR6GVY1QsaI-aIZnQ-b8DhH3QmqeXblcNiUsgplZQDzOXUm-eIomiY9OIUBrbf_sFEgbmaGKGrB7jY8qvXQR8aUI_WmSyNTHNUKbBDgPUhgByOchPIr-Xx4x-3yZR5cYuahc2rTKU99uk6yWxA1ULc3j7n9XkWIwAye2Tj69ghaTDtk75USE-ggWfH1A1ZGP10lAzi95CsHYPmYWaQzPdy48yOs1nwbuAJucAiKr1qQlXbCioMdd85XRAAiKr1qQlXbCioMdd85XRA',
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

        }
    )
}

export function handleSummary(data) {
    return {
        "summaryCreateBookingWithoutJasa.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}