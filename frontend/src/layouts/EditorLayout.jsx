import SelectionCard from "../components/layout_components/SelectionCard"
import Style from "./EditorLayout.module.css"
function EditorLayout({children}){

     return(
     <div className={Style.div}>
          <div className={Style.sidebar}>
               <div className={Style.btnbox}>
                    <button className={Style.btn} style={{backgroundColor: '#28a745'}}>Save</button>
                    <button className={Style.btn} style={{backgroundColor: '#e53935'}}>Exit</button>
               </div>
               <SelectionCard/>
          </div>
          {children}
     </div>

     );
}

export default EditorLayout;