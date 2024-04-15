import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 1 }, 
        { duration: '3m', target: 1 }, 
        { duration: '1m', target: 0 }    
    ],
    thresholds: {
        http_req_duration: ['p(95)<10'], 
        http_req_failed: ['rate<0.01']     
    }
};

export default function () {
    const baseUrl = 'http://localhost:5080/weatherforecast';

    const res = http.get(baseUrl);

    const checkRes = check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(Math.random() * 3);
}
