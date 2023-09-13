import { Box, Flex } from '@chakra-ui/react';
import { ChatList } from './chat-list';
import { SearchPanel } from './search-panel';
import Header from './Header';

export function LeftPanel(props) {
  return (
    <Flex direction='column' w="30%" {...props}>
      <Box>
        <Header />
        <SearchPanel />
      </Box>
      <ChatList flex='1' overflow='auto' />
    </Flex>
  );
}