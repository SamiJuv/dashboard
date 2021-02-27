import { useForm } from 'react-hook-form'
import WidgetContainer from '../Containers/WidgetContainer'

const SunriseSunsetWidget = ({ data }) => {
  const { city } = data;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <WidgetContainer>
      <h2>Sunrise and sunset</h2>
      
      {city && (
        <h3>{city}</h3>
      )}

      {!city && (
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