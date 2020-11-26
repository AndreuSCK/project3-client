import * as React from "react"
import { useRef, useState, useCallback } from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"

import MotionDiv from "../components/MotionDiv"
import MotionText from "../components/MotionText"


const LayoutCanvas = () => {

    // const handleDrag = (e, info) => {
    //     console.log(info.point.x)
    // }
    // const divfuera = React.createRef()
    // STATES
    const [isDraggable, setDraggable] = useState(false);
    const [posXY, setposXY] = useState(false);


    const queXY = () => {
        setposXY(!posXY)

    }


    const jajas = (data) => {
        console.log(data)
        setposXY(!posXY)
    }



    const functionDrag = () => {
        setDraggable(!isDraggable)
    }


    let comida = ['patatas', 'pollo']



    const [cosas, setCosas] = useState(comida);
    const addNewComp = () => {
        setCosas([...cosas, 'comida'])
    }

    let losElementos = cosas.map((item, i) => {
        return (

            // <h1 key={i}>{item}</h1>
            <MotionText key={i} info={{ drag: isDraggable, positionXY: posXY, innerText: item }} functions={{ jajas }} />

        );
    });

    const cuantosDivs = () => {
        console.log(cosas)
    }
    return (
        <motion.div >
            <button onClick={queXY}>XY</button>
            <button onClick={functionDrag} >toggle</button>
            <button onClick={addNewComp} >Add new DIV</button>

            <button onClick={cuantosDivs} >cuantosDivs hay</button>

            {/* <MotionDiv info={{ drag: isDraggable }} functions={queXY} ref={divfuera} /> */}


            {/* <MotionText info={{ drag: isDraggable, positionXY: posXY }} functions={{ jajas }} /> */}


            <MotionText info={{ drag: isDraggable, positionXY: posXY }} functions={{ jajas }} />

            <div>
                {losElementos}
            </div>


        </motion.div>

    )
}

export default LayoutCanvas
