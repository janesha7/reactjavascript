import React,{useState} from "react";
function Tab() {
    const [activeTab, setActiveTab]=useState("home");
    return(
        <div style={styles.tabContainer}>
            <h2>Tab Navigation Example</h2>
            {/* Tab Buttons*/}
            <div style={styles.tabContainer}>
                <button
                style={activeTab==="home"? styles.activeBtn:styles.btn}
                onClick={()=>setActiveTab("home")}
                >home

                </button>
                <button
                style={activeTab ==="about"? styles.activeBtn:styles.btn}
                onClick={()=>setActiveTab("about")}>about
                </button>
                <button
                style={activeTab ==="contact"? styles.activeBtn:styles.btn}
                onClick={()=>setActiveTab("contact")}>contact
                </button>
            </div>
            {/*conditional content*/}
            <div style={styles.contentBox}>
                {activeTab === "home"&&(
                    <p>welcome to the home page this is homepage</p>
                    
                )}
                {activeTab === "about"&&(
                    <p>welcome to the about page this is aboutpage</p>
                )}
                {activeTab ==="contact"&&<p>Contact us at: contact@example.com</p>}

            </div>

        </div>
    );

}
const styles= {
    container: {
        textAlign:"center",
        padding:"20px",
        fontFamily:"Arial",

    },
tabContainer:{
    marginBottom:"20px",
},
btn:{
    padding:"10px 20px",
    margin:"5px",
    cursor:"pointer",
    background:"white",
    border:"1px solid #aaa",
    borderRadius:"5px",
},
activeBtn: {
    padding:"10px 20px",
    margin:"5px",
    cursor:"pointer",
    background:"green",
    color:"white",
    border:"1px solod green",
    borderRadius:"5px",
},
contentBox: {
    padding:"20px",
    border:"1px solid",
    width:"300px",
    margin:"0 auto",
    borderRadius:"5px",
    background:"white"
},
}
export default Tab
