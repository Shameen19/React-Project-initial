
import React from "react";
import {Header} from "./files/Header";
function Footer(){
    return(
        <div>
        <footer>
        <p>All rights reserved</p>
    </footer>
    </div>
    )
}

function MainContent(){
    return(
        <div>
                  <h1>This page describes the motivation behind this cource</h1>
                    <ol>
                        <li>To build my portfolio</li>
                        <li>to get a good earning job</li>
                    </ol>
        </div>
    )
}




function App ()   
    {
        return(
            <div>
            
               <Header />
                <MainContent />
                   <Footer />
                    </div>
                   
            
        )
    }
    ReactDOM.render(<Challenge />, document.getElementById("root"));