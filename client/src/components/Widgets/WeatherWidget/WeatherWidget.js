import WidgetContainer from '../Containers/WidgetContainer'

const WeatherWidget = ({ data }) => {
  console.log(data);
  return (
    <WidgetContainer>
      <h2>Weather</h2>
    </WidgetContainer>
  )
}

export default WeatherWidget