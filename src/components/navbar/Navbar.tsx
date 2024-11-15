import { Link } from 'react-router-dom';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiUser,
  FiTv,
  FiMeh,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

// Define the missing types
interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, path: '/' },
  { name: 'Players', icon: FiMeh, path: '/players' },
  { name: 'Champions', icon: FiUser, path: '/champions' },
  { name: 'Teams', icon: FiUsers, path: '/teams' },
  { name: 'Match History', icon: FiTv, path: '/match-history' },
  { name: 'Settings', icon: FiSettings, path: '/settings' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bgGradient={'linear(to-r, blue_gradient.1, blue_gradient.2)'}
      borderRight='2px'
      borderRightColor='gold.2'
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text
          fontSize='2xl'
          fontFamily='monospace'
          fontWeight='bold'
          color={'gold.2'}
        >
          League Companion
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'gold.1' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'gold.2',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='24'
            _groupHover={{
              color: 'blue.5',
            }}
            color={'gold.2'}
            as={icon}
          />
        )}
        <Text
          color={'gold.2'}
          _groupHover={{
            color: 'blue.5',
          }}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* <MobileNav onOpen={onOpen} /> */}
      <Box ml={{ base: 0, md: 60 }}>{/* Content */}</Box>
    </Box>
  );
};

export default SidebarWithHeader;
