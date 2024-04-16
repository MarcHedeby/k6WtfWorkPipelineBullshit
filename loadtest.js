import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
    let response = http.get('https://test-api.k6.io/public/crocodiles/');
    check(response, {
        'status is 200': (r) => r.status === 200,
        'transaction time is OK': (r) => r.timings.duration < 200
    });
    sleep(1);
}
