import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 200 },
        { duration: '4m', target: 200 },
        { duration: '1m', target: 800 },
        { duration: '4m', target: 800 },
        { duration: '1m', target: 1000 },
        { duration: '4m', target: 1000 },
        { duration: '4m', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(99)<100']
    }
  };
  
  export default function () {
    const url = 'http://localhost:8080/api/v3/pet/1'
    const response = http.get(url)
    check(response, { '200': (r) => r.status === 200 })
    sleep(1)
  }