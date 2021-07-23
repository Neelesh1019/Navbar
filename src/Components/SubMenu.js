import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
display: flex; 
color: #e1e9fc;
justify content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
tect-decoration: none;
font-size: 18px;

&:hover {
    background: #252831;
    border-left: 4px solidm #634ce4;
    cursor: pointer;

}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;


const Submenu = ({ item }) => {
return (
    <>
    <SidebarLink to={item.path}>
      <div>
          (item.icon)
          <SidebarLabel>(item.title)</SidebarLabel>
          </div>  
    </SidebarLink>
    </>
);
};

export default Sidemenu