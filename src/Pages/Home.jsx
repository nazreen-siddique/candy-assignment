import SharedLayout from "../Components/SharedLayout"
import HomeTab from "../Components/Home/HomeTab";
const Home = () => {
  return (
    <div>
      <SharedLayout data={<HomeTab />} />
    </div>
  )
}

export default Home