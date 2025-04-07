import React from 'react'
import SelectionCardCSS from  './SelectionCardCSS.module.css'
import { useState } from 'react';


function SelectionCard({onclick}) {
    const contents = [
        {   
            id: 1,
            icon: "fa-solid fa-image",
            command: 'ctrl+1',
            name: 'Scene Heading'
        },
        {   
            id: 2,
            icon: "fa-solid fa-person-running",
            command: 'ctrl+2',
            name: 'Action'
        },
        {   
            id: 3,
            icon: "fa-solid fa-user",
            command: 'ctrl+3',
            name: 'Character'
        },
        {   
            id: 4,
            icon: "fa-solid fa-person-running",
            command: 'ctrl+4',
            name: 'Parenthetical'
        },
        {   
            id: 5,
            icon: "fa-solid fa-person-running",
            command: 'ctrl+5',
            name: 'Dialouge'
        },
        {   
            id: 6,
            icon: "fa-solid fa-person-running",
            command: 'ctrl+6',
            name: 'Shoot'
        },
        {   
            id: 7,
            icon: "fa-solid fa-person-running",
            command: 'ctrl+7',
            name: 'Transition'
        }
    ]

  return (
    <div className={SelectionCardCSS.parent}>
        <div className={SelectionCardCSS.card}>
            {
                contents.map((editor)=>{
                    return(
                        
                        <div className={SelectionCardCSS.cardelement} key={editor.id} onClick={onclick}>
                           <i class={editor.icon} style={{color: 'white'}}></i>
                            <div style={{color: 'white'}}>{editor.name}</div>
                            <div style={{color: 'white'}}>{editor.command}</div>

                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default SelectionCard