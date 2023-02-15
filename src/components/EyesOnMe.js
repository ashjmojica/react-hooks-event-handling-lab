import React from 'react';


function EyesOnMe (){
    function handleFocus () {
        console.log("Good!");
    }
        
function handleBlur () {
    console.log("Hey! Eyes on me!");
}

return (
    <button onFocus={handleFocus} onClick={handleBlur}>
        Eyes on me
    </button>
);
}

export default EyesOnMe;