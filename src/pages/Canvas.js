import React, { Component, useRef } from 'react'
import { motion } from "framer-motion"

export default class Canvas extends Component {
    render() {
        // const constraintsRef = useRef(null)

        return (
            <div id="canvasID">
                <h1 className="whiteBoardTitle">
                    Proyecto Patatas
                </h1>
                <hr></hr>
                <div id="mainCanvasID" >
                    {/* <div id="mainCanvasID" ref={constraintsRef}> */}


                    <motion.div animate={{ scale: 0.5 }} />
                    <motion.div
                        drag
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        // dragConstraints={constraintsRef}
                        dragConstraints={{ left: -500, top: -200, bottom: 200, right: 500 }}
                        dragElastic={0.1}
                    // onDrag={(event, info) => console.log(info.point)}
                    />
















                </div>
            </div>
        )
    }
}
