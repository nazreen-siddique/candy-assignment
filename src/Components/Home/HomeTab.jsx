import HomeDetails from "./HomeDetails"
import { useEffect, useState } from "react";
import Loading from '../Loading';

const HomeTab = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const resp = await fetch('/.netlify/functions/employeeData')
      const { data } = await resp.json()
      if (data) {
        setUsers(data.employeeData)
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return (<Loading />)
  }

  return (<HomeDetails users={users} />)
}

export default HomeTab
