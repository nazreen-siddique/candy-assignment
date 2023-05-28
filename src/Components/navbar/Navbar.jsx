import { useState } from "react"
import styled from "styled-components"

const Navbar = ({ handleSideBar }) => {
  return (
    <Wrapper >
      <div className={'navbar '}>

        <div className={`hamburger`} onClick={() => handleSideBar()}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <div className="title">Syncoffice</div>

      </div>


    </Wrapper>
  )
}

export default Navbar
const Wrapper = styled.div`
.navbar{
    background-color:var(--grey-navbar);
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
   
}

.title{
  margin : 0 auto
}
 .hamburger {
        width: 30px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
      margin-left:0.5rem;
      display : none
  }
@media screen and (max-width : 786px){
  .hamburger{
    display:flex;
  }
}
 span {
          width: 100%;
          height: 3px;
          background-color: white;
        }
       


        
}
`