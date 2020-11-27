import * as React from "react"
import Cookies from 'js-cookie'

import { useRef, useState, useCallback } from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { withAuth } from "../lib/AuthProvider";

import MotionDiv from "../components/MotionDiv"
import MotionText from "../components/MotionText"
import { Link } from "react-router-dom";




const LayoutCanvas = (props) => {
    // console.log()
    // const handleDrag = (e, info) => {
    //     console.log(info.point.x)
    // }
    // const divfuera = React.createRef()
    // STATES
    const [isDraggable, setDraggable] = useState(true);
    const [posXY, setposXY] = useState(false);



    let arrayOfData = []


    const saveAll = (data) => {
        // console.log(data)
        // console.log("patatas")
        let dataIDJson = JSON.stringify(data.personalID)
        let dataJson = JSON.stringify(data)

        // Cookies.set(dataIDJson, dataJson);

        // let localIdprops = props.localId
        // console.log(localId)
        // data.localId = localIdprops


        props.saveData(data)
        // console.log(props)





        setposXY(!posXY)
    }

    const queXY = () => {
        setposXY(!posXY)

    }


    const functionDrag = () => {
        setDraggable(!isDraggable)
    }


    let defaultDivs = [{}]



    const [cosas, setCosas] = useState(defaultDivs);
    const addNewComp = () => {
        let randomNumber = Math.floor(Math.random() * 1000000) + 1
        setCosas([...cosas, { new: true, personalID: randomNumber }])
    }

    let losElementos = cosas.map((item, i) => {
        let currentID = props.localId
        return (

            // <h1 key={i}>{item}</h1>
            <MotionText key={i} info={{ localId: currentID, personalID: item.personalID, drag: isDraggable, positionXY: posXY, innerText: item.innerText }} functions={{ saveAll }} />

        );
    });

    const cuantosDivs = () => {
        console.log(cosas)
    }
    return (
        < div id="canvasID" >
            <h1 className="canvasTitle">
                <div style={{ width: "80%" }}>
                    Proyecto Patatas
                </div>
                <div style={{ margin: 0, padding: 0 }}>
                    <Link to={"/"} style={{ margin: 0, padding: 0 }} >
                        <div className='canvasTitle' style={{ margin: 0, padding: 0 }}>
                            Home
                         </div>
                    </Link>
                </div>

                <div style={{ marginRight: "100px" }}>
                    Save
                </div>

            </h1>
            <div className="addNewText" onClick={addNewComp} ></div>


            <div id="canvasTableID" >


                <motion.div >
                    {/* <button onClick={queXY}>XY</button>
                    <button onClick={functionDrag} >toggle</button>
                    <button onClick={addNewComp} >Add new DIV</button>

                    <button onClick={cuantosDivs} >cuantosDivs hay</button> */}

                    {/* <MotionDiv info={{ drag: isDraggable }} functions={queXY} ref={divfuera} /> */}


                    {/* <MotionText info={{ drag: isDraggable, positionXY: posXY }} functions={{ jajas }} /> */}


                    {/* <MotionText info={{ drag: isDraggable, positionXY: posXY }} functions={{ jajas }} /> */}

                    <div>
                        {losElementos}
                    </div>


                </motion.div>


            </div>
        </div >


    )
}

export default withAuth(LayoutCanvas)
