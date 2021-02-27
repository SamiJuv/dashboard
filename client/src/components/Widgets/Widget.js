import WeatherWidget from './WeatherWidget/WeatherWidget'
import SunriseSunsetWidget from './SunriseSunsetWidget/SunriseSunsetWidget'

const Widget = ({ type }) => {
  switch (type) {
    case 'weather':
      return <WeatherWidget />

    case 'sunrise_sunset':
      return <SunriseSunsetWidget />

    default:
      return null
  }
}

export default Widget