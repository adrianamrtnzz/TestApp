import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navBarLink =
    'bg-white text-pink-300 p-2 px-4 rounded-md font-bold hover:bg-white'

  return (
    <>
      <Metadata title="Adrianas Page" description="MyPage page" />
      <div className="flex min-h-screen flex-col">
        {/*Header*/}
        <div className="flex h-16 items-center justify-between bg-pink-300 px-4">
          <h1 className="animate-text bg-gradient-to-r from-white via-pink-800 to-pink-500 bg-clip-text text-4xl font-black text-transparent">
            Pink Perfection
          </h1>
          {/* Navbar */}
          <div className="flex justify-end gap-2">
            <Link className={navBarLink} to={routes.home()}>
              home
            </Link>
          </div>
        </div>

        {/*Main Content*/}
        <div className="flex-grow bg-pink-400 p-4">{children}</div>

        {/*Footer */}
        <div className="flex items-center justify-center bg-pink-500 p-4 text-white">
          © {new Date().getFullYear()} - Pink Perfection
        </div>
      </div>
    </>
  )
}

export default MainLayout
