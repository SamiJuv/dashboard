import { useForm } from 'react-hook-form'
import WidgetContainer from '../Containers/WidgetContainer'

const SunriseSunsetWidget = ({ data, updateSettings }) => {
  const { id, settings: widgetSettings } = data;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    const settings = {
      id: id,
      settings: formData
    }

    updateSettings(settings);
  };

  return (
    <WidgetContainer>
      <h2>Sunrise and sunset</h2>
      
      {widgetSettings && (
        <h3>{widgetSettings.city}</h3>
      )}

      {!widgetSettings && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='city'>City</label>
          <input name='city' ref={register} />
          <input type='submit' value='Save' />
        </form>
      )}

    </WidgetContainer>
  )
}

export default SunriseSunsetWidget