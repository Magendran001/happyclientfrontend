import { useState } from "react";
import {Input,Box, Center} from "@chakra-ui/react"

function Navbar({ setsearchquery }) {
  return (
    <Center h="60px" border={"1px solid gray"} >
      <Input w={{base:"80%",sm:"400px"}}
       
        onChange={(e) => {
          setsearchquery(e.target.value);
        }}
        type="text"
        placeholder="search"
      />
    </Center>
  );
}

export default Navbar;
