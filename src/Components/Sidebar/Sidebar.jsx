import styled from 'styled-components'
import NavLinks from './Navlinks.jsx'
// 'sidebar + (sidebarOpen && showSidebar)'
const Sidebar = ({ sidebarOpen }) => {

  return (
    <Wrapper>
      <div>{sidebarOpen}</div>
      <div className={`${sidebarOpen ? 'smallScreen' : 'bigScreen sidebar'}`}>
        <NavLinks className='content' />
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`

.sidebar{
    min-height:calc(100vh - 4rem);
    background-color:var(--grey-sidebar);
    width: 15vw;
}
@media screen and (max-width :992px){
  .sidebar{
    display:none
  }
}

.smallScreen{
  min-height:calc(100vh - 4rem);
  background-color:var(--grey-sidebar);
  width: 15vw;
  position:absolute;
  top: 4rem;
  left:0rem;
  display:flex;
  transition: all 0.7s linear;
}

@media screen and (min-width :992px){
  .smallScreen{
    position: static;
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  width: 15vw;
}
.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  padding-left: 3rem !important ;
  border:1px solid black;
  color :black   ;
  text-decoration:none;
  padding:0.5rem;
  font-size:15px;
  min-height:4rem;
}
    
    
  @media screen and (max-width: 768px) and (min-width :500px ){
    .nav-link{
      font-size:12px;
      padding:0.8rem !important;
      min-height:2rem;
    }
  }

@media screen and (max-width: 499px) {
  .nav-link{
      font-size:8px;
      padding:0.2rem;
      padding-left:0.2rem !important;
      min-height:1rem;
    }
}
    .active {
      color:white;
      background:black;
    }
    .showSidebar{
      display:none
    }
  
`