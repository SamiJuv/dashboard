import { useDispatch } from 'react-redux'
import { addWidget } from '../../../redux/widgets/widgetsSlice'

const LibraryItemContainer = ({ children, type }) => {
  const dispatch = useDispatch();

  const addWidgetHandler = () => {
    dispatch(addWidget(type))
  }
  
  return (
    <div className="mb-4 w-12 cursor-pointer" onClick={() => addWidgetHandler()}>
      {children}
    </div>
  )
}

export default LibraryItemContainer