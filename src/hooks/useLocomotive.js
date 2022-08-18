import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll'
import {useEffect} from 'react'

export default function useLocomotive(start){
    useEffect(() => {
        if (!start) return
        const scrollEl = document.querySelector('#main-container')

        const locoScroll = new LocomotiveScroll({
            el:scrollEl,
            smooth: true,
            

        })
    } , [start])
}

