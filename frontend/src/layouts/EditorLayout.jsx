import SelectionCard from "../components/layout_components/SelectionCard"
import Style from "./EditorLayout.module.css"
function EditorLayout({children}){

     return(
     <div className={Style.div}>
          <div className={Style.sidebar}>
               <div className={Style.btnbox}>
                    <button className={Style.btn} >Save</button>
                    <button className={Style.btn} >Logout</button>
               </div>
               <SelectionCard/>
          </div>
          {children}
     </div>

     );
}

export default EditorLayout;