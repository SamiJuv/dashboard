import Widget from '../Widgets/Widget'
import { useSelector } from 'react-redux'

const Main = () => {
  const widgets = useSelector(state => state.widgets)

  return (
    <div className="flex-grow mt-36 mx-20">
      <div className="flex flex-wrap">
        {widgets && (
          widgets.map(widget => (
            <Widget id={widget.id} type={widget.type}  key={widget.id} />
          ))
        )}
      </div>
    </div>
  )
}

export default Main