import Loading from 'react-loading'

const LoadingElement = () => {
     return (
          <div className='h-full pt-10 flex justify-center w-full'>
               <Loading type="cylon" color="#ffffff" height={50} width={50} />
          </div>
     )
}

export default LoadingElement