/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom' 

const Logo = () => {
  const navigate = useNavigate()

  return (
    <>
      <a onClick={() => navigate('/')} className="cursor-pointer flex items-center py-4 px2">
        <img src="/logo192.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-orange-600 text-lg uppercase">
          todo app
        </span>
      </a>
    </>
  )
}

export default Logo