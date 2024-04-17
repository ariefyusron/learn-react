import { useNavigate, Outlet } from 'react-router-dom'

const TopNavigation = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <button
          className='border-[2px] border-black mt-[32px]'
          onClick={() => {
            navigate('/')
          }}
        >
          Home
        </button>

        <button
          className='border-[2px] border-black mt-[32px]'
          onClick={() => {
            navigate('/detail')
          }}
        >
          Detail
        </button>
      </div>

      <Outlet />
    </>
  )
};

export default TopNavigation;