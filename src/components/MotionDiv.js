import * as React from "react"
import { useRef, useState, useCallback, } from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"


const MotionDiv = React.forwardRef((props, ref) => {
    const [value, setValue] = useState(false)

    const localref = useRef(null)


    // const jajas = () => {
    //     console.log(localref.current.style.transform)
    // }

    // console.log("drag" + props.info.drag)

    // const [value, setValue] = useState(null)

    // const handleDrag = (e, info) => {
    //     console.log(info.point.x)
    // }


    // const x = useMotionValue(114)
    // const y = useMotionValue(100)
    const x = useMotionValue(0)
    const y = useMotionValue(0)


    const widthDiv = "200px"
    const heighthDiv = "140px"


    if (props.info.positionXY) {
        props.functions.jajas(localref.current.style.transform)
    }
    // const input = [-200, 0, 200]
    // const output = [0, 1, 0]
    // const opacity = useTransform(x, input, output)

    // console.log(props.info.x)
    // console.log(props.functions)
    let draggableVar = "true"

    const [editable, setEditable] = useState(false)

    return (
        <motion.div className="componentDiv1"
            draggable={draggableVar}
            // onDragStart={draggableVar = "true"}
            // onDragEnd={draggableVar = "false"}


            // onDragStart={(e, info) => { { draggableVar = "true" } }}
            // onDragEnd={(e, info) => { { draggableVar = "false" } }}


            ref={localref}
            // onDragEnd={() => props.functions.jajas(localref.current.style.transform)}
            // onDragEnd={() => props.functions.jajas(localref.current.style.transform)}


            // ref={ref}
            // style={{ width: "200px", height: "200px" }}
            // width={"100px"}
            // height={"100px"}

            animate={{
                x: "200px",
                y: "0px",
                width: widthDiv,
                height: heighthDiv
            }}
            // onDrag={(e, info) => { props.functions.handleDrag(e, info) }}
            // onDragEnd={(e, info) => { props.functions.handleDrag(e, info) }}

            // onDragEnd={() => { console.log(ref.current.style.transform) }}
            // onDrag={() => { console.log(boxx.current.style.transform) }}


            style={{ x, y }}
            // style={{ left: 50 }}
            // onDrag={(e, info) => { console.log(info.point.x) }}

            // contentOffsetY={50}

            drag={props.info.drag}
            // dragConstraints={props.dragCons}
            dragConstraints={{ top: 10 }}

            // {this.props.info.drag ?drag : drag=false}

            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            // dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}


        >
            {

                editable ?
                    <div className="canvasOptions"> Edit Text   </div>
                    : <div></div>
            }

            <div onClick={() => setEditable(!editable)} className="editable"><span>...</span></div>

            <h1 >Titulo</h1>


        </motion.div>
    )
})

export default MotionDiv
