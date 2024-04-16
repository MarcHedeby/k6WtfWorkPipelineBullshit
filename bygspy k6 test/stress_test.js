const http = require('k6/http');
const { sleep, check } = require('k6');

export let options = {
    stages: [
        { duration: '10s', target: 1 },  // 10 seconds duration with 1 VU
        { duration: '10s', target: 1 },  // Another 10 seconds duration with 1 VU
        { duration: '10s', target: 0 }   // 10 seconds duration with 0 VU (ramp down)
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
    const baseUrl = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(baseUrl);

    const checkRes = check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(Math.random() * 3);
}
