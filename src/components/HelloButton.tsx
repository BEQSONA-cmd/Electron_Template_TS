import { useNavigate } from 'react-router-dom'

export function HelloButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/hello');
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Click Hello
      </button>
    </div>
  )
}