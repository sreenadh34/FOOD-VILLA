import React from"react";
import ReactDOM from "react-dom/client";

const heading=(
    <h1 id="title">
        REACT
        </h1>
);

const HeaderComponent=()=> (
<div>
    {heading}
<h1>Namasthe REACT functional component</h1>
<h2>ths is h2 tag</h2>
</div>
);


const root =ReactDOM.createRoot(document.getElementById("root"));

//passing a ract element inside the root 
//async defer

root.render(<HeaderComponent />);