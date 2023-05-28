import styled from "styled-components";
import Sidebar from './Sidebar/Sidebar'
import Navbar from './navbar/Navbar';
import { useState } from "react";

const SharedLayout = ({ data }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Wrapper>
      <div className='dashboard'>
        <Navbar handleSideBar={handleSideBar} />

        <div className="layout">
          <Sidebar sidebarOpen={sidebarOpen} />
          <div className="box">
            {data}
          </div>
        </div>
      </div>
    </Wrapper>

  )
}

export default SharedLayout
const Wrapper = styled.div`
.layout{
  display:flex;
}
.box{
  background:var(--bck-color);
  color:black;
  width:85vw;
  max-height: calc(100vh - 4rem);
  padding:0.4rem;
  overflow-y : scroll;
   scrollbar-width: thin;
}
@media screen and (max-width : 992px){
  .box{
    width:100vw
  }
}
.topbar {
  display:flex;
  justify-content : space-between
}
.left{
  display:flex;
  justify-content:space-around
}

`
