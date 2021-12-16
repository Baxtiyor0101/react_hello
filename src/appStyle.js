import styled from "styled-components";


const getSize = ({type})=>{
    switch (type) {
        case 'large': return {size:'200px',color:'red'}; 
        case 'medium': return {size:'150px',color:'blue'}; 
        case 'small': return {size:'100px',color:'yellow'}; 
         default: return   {size:'150px',color:'blue'}; 
     }
}

//dns.adguard.com

export const Box = styled.div`
width: ${(props)=>getSize(props).size};
height: ${(props)=>getSize(props).size};
margin:10px;
background:  ${(props)=>getSize(props).color};
 `;

 export const Table = styled.table`
 border: 1px solid black;
 border-collapse:collapse;
 `;

 Table.Head = styled.thead` 
 border: 1px solid black;

 `;

 Table.Body = styled.tbody``;

 Table.Tr = styled.tr``;

 Table.Th = styled.th` border: 1px solid black;
 `;

 Table.Td = styled.td` border: 1px solid black;
 `;
