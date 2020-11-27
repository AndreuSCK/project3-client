import * as React from "react"
import { useRef, useState, useCallback, } from "react"
import { withAuth } from "../lib/AuthProvider";

import { motion, useMotionValue, useTransform } from "framer-motion"


const MotionText = React.forwardRef((props, ref) => {
    const [value, setValue] = useState(false)

    const localref = useRef(null)

    // console.log(props.localId)




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



    const [backgroundToggle, setBackgroundToggle] = useState(false)


    const [backgroundDiv, setBackgroundDiv] = useState('#dddddd')


    const [listDiv, setListDiv] = useState(false)

    // const [listDivItems, setListDivItems] = useState(<li>Add your items</li>)



    const [editListDiv, setEditListDiv] = useState(false)



    const [InitialX, setInitialX] = useState(200.32)
    const [InitialY, setInitialY] = useState(100)
    let divIDID
    if (props.info.personalID) {
        divIDID = props.info.personalID
    }
    else {
        let randomNumber = Math.floor(Math.random() * 1000000) + 1

        divIDID = randomNumber
    }


    if (props.info.positionXY && localref.current) {
        let divInfo = {}

        let data = localref.current.style.transform

        var regex = /translate3d\(\s*([^ ,]+)\s*,\s*([^ ,]+)\s*,\s*([^ )]+)\s*\)/;

        var result = data.split(regex);
        let idPersonal = divIDID

        let localIDprops = props.info.localId

        // console.log("localIDMotionText" + localIDprops)

        divInfo = { localID: localIDprops, personalID: idPersonal, x: result[1], y: result[2], textValue, fuenteDelTexto, textoAlineado, widthState, heightState, backgroundDiv }

        props.functions.saveAll(divInfo)






    }

    const [listDivItems, setListDivItems] = useState(['Add your items'])


    const [listDivItems1, setListDivItems1] = useState('Add your items')
    const [listDivItems2, setListDivItems2] = useState('Add your items')
    const [listDivItems3, setListDivItems3] = useState('Add your items')
    const [listDivItems4, setListDivItems4] = useState('Add your items')
    const [listDivItems5, setListDivItems5] = useState('Add your items')
    const [listDivItems6, setListDivItems6] = useState('Add your items')
    const [listDivItems7, setListDivItems7] = useState('Add your items')
    const [listDivItems8, setListDivItems8] = useState('Add your items')
    const [listDivItems9, setListDivItems9] = useState('Add your items')
    const [listDivItems10, setListDivItems10] = useState('Add your items')


    const [list1, setList1] = useState(false)
    const [list2, setList2] = useState(false)
    const [list3, setList3] = useState(false)
    const [list4, setList4] = useState(false)
    const [list5, setList5] = useState(false)
    const [list6, setList6] = useState(false)
    const [list7, setList7] = useState(false)
    const [list8, setList8] = useState(false)
    const [list9, setList9] = useState(false)
    const [list10, setList10] = useState(false)

    const [activos, setActivos] = useState(0)



    // const activar = (info) => {
    //     console.log(info)
    //     setList
    // }


    // let mapeoListDiv = listDivItems.map((item, i) => {
    //     return <li key={i} style={{ fontSize: 25 }} >{item}</li>
    // })

    // let mapeoListDivEdit = listDivItems.map((item, i) => {
    //     // console.log(listDivItems{ i }})

    //     return <input value={listDivItems} type="text" onChange={(e) => setListDivItems(e.target.value)} key={i} style={{ fontSize: 25 }}></input>
    // })


    const textHandlerLists = (e, key) => {
        // console.log(e)


    }


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

            style={{ backgroundColor: backgroundDiv }}
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
                        <p style={{ backgroundColor: textEditable ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setTextEditable(!textEditable)}>Edit Text  </p>
                        {textEditable ?
                            <textarea name="textarea" value={textValue} onChange={(e) => textHandler(e.target.value)}></textarea>

                            : <></>}


                        <p style={{ backgroundColor: fontSizeEditable ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setFontSizeEditable(!fontSizeEditable)}>Font Size  </p>

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
                        <p style={{ backgroundColor: textoAlineadoToggle ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setTextoAlineadoToggle(!textoAlineadoToggle)}>Align Text</p>
                        {
                            textoAlineadoToggle ?
                                <div className="textoAlineadoToggle">
                                    <div onClick={() => setTextoAlineado("left")}> L </div>
                                    <div onClick={() => setTextoAlineado("center")}> M </div>
                                    <div onClick={() => setTextoAlineado("right")}> R</div>


                                </div>
                                : <> </>
                        }




                        <p style={{ backgroundColor: sizeEditable ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setSizeEditable(!sizeEditable)}>Box Size  </p>
                        {
                            sizeEditable ?
                                <div>
                                    <div> Width: </div>
                                    <div className="fontSizeEditable">
                                        <div onClick={() => setWidth(widthState + 10)}> +</div>
                                        <div onClick={() => setWidth(widthState - 10)}> -</div>
                                    </div>




                                    <div> Height: </div>
                                    <div className="fontSizeEditable" >
                                        <div onClick={() => setHeight(heightState + 10)}> +</div>
                                        <div onClick={() => setHeight(heightState - 10)}> -</div>
                                    </div >
                                </div>
                                : <> </>
                        }
                        <p style={{ backgroundColor: backgroundToggle ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setBackgroundToggle(!backgroundToggle)}>Background  </p>
                        {
                            backgroundToggle ?
                                <div className="setColors">
                                    <div style={{ backgroundColor: '#dddddd' }} onClick={() => setBackgroundDiv('#dddddd')}>

                                    </div>
                                    <div style={{ backgroundColor: '#0a0a0a' }} onClick={() => setBackgroundDiv('#0a0a0a')}>

                                    </div>
                                    <div style={{ backgroundColor: '#b491d7' }} onClick={() => setBackgroundDiv('#b491d7')}>

                                    </div>
                                    <div style={{ backgroundColor: '#cc9595' }} onClick={() => setBackgroundDiv('#cc9595')}>

                                    </div>
                                    <div style={{ backgroundColor: '#ccbe95' }} onClick={() => setBackgroundDiv('#ccbe95')}>

                                    </div>
                                    <div style={{ backgroundColor: '#b6cc95' }} onClick={() => setBackgroundDiv('#b6cc95')}>

                                    </div>
                                    <div style={{ backgroundColor: '#b6cde6' }} onClick={() => setBackgroundDiv('#b6cde6')}>

                                    </div>
                                    <div style={{ backgroundColor: '#e6cdb6' }} onClick={() => setBackgroundDiv('#e6cdb6')}>

                                    </div>
                                </div>


                                : <> </>
                        }
                        <p style={{ backgroundColor: listDiv ? 'rgba(88, 88, 88, 0.2)' : null }} onClick={() => setListDiv(!listDiv)}>List?  </p>
                        {
                            listDiv ?
                                <div className="addNewlistt">
                                    <div onClick={() => setEditListDiv(!editListDiv)} style={{ backgroundColor: editListDiv ? '#9ee79e' : null }}>Edit?   </div>



                                    {!list1 ?
                                        <div onClick={() => setList1(!list1)} style={{ backgroundColor: list1 ? '#9ee79e' : null }} >Add New!</div>
                                        : <> </>}


                                    {list1 && !list2 ?
                                        <div onClick={() => setList2(!list2)} style={{ backgroundColor: list2 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list2 && !list3 ?
                                        <div onClick={() => setList3(!list3)} style={{ backgroundColor: list3 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list3 && !list4 ?
                                        <div onClick={() => setList4(!list4)} style={{ backgroundColor: list4 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list4 && !list5 ?
                                        <div onClick={() => setList5(!list5)} style={{ backgroundColor: list5 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list5 && !list6 ?
                                        <div onClick={() => setList6(!list6)} style={{ backgroundColor: list6 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list6 && !list7 ?
                                        <div onClick={() => setList7(!list7)} style={{ backgroundColor: list7 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list7 && !list8 ?
                                        <div onClick={() => setList8(!list8)} style={{ backgroundColor: list8 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list8 && !list9 ?
                                        <div onClick={() => setList9(!list9)} style={{ backgroundColor: list9 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}
                                    {list9 && !list10 ?
                                        <div onClick={() => setList10(!list10)} style={{ backgroundColor: list10 ? '#9ee79e' : null }} >Add New!</div>
                                        : <></>}




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
                        setSizeEditable(false),
                        setEditListDiv(false)
                    // setListDiv(false)
                }



            } className="editable"><span>...</span></div>

            <p style={{ fontSize: fuenteDelTexto, textAlign: textoAlineado }} >
                {textValue}
            </p>

            {listDiv && !editListDiv ?
                <div className="inputslists" style={{ fontSize: fuenteDelTexto, textAlign: textoAlineado }}>
                    {list1 ?
                        <li style={{ fontSize: 25 }} >{listDivItems1}</li>
                        : <> </>
                    }
                    {list2 ?
                        <li style={{ fontSize: 25 }} >{listDivItems2}</li>
                        : <> </>
                    }
                    {list3 ?
                        <li style={{ fontSize: 25 }} >{listDivItems3}</li>
                        : <> </>
                    }
                    {list4 ?
                        <li style={{ fontSize: 25 }} >{listDivItems4}</li>
                        : <> </>
                    }
                    {list5 ?
                        <li style={{ fontSize: 25 }} >{listDivItems5}</li>
                        : <> </>
                    }
                    {list6 ?
                        <li style={{ fontSize: 25 }} >{listDivItems6}</li>
                        : <> </>
                    }
                    {list7 ?
                        <li style={{ fontSize: 25 }} >{listDivItems7}</li>
                        : <> </>
                    }
                    {list8 ?
                        <li style={{ fontSize: 25 }} >{listDivItems8}</li>
                        : <> </>
                    }
                    {list9 ?
                        <li style={{ fontSize: 25 }} >{listDivItems9}</li>
                        : <> </>
                    }
                    {list10 ?
                        <li style={{ fontSize: 25 }} >{listDivItems10}</li>
                        : <> </>
                    }


                </div>
                :
                <></>}
            {listDiv && editListDiv ?
                <div className="inputslists" style={{ fontSize: fuenteDelTexto, textAlign: textoAlineado }} >
                    {list1 ?

                        < input name="textarea" value={listDivItems1} onChange={(e) => setListDivItems1(e.target.value)} ></input >

                        : <> </>
                    }
                    {list2 ?
                        < input name="textarea" value={listDivItems2} onChange={(e) => setListDivItems2(e.target.value)} ></input >

                        : <> </>
                    }
                    {list3 ?
                        < input name="textarea" value={listDivItems3} onChange={(e) => setListDivItems3(e.target.value)} ></input >

                        : <> </>
                    }
                    {list4 ?
                        < input name="textarea" value={listDivItems4} onChange={(e) => setListDivItems4(e.target.value)} ></input >

                        : <> </>
                    }
                    {list5 ?
                        < input name="textarea" value={listDivItems5} onChange={(e) => setListDivItems5(e.target.value)} ></input >

                        : <> </>
                    }
                    {list6 ?
                        < input name="textarea" value={listDivItems6} onChange={(e) => setListDivItems6(e.target.value)} ></input >

                        : <> </>
                    }
                    {list7 ?
                        < input name="textarea" value={listDivItems7} onChange={(e) => setListDivItems7(e.target.value)} ></input >

                        : <> </>
                    }
                    {list8 ?
                        < input name="textarea" value={listDivItems8} onChange={(e) => setListDivItems8(e.target.value)} ></input >

                        : <> </>
                    }
                    {list9 ?
                        < input name="textarea" value={listDivItems9} onChange={(e) => setListDivItems9(e.target.value)} ></input >

                        : <> </>
                    }
                    {list10 ?
                        < input name="textarea" value={listDivItems10} onChange={(e) => setListDivItems10(e.target.value)} ></input >

                        : <> </>
                    }


                </div>
                :
                <></>}


        </motion.div >
    )
})

export default withAuth(MotionText)
    // < textarea name = "textarea" value = { listDivItems1 } onChange = {(e) => setListDivItems1(e.target.value)}></textarea >
// 

    // let mapeoListDiv = listDivItems.map((item, i) => {
    //     return <li key={i} style={{ fontSize: 25 }} >{item}</li>
    // })

    // let mapeoListDivEdit = listDivItems.map((item, i) => {
    //     // console.log(listDivItems{ i }})

    //     return <input value={listDivItems} type="text" onChange={(e) => setListDivItems(e.target.value)} key={i} style={{ fontSize: 25 }}></input>
    // })
