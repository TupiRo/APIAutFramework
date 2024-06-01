import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 200 },
        { duration: '8m', target: 200 },
        { duration: '2m', target: 0 }
    ],
  };
  
  export default function () {
    const url = 'http://localhost:8080/api/v3/store/order/1'
    http.get(url)
    sleep(1)
  }