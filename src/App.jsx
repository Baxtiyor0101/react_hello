import React from 'react';
import { Box, Table } from './appStyle';

class App extends React.Component {
  state={
    active:null,
  };

  render() {
    return (
      <div style={{display:'flex'}}>
        <Box type='large'>large</Box>
        <Box type='medium'>medium</Box>
        <Box type='small'>small</Box>
        <Box type='boshqa'>boshqa</Box>

        <Table>
          <Table.Head>
            <Table.Tr>
              <Table.Th>ism</Table.Th>
              <Table.Th>familya</Table.Th>
              <Table.Th>tel</Table.Th>
              <Table.Th>email</Table.Th>
            </Table.Tr>
          </Table.Head>
          <Table.Body>
            <Table.Tr>
              <Table.Td>Baxtiyor</Table.Td>
              <Table.Td>Oqonboyev</Table.Td>
              <Table.Td>944779722</Table.Td>
              <Table.Td>nimadir@gmail.com</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Baxtiyor</Table.Td>
              <Table.Td>Oqonboyev</Table.Td>
              <Table.Td>944779722</Table.Td>
              <Table.Td>nimadir@gmail.com</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Baxtiyor</Table.Td>
              <Table.Td>Oqonboyev</Table.Td>
              <Table.Td>944779722</Table.Td>
              <Table.Td>nimadir@gmail.com</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Baxtiyor</Table.Td>
              <Table.Td>Oqonboyev</Table.Td>
              <Table.Td>944779722</Table.Td>
              <Table.Td>nimadir@gmail.com</Table.Td>
            </Table.Tr>
          </Table.Body>
        </Table>
        
      </div>
    );
  }
}

export default App;
