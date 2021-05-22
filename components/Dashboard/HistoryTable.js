import { Table, Tbody, Tr, Td, Avatar, Flex } from '@chakra-ui/react';

const data = [
  {
    src: '/avatar.jpg',
    name: 'Lucas Acosta',
    createdAt: '10:42:23 AM',
    amount: '350',
    status: 'Completed'
  },
  {
    src: '/avatar.jpg',
    name: 'Lucas Acosta',
    createdAt: '10:42:23 AM',
    amount: '350',
    status: 'Completed'
  },
  {
    src: '/avatar.jpg',
    name: 'Lucas Acosta',
    createdAt: '10:42:23 AM',
    amount: '350',
    status: 'Completed'
  }
];

const HistoryTable = () => {
  return (
    <Table>
      <Tbody>
        {data.map((row, rowid) => (
          <Tr key={rowid}>
            <Td>
              <Avatar src={row.src} />
            </Td>
            <Td color="gray.500">{row.name}</Td>
            <Td color="gray.500">{row.createdAt}</Td>
            <Td color="gray.500">{row.amount}</Td>
            <Td color="gray.500">{row.status}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default HistoryTable;
