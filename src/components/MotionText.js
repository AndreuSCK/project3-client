import * as React from "react"
import { useRef, useState, useCallback, } from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"


const MotionText = React.forwardRef((props, ref) => {
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
    // const x = useMotionValue(0)
    // const y = useMotionValue(-200)




    if (props.info.positionXY) {
        console.log(localref.current.style.transform)
        let cleanArray = localref.current.style.transform.split("d")
        let splitArray = cleanArray[1]
        console.log(splitArray)

        // console.log(Number(transArray[0].replace(/[^0-9\.]+/g, "")))
        props.functions.jajas(localref.current.style.transform)
    }
    // const input = [-200, 0, 200]
    // const output = [0, 1, 0]
    // const opacity = useTransform(x, input, output)

    // console.log(props.info.x)
    // console.log(props.functions)
    let draggableVar = "true"

    const [editable, setEditable] = useState(false)

    const [textEditable, setTextEditable] = useState(false)

    const [textValue, setTextValue] = useState(props.info.innerText ? props.info.innerText : "Hi, I'm a text box, fill me")

    // console.log(props.info.innerText)

    const textHandler = (e) => {
        setTextValue(e)
    }

    const [fontSizeEditable, setFontSizeEditable] = useState(false)

    const [fuenteDelTexto, setFuenteDelTexto] = useState(20)



    const [textoAlineadoToggle, setTextoAlineadoToggle] = useState(false)

    const [textoAlineado, setTextoAlineado] = useState("center")





    const [sizeEditable, setSizeEditable] = useState(false)

    const [widthState, setWidth] = useState(400)
    const [heightState, setHeight] = useState(130)



    const [InitialX, setInitialX] = useState(1000)
    const [InitialY, setInitialY] = useState(100)





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
                x: InitialX,
                y: InitialY,
                width: widthState,
                height: heightState
            }}
            width={widthState}
            height={heightState}

            // onDrag={(e, info) => { props.functions.handleDrag(e, info) }}
            // onDragEnd={(e, info) => { props.functions.handleDrag(e, info) }}

            // onDragEnd={() => { console.log(ref.current.style.transform) }}
            // onDrag={() => { console.log(boxx.current.style.transform) }}


            // style={{ x, y }}
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
                    <div className="canvasOptions" style={{ zIndex: 2 }}>
                        <p onClick={() => setTextEditable(!textEditable)}>Edit Text  </p>
                        {textEditable ?
                            <textarea name="textarea" value={textValue} onChange={(e) => textHandler(e.target.value)}></textarea>

                            : <></>}


                        <p onClick={() => setFontSizeEditable(!fontSizeEditable)}>Font Size  </p>

                        {fontSizeEditable ?
                            <div className="fontSizeEditable" >
                                <div onClick={() => setFuenteDelTexto(fuenteDelTexto + 4)} >
                                    +
                                </div>
                                <div onClick={() => setFuenteDelTexto(fuenteDelTexto - 4)}>
                                    -
                                </div>
                            </div>
                            : <> </>
                        }
                        <p onClick={() => setTextoAlineadoToggle(!textoAlineadoToggle)}>Align Text</p>
                        {
                            textoAlineadoToggle ?
                                <div className="textoAlineadoToggle">
                                    <div onClick={() => setTextoAlineado("left")}> L </div>
                                    <div onClick={() => setTextoAlineado("center")}> M </div>
                                    <div onClick={() => setTextoAlineado("right")}> R</div>


                                </div>
                                : <> </>
                        }




                        <p onClick={() => setSizeEditable(!sizeEditable)}>Box Size  </p>
                        {
                            sizeEditable ?
                                <div>
                                    <div> Width: </div>
                                    <div className="fontSizeEditable">
                                        <div onClick={() => setWidth(widthState + 10)}> +</div>
                                        <div onClick={() => setWidth(widthState - 10)}> -</div>
                                    </div>




                                    <div> Height: </div>
                                    <div className="fontSizeEditable">
                                        <div onClick={() => setHeight(heightState + 10)}> +</div>
                                        <div onClick={() => setHeight(heightState - 10)}> -</div>
                                    </div >
                                </div>
                                : <> </>
                        }

                    </div>
                    : <div></div>
            }

            <div onClick={
                () => {
                    setEditable(!editable),
                        setTextEditable(false),
                        setFontSizeEditable(false),
                        setTextoAlineadoToggle(false),
                        setSizeEditable(false)
                }



            } className="editable"><span>...</span></div>

            <p style={{ fontSize: fuenteDelTexto, textAlign: textoAlineado }} >{textValue}</p>


        </motion.div >
    )
})

export default MotionText
