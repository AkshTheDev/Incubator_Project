// TextEditor.jsx
import { useCallback, useState } from 'react';
import { Editor, Transforms, Element, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import SelectionCard from '../SelectionCard';


const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const customEditor = {
     toggleMark(editor,format){
        const Mark = Editor.marks(editor)
        if(Mark?.[format]){
            Editor.removeMark(editor,format)
        }
        else{
            Editor.addMark(editor,format,true)
        }
    },
    toggleBlock(editor, format){
        const[matchfound] = Editor.nodes(editor,
            {
                match: n=> n.type === format
            }
        )
        Transforms.setNodes(editor,
            { type: matchfound ? 'paragraph' : format },
            { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
        )
    }
}
function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <Header {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const renderLeaf = useCallback((props)=>{
    
    return <Leaf {...props}/>
  },[])
 
  return (
    <div style={{ padding: '20px', maxWidth: '818.72px', minWidth:'818.72px' }}>
        
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        //   placeholder="Type here (Ctrl + ` for code block)..."
          onKeyDown={(event) => {
            
            if(!event.ctrlKey){
                return
            }
            switch(event.key){
                case '`':{
                    event.preventDefault();
                    customEditor.toggleBlock(editor,'code')
                    break
                }
                    
                case 'b':{
                    event.preventDefault()
                    customEditor.toggleMark(editor,'bold')
                    break
                    
                }
                case 'i':{
                    event.preventDefault()
                    customEditor.toggleMark(editor,'italic')
                    break
                }
            }
            
             
            
          }}
          style={{
            border: '1px solid #ddd',
            paddingLeft: ' 144.48px',
            paddingRight: ' 144.48px',
            paddingTop: '6rem',
            minHeight: '66rem',
            borderRadius: '3px',
            fontFamily: 'cursive' ,
            backgroundColor: '#1d1f21',
            color: '#e9ecef'
          }}
        />
      </Slate>
      
    </div>
  );
}

const Header = (props) => {
  const [text, settext]=useState("")
  const handlekeydown = (event)=>{
    if(event.key.length == 1){
      settext((prev)=> prev + event.key.toUpperCase());
      event.preventDefault();
    }     
    else if(event.key == "Backspace"){
      settext((prev)=> prev.slice(0,-1))
      event.preventDefault();
    }

  }
  
  return (
    <pre
      {...props.attributes}
      onKeyDown={handlekeydown}
      tabIndex={0}
    >
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return (
    <p {...props.attributes} style={{ margin: '0 0 8px 0' }}>
      {props.children}
    </p>
  );
};

const Leaf = (props)=>{
   const style = {
    fontWeight: props.leaf.bold? 'bold':'normal',
    fontStyle: props.leaf.italic? 'italic': 'normal'
   }
    return(
        <span {...props.attributes} style={style}>
            {props.children}
        </span>
    )
}
export default TextEditor;
// check