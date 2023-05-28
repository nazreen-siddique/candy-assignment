import SharedLayout from "../Components/SharedLayout"
import CategoryTabs from "../Components/Category/CategoryTabs"
const Category = () => {
  return (
    <div>
      <SharedLayout data={<CategoryTabs />} />
    </div>
  )
}

export default Category