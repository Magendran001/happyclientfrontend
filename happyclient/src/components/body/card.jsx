import { Box, Button, Center, Grid, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cardtemplate from "./cardtemplate";
function Card({ searchquery }) {
  let [data, Setdata] = useState([]);


  let [paginationdata,setpaginationdata] = useState([]);

  let [page,setpage] = useState(1);


  useEffect(()=>{
      
     if(page==1){
        pagehandler(0)

     }

  },[data])
  
 

  useEffect(() => {
    if (searchquery.length > 3) {
      let res = data.filter((e) => e.title.includes(searchquery));

      Setdata(res);
    } else {
    
      Getdata();
    }
  }, [searchquery]);

  function Getdata() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {Setdata(res.data)})
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Getdata();
  }, []);

 const pagehandler=(value)=>{
    
     


     let index = page+value;
     console.log(index)


 
     
    let start = (index-1)*10;
    let end = start+10;

    console.log(start,end)

    let paginatedata = data.slice(start,end);

    setpaginationdata(paginatedata)

    console.log(paginationdata,"pa")
    setpage(index)

 }

  return (
    <Box>
        <Center mt="30px">
        <Button  w="100px"  disabled={page==1} bgColor="teal" color={"white"} onClick={()=>{pagehandler(-1)}}>
            prev
        </Button>
        <Button w="100px" bgColor="teal" color={"white"} ml={"30px"} onClick={()=>{pagehandler(1)}}>Next</Button  >
        </Center>
    <Grid h="auto" gap={"30px"} w="80%" m="30px auto" templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}}>
        {paginationdata.length==0?"....loading":
      paginationdata.map((e) => (
        <Cardtemplate data={e} key={e.id} />
      ))
}
    </Grid>
    </Box>
  );
}

export default Card;
