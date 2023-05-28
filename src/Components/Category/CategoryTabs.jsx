import { useState, useEffect } from "react"
import { categories } from "../../utils/utils"
import Cards from './Cards';
import Loading from "../Loading";

const CategoryTabs = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [currentId, setCurrentId] = useState(categories[0].id)

    const fetchData = async (endpoint) => {
        try {
            setLoading(true);
            const resp = await fetch(`/.netlify/functions/${endpoint}`)
            const { data } = await resp.json()
            if (data) {
                setData(data[endpoint]);
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData('departmentData')
    }, [])

    const handleCategory = (event) => {
        try {
            const focusedElement = event.target;
            if (!focusedElement) {
                console.log("no element found");
                return;
            }

            const focusedID = focusedElement.dataset.id;
            const focusedItem = categories.find((item) => item.id === parseInt(focusedID));

            if (focusedItem) {
                setCurrentId(focusedItem.id);
                fetchData(focusedItem.apiEndPoint)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="d-flex margin-pt5-rem border-1px-black" onClick={(e) => handleCategory(e)}>
            {categories.map((item) => {
                const { id, text } = item
                return (
                    <div key={id} data-id={id} className={`margin-1-rem font-size-pt7-rem cursor-pointer ${currentId === id && 'activeCategory'}`} >
                        {text.toUpperCase()}
                    </div>
                )
            })}
        </div>
        {!loading ? <Cards data={data} /> : < Loading />}
    </>
    )
}

export default CategoryTabs