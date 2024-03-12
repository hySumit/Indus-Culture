import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Sidebar1 = ({ val,search }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* Add your radio buttons here if needed */}
      </RadioGroup>
      <Button variant="unstyled" onClick={onOpen} className="ham">
        {val}
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="">Hello User</DrawerHeader>
          <DrawerCloseButton
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
          />
          <DrawerBody>
            <Stack spacing="4">
              {/* Add your navigation links here */}
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to={'/cart'}>Cart </Link>
              <Link to="#">About</Link>
              <Link className="flex items-center gap-2" to="/search">Search {search}</Link>
              {/* Add other navigation links as needed */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
