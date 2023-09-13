import React from "react";
import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "../assets/icons";
import {
  Flex,
  HStack,
  Avatar,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";

const iconData = [
  {
    icon: <CommunityIcon />,
    label: "Community Chat",
  },
  {
    icon: <StatusIcon />,
    label: "Status",
  },
  {
    icon: <NewChatIcon />,
    label: "New Chat",
  },
  {
    icon: <MenuIcon />,
    label: "Menu",
  },
];

function CustomTooltip({ label, icon, ...rest }) {
  return (
    <Tooltip shouldWrapChildren label={label} bg="gray" color="black" fontSize="xs" {...rest}>
      <IconButton variant="ghost">{icon}</IconButton>
    </Tooltip>
  );
}

function Header(props) {
  return (
    <Flex bg='#f0f2f5' justify="space-between" py="2" px="4" borderRight="1px solid #f2f2f2" color="#54656f">
      <Avatar boxSize="40px" name="heer" src="" />
      <HStack spacing="3">
        {iconData.map((item, index) => (
          <CustomTooltip key={index} label={item.label} icon={item.icon} />
        ))}
      </HStack>
    </Flex>
  );
}

export default Header;
