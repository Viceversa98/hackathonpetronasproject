import { useState } from "react";


function RegisterForm () {
    const [name, setName] = useState("");

return(
    <form>
    <label>Enter your name:
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
 <label>Enter your IC:
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
 <label>password:
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
 <label>email :
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
 <label>from which company :
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
 <label>Position in Company :
   <input
     type="text" 
     value={name}
     onChange={(e) => setName(e.target.value)}
   />
 </label>
</form>    
)
}

export default RegisterForm;