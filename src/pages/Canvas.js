import React, { Component, useRef, useState } from 'react'
import { motion } from "framer-motion"
import MotionDiv from "../components/MotionDiv"

import LayoutCanvas from "../components/LayoutCanvas"

export default class Canvas extends Component {
    // state = {
    //     valueToggle: false
    // }

    render() {
        // console.log(this.props.match.params.id)

        // const handleDrag = (e, info) => {
        //     console.log(info.point.x)
        // }



        // const [value, setValue] = useState(false)
        // const constraintsRef = useRef(null)
        return (
            <LayoutCanvas localId={this.props.match.params.id} />
        )
    }
}
