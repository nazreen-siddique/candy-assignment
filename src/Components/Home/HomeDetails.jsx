import styled from "styled-components"
import Switch from "react-switch";
import { viewOptions } from "../../utils/utils.js";
import { useTable } from "react-table"
import { COLUMNS } from '../../utils/utils.js'

import { useEffect, useMemo, useState } from "react"
import { DebounceInput } from 'react-debounce-input';
import Chart from "./Chart.jsx";

const HomeDetails = ({ users }) => {
  const columns = useMemo(() => COLUMNS, []);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(users.filter(item => item.status === "Active")); ///Note=> By default we have to show the data which has status of active
  const [isInActive, setIsInActive] = useState({ checked: false });  /// false means now Active Status data we have to show
  const [isTable, setIsTable] = useState(true) ////The select dropdown containing the values of table and pie chart is handled from this state

  /////////Getting all the Data of table from useTable hook//////
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  //////////It filtered out the users data as the status of active and in Active//////
  const doFilterOfData = () => {
    try {
      let currentValue = "Active";
      if (isInActive.checked) {
        currentValue = "Inactive";
      }
      const filteredData = users.filter(item => item.status === currentValue);
      return filteredData;
    } catch (error) {
      console.log(error);
    }
  }
  /////handling the state of Active toggle button/////////
  const handleChange = (checked) => {
    setIsInActive({ checked });
  }

  ///////handling the state of select drop down//////
  const handleSelectChange = (e) => {
    try {
      let value = true;
      if (e.target.value === "Pie Chart") {
        value = false;
      }
      setIsTable(value)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setData(doFilterOfData());
    setSearchValue('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInActive]);

  useEffect(() => {
    if (!!searchValue) {
      let iterableData = data;
      if (iterableData.length === 0) {
        iterableData = doFilterOfData()
      }
      const value = iterableData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      setData(value);
    } else {
      setData(doFilterOfData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])


  return (
    <>
      <WrapHead>
        <div className="header">
          <div className="title">Employee's</div>
          {
            isTable && (<div className="search-section">
              <label htmlFor="searchLabel" className="search-label">Search Employee Name</label>
              <DebounceInput
                minLength={1}
                debounceTimeout={1000}
                placeholder="Eg. John"
                className="search-input"
                id="searchLabel"
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
              />
            </div>)
          }

          <div className="parent-control-section">
            <div className="select-section">
              <span className="select-label" >View</span>
              <select onChange={(e) => handleSelectChange(e)} className="select-tag">
                {
                  viewOptions.map((item) => {
                    return (
                      <option value={item.text} key={item.id}>{item.text}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="status">
              <span>Active</span>
              <div className="example">
                <label htmlFor="material-switch">
                  <Switch
                    checked={isInActive.checked}
                    onChange={handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#ef4336"
                    handleDiameter={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={10}
                    width={30}
                    className="react-switch"
                    id="material-switch"
                  />
                </label>
              </div>
              <span>Inactive</span>
            </div>

          </div>
        </div>
      </WrapHead>

      {
        isTable ? (
          ((!searchValue || (!!searchValue && data.length > 0))) ? (<Wrapper>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </Wrapper>) :
            (<div className="no-info-data">
              NO DATA FOUND
            </div>)
        )
          :
          (<Chart chartData={doFilterOfData()} />)
      }
    </>
  )

}

export default HomeDetails
const Wrapper = styled.div`

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:hover {
  background-color:var(--grey-navbar);
  color:black;
  opacity:0.5;
cursor:pointer}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color:var(--grey-100);
  color: white;
}

@media screen and (max-width: 768px) and (min-width :500px ){
  table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
  table td, table th {
  border: 1px solid #ddd;
  padding: 2px;
  font-size:10px
}
table th {
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  // background-color: #04AA6D;
  color: white;
}
}

@media screen and (max-width: 499px) {
  table td, table th {
    border: 1px solid #ddd;
    padding: 1px;
    font-size:6px
  }
}


`
const WrapHead = styled.div`
.header{
  display :flex;
  justify-content :space-between;
  margin:1rem
}
.status{
  display:flex;
  justify-content:center;
  align-items:center

}
.example{
  margin : auto 0.5rem;
  
}
.select-label{
  margin-right : 1rem
}
.select-section{
  margin-right :1rem;
  display:flex;
  align-items:center
}
@media screen and (max-width :500px){
  .header{
    margin:0.5rem;
    font-size:0.8rem
  }
  .example{
    margin:auto 0.3rem
  }
}


.search-input {
    width: 8rem;
    border-radius: 0.2rem;
    margin-left: 0.8rem
}

.parent-control-section {
    display: flex;
    align-item :center
}

.margin-right-1rem {
    margin-right: 1rem;
}
@media screen and (max-width :768px){
  .header{
    display :flex;
    flex-direction :column;
    font-size : 0.7rem;
  }
  .header > div {
    margin-bottom :0.6rem
  }
  .search-input {
    height: 1rem;
    width:40%
}
.select-tag{
    height: 1rem;
  margin-right:2rem


 
}
.search-label{
  margin-right:2rem
}
.select-label{
  margin-right:0.5rem
}

} 

`
