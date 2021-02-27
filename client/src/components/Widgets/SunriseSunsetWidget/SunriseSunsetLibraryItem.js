import LibraryItemContainer from '../Containers/LibraryItemContainer';
import Icon from './sunrise.svg'

const SunriseSunsetLibraryItem = () => (
  <LibraryItemContainer type='sunrise_sunset'>
    <img src={Icon} alt="Sunrise and sunset" />
  </LibraryItemContainer>
)

export default SunriseSunsetLibraryItem