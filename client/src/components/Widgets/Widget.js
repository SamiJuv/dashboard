import { useSelector } from 'react-redux'
import WeatherWidget from './WeatherWidget/WeatherWidget'
import SunriseSunsetWidget from './SunriseSunsetWidget/SunriseSunsetWidget'

const Widget = ({ id, type }) => {
  const widgetData = useSelector(state => state.widgets.find(widget => widget.id === id));

  switch (type) {
    case 'weather':
      return <WeatherWidget data={widgetData} />

    case 'sunrise_sunset':
      return <SunriseSunsetWidget data={widgetData} />

    default:
      return null
  }
}

export default Widget