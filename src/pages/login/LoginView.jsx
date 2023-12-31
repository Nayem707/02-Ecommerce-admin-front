import { Link, useNavigate } from 'react-router-dom';

const LoginView = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex items-center justify-center'>
      <div className='max-w-md w-full p-6 rounded-lg shadow-md border border-cyan-100'>
        <div className='flex justify-center mb-5 '>
          <img
            src='https://res.cloudinary.com/nayem490/image/upload/v1693437906/shop-logo_zlvemt.png'
            alt='Logo'
            className='w-30 h-20 rounded-full'
          />
        </div>
        <h1 className='text-2xl font-semibold text-center text-gray-500 mb-6'>
          Login
        </h1>
        <form>
          <div className='mb-4 '>
            <label className='block mb-2 text-sm text-gray-600'>Name</label>
            <input
              type='text'
              id='apellido'
              name='apellido'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-sm text-gray-600'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block mb-2 text-sm text-gray-600'>Password</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              required
            />
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            type='submit'
            className='w-32 bg-gradient-to-r bg-pink-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2'
          >
            Login
          </button>
        </form>
        <div className='text-center'>
          <p className='text-sm'>
            ¿You have no Account? Please!{' '}
            <Link to='/register' href='#' className='text-cyan-600'>
              Register
            </Link>
          </p>
        </div>
        <p className='text-xs text-gray-600 text-center mt-8'>
          &copy; 2023 NAYEM
        </p>
      </div>
    </div>
  );
};

export default LoginView;
