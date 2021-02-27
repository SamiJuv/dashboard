import Widget from '../Widgets/Widget'
import { useSelector } from 'react-redux'

const Main = () => {
  const widgets = useSelector(state => state.widgets)
  console.log(widgets);

  return (
    <div className="flex-grow mt-36 mx-20">
      <div className="flex flex-wrap">
        {widgets && (
          widgets.map(widget => (
            <Widget type={widget.type} key={widget.weight} />
          ))
        )}
      </div>
    </div>
  )
}

export default Main