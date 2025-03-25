import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MyPagePage = () => {
const navBarLink = 'bg-white text-pink-300 p-2 px-4 rounded-md font-bold hover:bg-white'

  return (
    <>
      <Metadata title="Adrianas Page" description="MyPage page" />
      <div className="flex min-h-screen flex-col">
        {/*Header*/}
        <div className="flex h-16 items-center justify-between bg-pink-300 px-4">
          <h1 className="text-2xl text-white font-bold">Pink Perfection</h1>
          {/* Navbar */}
          <div className="flex justify-end gap-2">
            <Link className={navBarLink} to={routes.home()}>home</Link>
          </div>
        </div>

        {/*Main Content*/}
        <div className="flex-grow p-4 bg-pink-400">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">
              Welcome to my page!!!! I will be adding more content here.
            </h1>
          </div>
        </div>

        {/*Footer */}
<div className="flex items-center justify-center bg-pink-500 p-4 text-white">
© {new Date().getFullYear()} - Pink Perfection
</div>
      </div>
    </>
  )
}

export default MyPagePage
