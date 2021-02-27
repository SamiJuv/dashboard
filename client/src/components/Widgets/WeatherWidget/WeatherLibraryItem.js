import LibraryItemContainer from '../Containers/LibraryItemContainer';
import Icon from './cloudy.svg'

const WeatherLibraryItem = () => (
  <LibraryItemContainer type='weather'>
    <img src={Icon} alt='Weather' />
  </LibraryItemContainer>
)

export default WeatherLibraryItem