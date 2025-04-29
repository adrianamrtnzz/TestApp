import { Metadata } from '@redwoodjs/web'

const MyPagePage = () => {
  return (
    <>
      <Metadata title="Adrianas Page" description="MyPage page" />

      {/*Main Content*/}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-white">
          Welcome to my page!!!! I will be adding more content here.
        </h1>
      </div>
    </>
  )
}

export default MyPagePage
