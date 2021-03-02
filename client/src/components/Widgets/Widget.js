import { useSelector, useDispatch } from 'react-redux'
import { updateSettings } from '../../redux/widgets/widgetsSlice'
import WeatherWidget from './WeatherWidget/WeatherWidget'
import SunriseSunsetWidget from './SunriseSunsetWidget/SunriseSunsetWidget'

const Widget = ({ id, type }) => {
  const dispatch = useDispatch();
  const widgetData = useSelector(state => state.widgets.find(widget => widget.id === id));

  const updateSettingsHandler = (data) => {
    dispatch(updateSettings(data))
  }

  switch (type) {
    case 'weather':
      return <WeatherWidget data={widgetData} updateSettings={updateSettingsHandler} />

    case 'sunrise_sunset':
      return <SunriseSunsetWidget data={widgetData} updateSettings={updateSettingsHandler} />

    default:
      return null
  }
}

export default Widget