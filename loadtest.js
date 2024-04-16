
export default function () {
    const baseUrl = 'http://localhost:5080/weatherforecast';

    const resGetWeatherForecast = http.get(baseUrl);
    validateResponse(resGetWeatherForecast, 200);

    const invalidId = 'invalid-id';
    const resGetWeatherForecastInvalidId = http.get(`${baseUrl}/${invalidId}`);
    validateResponse(resGetWeatherForecastInvalidId, 404);


    sleep(Math.random() * 3);
}

function validateResponse(response, expectedStatusCode) {
    if (response.status === expectedStatusCode) {
        console.log(`Test Passed - Expected status code ${expectedStatusCode}`);
    } else {
        console.error(`Test Failed - Expected status code ${expectedStatusCode}, but received ${response.status}`);
    }
}
