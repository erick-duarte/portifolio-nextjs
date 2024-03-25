'use client';

import { useState } from "react"

export default function clickState(){
    let [a, setClickButton] = useState(0)
    let [b, setClickPage] = useState(0)

    function clickVerde(data: string){
        if (data === "add"){
            setClickButton(a + 1)
        } else if (data === "sub"){
            if (a === 0){
                return
            }
            setClickButton(a - 1)
        } else if (data === "zero"){
            setClickButton(0)
        }
    }

    function clickCinza(data: string){
        if (data === "add"){
            setClickPage(b + 1)
        } else if (data === "sub"){
            if (b === 0){
                return
            }
            setClickPage(b - 1)
        } else if (data === "zero"){
            setClickPage(0)
        }
    }

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "gray"}}>
                <span style={{color: "#FFF"}}>Clicks: {a}</span>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100vh", padding: "50px"}}>
                    <button onClick={() => clickVerde("add")} type="submit">+ Click</button>
                    <button onClick={() => clickVerde("sub")} type="submit">- Click</button>
                    <button onClick={() => clickVerde("zero")} type="submit">0 Click</button>
                </div>
            </div>
        </>
    )
}

