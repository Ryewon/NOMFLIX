import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color : white;
    position : fixed;
    top : 0;
    left : 0;
    width : 100%;
    height : 50px;
    display : flex;
    align-items : center;
    padding : 0px 10px;
    background-color : rgba(20, 20, 20, 0.8);
    z-index : 10;
    box-shadow : 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display : flex;
    /* &:hover {
        background-color : blue;
    } */
`;

const Item = styled.li`
    width : 50px;
    height : 50px;
    /* &:not(::last-child){
        margin-right : 10px;
    } */
    text-align : center;
    border-bottom : 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition : border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export default withRouter(({ location : { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));


// export default withRouter(props => (
//     <Header>
//         <List>
//             <Item current={false}>
//                 <SLink to="/">Movies</SLink>
//             </Item>
//             <Item current={true}>
//                 <SLink to="/tv">TV</SLink>
//             </Item>
//             <Item current={false}>
//                 <SLink to="/search">Search</SLink>
//             </Item>
//         </List>
//     </Header>
// ));

// 위, 아래 소스 같은 의미

// const HeaderC = (props) => (
//     <Header>
//         {console.log(props)}
//         <List>
//             <Item current={false}>
//                 <SLink to="/">Movies</SLink>
//             </Item>
//             <Item current={true}>
//                 <SLink to="/tv">TV</SLink>
//             </Item>
//             <Item current={false}>
//                 <SLink to="/search">Search</SLink>
//             </Item>
//         </List>
//     </Header>
// );

// export default withRouter(HeaderC);