namespace bygspy_k6_test
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 3222222 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
