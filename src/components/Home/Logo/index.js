import './index.scss';
import logoS from '../../../assets/images/logo-b.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';
import { motion } from 'framer-motion'



const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    const pathVariants = {
        hidden: {
          pathLength: 0
        },
        visible: {
          pathLength: 1,
          transition: {
            duration: 10,
          }
        }
      }

    useEffect(() => { 

        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline().to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })

            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })
        
        gsap.fromTo(
            solidLogoRef.current, {
                opacity: 0,
        }, {
                opacity: 1,
                delay: 4,
                duration4: 4,
                }
            )
        
    }, [])



    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} src={logoS} alt="S" className="solid-logo" />
            <svg
                width="900pt"
                height="800pt"
                version="1.0"
                viewBox="0 0 800 895"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(-100 0) scale(4)"
                fill="none"
                >
                <motion.path
                    d="M224.082,117.854c1.165,0.08,2.21,0.965,1.648,2.291c-6.349,16.396-11.614,47.258-29.697,55.054   c-25.438,10.971-57.224,12.819-84.511,12.377c-24.794-0.362-59.997-0.643-82.823-11.332C9.651,167.323,5.793,136.983,0.328,119.06   c-0.04-0.12,0-0.241,0-0.402c-0.322-0.321-0.442-0.844-0.201-1.206c4.3-5.586,20.012-4.903,26.643-5.988   c15.753-2.692,31.465-5.586,47.138-8.6c0.723-0.121,1.286,0.12,1.688,0.563c3.054-4.903,6.148-9.685,9.042-14.386   c10.207-16.597,21.017-32.872,32.711-48.504c0.442-0.643,1.125-0.844,1.768-0.764c-0.281-0.884,0.643-1.969,1.567-1.326   c22.625,16.476,39.101,40.145,53.045,64.86c0.241-0.241,0.563-0.402,0.924-0.281c8.64,2.491,17.24,5.224,25.839,7.917   c5.787,1.768,14.105,2.652,19.289,6.148c0.362-0.281,0.764-0.563,1.165-0.884C222.394,114.961,224.363,116.408,224.082,117.854z    M215.844,120.145c-5.425-0.683-12.699-4.179-16.396-5.345c-8.319-2.692-16.516-5.787-24.513-9.323   c5.385,9.685,10.448,19.49,15.271,29.054C199.167,130.995,207.767,126.213,215.844,120.145z M205.597,158.844   c6.631-11.815,10.93-25.518,15.833-38.217c-18.244,15.552-40.065,23.428-63.051,26.322c13.663,5.787,26.643,13.623,38.94,21.74   C200.493,166.399,203.065,163.344,205.597,158.844z M184.7,174.195c3.456-1.005,6.269-2.009,8.76-3.255   c-13.101-8.318-26.724-15.592-40.105-23.428c-10.448,1.005-21.098,1.045-31.747,0.322c-4.3-0.322-8.68-0.643-13.141-1.005   c-0.161,0.121-0.321,0.241-0.563,0.322c-23.91,9.403-48.544,17.601-73.178,25.076c3.818,2.049,8.158,3.657,13.261,4.581   c22.142,3.978,44.606,6.39,67.11,6.43C138.567,183.277,162.116,180.705,184.7,174.195z M186.549,135.857   c-18.285-33.475-37.252-63.935-63.493-91.583c8.278,32.269,9.645,65.704,3.295,98.575c-0.08,0.522-0.442,0.804-0.844,0.924   C146.524,144.658,167.34,142.769,186.549,135.857z M122.493,143.694c0.563,0,1.125,0.04,1.688,0.04   c-0.482-0.201-0.804-0.643-0.763-1.286c4.3-33.836,3.858-66.387-2.049-100.022c-1.165,33.515-1.286,66.588,1.567,100.062   C122.975,143.011,122.774,143.412,122.493,143.694z M113.973,143.091c2.049,0.161,4.099,0.281,6.148,0.442   c-0.241-0.281-0.442-0.603-0.482-1.045c-3.215-32.55-3.978-65.543-0.643-98.093C108.307,59.706,97.738,75.057,87.932,90.97   c-8.921,14.507-16.034,31.104-26.884,44.204c-0.08,0.08-0.161,0.121-0.281,0.121c-0.241,0-0.522-0.281-0.442-0.563   c2.813-9.725,7.836-19.048,13.261-28.009c-12.458,2.492-24.955,4.822-37.453,6.992c-5.586,0.924-11.131,1.849-16.717,2.692   c-2.25,0.321-12.659,0.08-16.677,0.763c18.365,8.479,37.975,14.346,57.948,18.445C78.329,139.273,96.251,141.564,113.973,143.091z    M100.712,146.105c-33.595-3.295-69.481-9.846-97.732-26.523c7.796,19.369,12.658,40.427,29.135,51.076   C54.659,161.777,77.605,153.378,100.712,146.105z"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                </g>
            </svg>
        </div>
    )
}

export default Logo