var o={get:(t,r={},n={})=>Object.keys(r).length===0&&Object.keys(n).length===0?fetch(`https://api.spacexdata.com/v4${t}`).then(e=>e.ok?e.json():{error:e.status}).then(e=>(console.log(e),e)).catch(e=>({error:e})):fetch(`https://api.spacexdata.com/v4${t}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,options:r})}).then(e=>e.ok?e.json():new Error(e.status)).then(e=>(console.log(e),e)).catch(e=>e)};export{o as f};