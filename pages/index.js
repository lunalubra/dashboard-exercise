import { Flex } from '@chakra-ui/layout';

import Dashboard from '../components/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import Inbox from '../components/Inbox/Inbox';

export default function Home() {
  return (
    <Flex h="100vh" w="100%" direction="row">
      <Navbar />
      <Dashboard />
      <Inbox />
    </Flex>
  );
}
