import React, {useState} from 'react'
import styled from 'styled-Components';
import {Link} from 'react-router-dom';
import {FiAirplay} from 'react-icons/fi';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
background:  #ffffff;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const sidebar = styled.nav`
background: #ffffff;
width: 250px;
height: 100vh;
display: flex; 
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%
`;

    const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
   
    return (
    <>
    <Nav>
        <NavIcon to="#">
            <FaIcons.FaBars  onClick={showSidebar} />
        </NavIcon>
    </Nav>
    <SidebarNav>
        <SidebarWrap>
        <NavIcon to="#">
            <FaIcons.FaOutlineClose onClick={showSidebar}
             />

        </NavIcon>
        {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
        })}
        </SidebarWrap>
    </SidebarNav>
    </>
    );
};

export default Sidebar;