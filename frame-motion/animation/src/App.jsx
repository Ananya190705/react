import React, { useState } from "react";

export default function App() {
  const image = [
    "https://media.istockphoto.com/id/1906270764/photo/isolated-shot-of-three-dimensional-rainbow-alphabet-letter-s-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gGPYBZ7gmh8cngtWPhNZGPjivwnqm7IjSvClGOVH7js=",
    "https://imgs.search.brave.com/BNdTpsz8wOUFHn5y9xyj79Z9oi_mEzV8ylZ8LzzkHN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDgy/NTMwMTE5L3Bob3Rv/L29wZXJhLWJpcmQt/MS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Q2E1bi0wOEZO/OW9YZExrM1Vza2lx/ZmpnbXZiXzQ2RHU0/ZlJZQkRGR3UyUT0",
    "https://imgs.search.brave.com/Hd8OTy_P5J9H8ngKvbU2Q2RokJCQyyA7o3PuX31QTOo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmlyZHNhbmRibG9v/bXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAxLzE3/X0xlc2xpZVNjb3Bl/c19CQlhtYXkyMS5q/cGc_Zml0PTcwMCw0/OTg","https://imgs.search.brave.com/dVoq8CEFXX5NhdmlyNiRHdsJEG94fM5VNmmZ8duaQ3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTI5MTkxMi9waG90/by9hLXNtYWxsLWJp/cmQtanVtcGluZy1v/dXQtb2YtYS1iaXJk/Y2FnZS53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b3ZyUnc1aGFF/NWRzVGFtbDVJWUpv/bG9IOFNROVFhV0Q3/NHljTG8xSUlaST0","https://imgs.search.brave.com/u_Q_Ssj2nMjn6GmY0A_Ir6m07ILQpPjvVejdyoglPLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmLzhi/LzVkL2ZmOGI1ZDJh/MTZhZDIyYjA1OGEx/ZmFkMDE5MDVkNWE0/LmpwZw"
  ];
  const [index, setindex] = useState(0);
  const prev = () => {
    setindex((index - 1 + image.length) % image.length);
  };
  const next = () => {
    setindex(index + (1 % image.length));
  };
  return (
    <div>
      <img src={image[index]} style={{ maxWidth: "400px", maxHeight: "400px", objectFit: "contain" }}
      />
      <div style={{display:"flex", gap: "10px"}}>
        <button style={{color:"black"}}onClick={prev}>previous</button>
      <button  style={{color:"black"}}onClick={next}>next</button>
      </div>
      
    </div>
  );
}
