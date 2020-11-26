import React, { Component, useRef, useState } from 'react'
import { motion } from "framer-motion"
import MotionDiv from "../components/MotionDiv"

import LayoutCanvas from "../components/LayoutCanvas"

export default class Canvas extends Component {
    // state = {
    //     valueToggle: false
    // }

    render() {

        const handleDrag = (e, info) => {
            console.log(info.point.x)
        }



        // const [value, setValue] = useState(false)
        // const constraintsRef = useRef(null)
        return (
            < div id="canvasID" >
                <h1 className="canvasTitle">
                    Proyecto Patatas
                </h1>
                <div id="canvasTableID" >
                    {/* <div id="mainCanvasID" ref={constraintsRef}> */}


                    {/* <motion.div animate={{ scale: 0.5 }} /> */}



                    {/* 
                    <MotionDiv info={{ drag: true }} functions={{ handleDrag }} />
                    <MotionDiv info={{ drag: true }} functions={{ handleDrag }} />

                    <MotionDiv info={{ drag: true }} functions={{ handleDrag }} />
                    <MotionDiv info={{ drag: true }} functions={{ handleDrag }} />
 */}

                    <LayoutCanvas />
                    {/* <div className="componentDiv1"></div> */}










                </div>
            </div >
        )
    }
}
