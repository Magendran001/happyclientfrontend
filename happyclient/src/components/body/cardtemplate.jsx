import { Box, Button, Center, Grid, Image,Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Cardtemplate({ data }) {
      
  let [postuserdata,setpostuserdata]  = useState({});


  let [id,setid] = useState("");
  

  
  useEffect(()=>{
 
    
console.log(postuserdata)
    if(postuserdata.username){console.log(postuserdata.id)
      alert(`${postuserdata.id}:${postuserdata.username}`)
    }

  },[postuserdata])


  useEffect(()=>{

    Getuserdata()

  },[id])



  const Getuserdata=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res =>{setpostuserdata(res.data)})
    .catch(err=>console.log(err))
  }
  const alerthandler =()=>{


    setid(data.id);
    console.log(id)

      

  }
   
  

  return (


    <Grid  border={"1px solid black"} bgColor="white" rounded={"30px"} textAlign="center" >
      <Image w="80%" m="auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACMCAMAAAATMShNAAAAYFBMVEXMzMzPz8/S0tLZ2dk3Nze/v7/V1dXJycnFxcWsrKwyMjK0tLSQkJAAAAAtLS2FhYWcnJylpaVXV1dubm5CQkJ2dnZ+fn5gYGBPT09KSko8PDwVFRVpaWkoKCgjIyMdHR2mUhIAAAADaklEQVR4nO2XWZejIBCFKXaEKO6JWfr//8tBRWPP1nPOjOfMw/0eugMB6lIWV8IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/PdwrTm9m3Top5+N/47j+H0d4p/WPAlSse+D35u23j6k/lp9KYBqu60z9JVft8J96IfanKxeB/moqr5RW3u8LBHJlal/lI7/fj4PFzdPoFi0VTV0o5kb4ZUa1+brnf8NvH564pzMJj3e5RLQ3iNP/UH+Pj53Us7ayV3mdbhpep0WvSjiRG1zpnayhdfHtpNumgPqR78kXIz9lvhdx/Fs2M6v2oeHWPbiS87MLa6LdvWJ4il2Op2rd4QuqmJu8aLm62Y6m7+qxfqfu/f8tDVRftZeaPLPdQ4fRnGi9rbS1tXOrup126fgsxRf5C77zEVjb9WyG96OW4GlYr9R1u4/bEoBsXHgvG7WEakgz9R+c9VtbMcirLE6s2rndZFLyUi/ak/lUaU+6sfdPsh3KmtP25BRGf8Y08cq11nKwBcn/a/obskMOPMy8ORyd0+0ao8yZ8x0LkslJYMQ7fXtfGJKs7J2Jnz3lJcgiOl+yNpVcaZNlp1YsuYvjKiJnP2g/bafN2JT1Y70fhcNbXoQWTvFZ+tVKK6WjtrtidpfMVdEF0XVMPaj9sm9DUbd7+9XLa+neR+53uNNaSJt+obrYdhr5kyTzA+c8SbM7mAMc4UxJkXNA+zT7/F133Rht1SVzDGN52XNTCotv/oSl1HHMe/11LPKmpDzfothmmSiuEzlqE2xSiY/bR7JlnfNlHOa3LPo5vHTpZCNVWUeJsZBe5k9MlzP9JlqXZ1sqYyasa5Mf5i4DkuCxfDY0q7bxhCpqdqqaRmvzLO2itlXtlJxC9puN4kmnOgzpF51evNz6juRDmuq37lGV4P36a3O/cd2oaF2MUcyXbUZzzIh1fs8on3weTyPpSUKxXwl0KG0v4z8D+D1x1C7OE7btYX8a70JVjI4V732zNlh9TtSlTmuID6Ws6qaJjpft0U9P6+2i66u7u7Mozq7Yz9N1/D2YTVsmxhl0R6i71b5WRAflm2TSQmYmmptsNjIrj/3GjnH0UKIQ1kSP3zxJz8+tjEkDgvNDf3LKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCf8Q2C2CLOXtHS6AAAAABJRU5ErkJggg==" />
      
      <Box fontSize={"20px"} fontWeight="bold" m="30px">{data.id}.Title:{data.title}</Box>
      <Box m="30px">Desc:{data.body}</Box>
      <Button  onClick={alerthandler}  w="70%" m="10px auto" bg={"teal"} color="white">view</Button>
    </Grid>
  );
}

export default Cardtemplate;
