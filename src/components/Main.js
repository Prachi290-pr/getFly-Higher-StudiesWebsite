import React, { useEffect} from 'react'
import '../styles/Main.css';
import semi1 from "../assets/semi1.jpg";
import semi2 from "../assets/semi2.jpg";
import semi3 from "../assets/semi3.jpg";
import semi4 from "../assets/semi4.jpg";
import semi5 from "../assets/semi5.jpg";
import semi6 from "../assets/semi6.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import Aos from 'aos';
import 'aos/dist/aos.css'



const Data = [
    {
        id:1,
        imgSrc : semi1,
        name:"Attend CIP's USA Admission Day ",
        time: "Time : 11am - 4pm",
        venue :"Venue : CIP Office, Dadar",
        description:"Learn everything you need to know about studying bachelor's in USA and get end-to-end expert guidance from us."
    },
    {
        id:2,
        imgSrc : semi2,
        name:"Apply for UK November Intake Seminar",
        time: "Time : 12am - 3pm",
        venue: "Venue : CIP Office, Dadar",
        description:"Learn everything you need to know about studying bachelor's in USA and get end-to-end expert guidance from us."
    },
    {
        id:3,
        imgSrc : semi3,
        name:"Attend CIP's Abroad Fair",
        time: "Time : 11am - 6pm",
        venue: "Venue : VPP College, Sion",
        description:"Learn everything you need to know about studying bachelor's and get end-to-end expert guidance from us."
    },
    {
        id:4,
        imgSrc : semi4,
        name:"Attend CIP's Canada Admission Day",
        time: "Time : 11am - 4pm",
        venue: "Venue : CIP Office, Dadar",
        description:"Learn everything you need to know about studying bachelor's in Canada and get end-to-end expert guidance from us."
    },
    {
        id:5,
        imgSrc : semi5,
        name:"IELTS MasterClass",
        time: "Time : 9am - 12pm",
        venue: "Venue : Online",
        description:"Learn everything you need to know about studying bachelor's get end-to-end expert guidance about IELTS exam."
    },
    {
        id:6,
        imgSrc : semi6,
        name:"GRE & TOEFL Seminar",
        time: "Time : 10am - 1pm",
        venue: "Venue : VPP College, Sion",
        description:"Learn everything you need to know about studying bachelor's get end-to-end expert guidance about GRE & TOEFL exam."
    },

]

const Main = () => {

    //scroll animation using hook
useEffect(()=> {
    Aos.init({duration:2000})
  }, [])
  
  return (
    <div className='main'>
      <div className='secTitle'>
        <p>Latest Seminars</p>
      </div>

      <div className='secContainer '>
        {
            Data.map(({id, imgSrc, name, venue, time, description})=> {
                return(
                    <div key={id} data-aos="fade-up" className='courseCard'>

                        <div className='imgDiv'>
                            <img src= {imgSrc} />
                        </div>

                        <div className='cardInfo'>
                            <h4 className='courseName'>{name}</h4>
                            <span className='location'>
                             <TfiLocationPin className='icon' />
                             <span className='name'>{venue}</span>
                            </span>

                            <div className='time'>
                                <p>{time}</p>
                            </div>

                            <div className='descrip'>
                                <p>{description}</p>
                            </div>

                            <button className='btn' href="#">
                                RSVP
                            </button>
                        </div>
                    </div>

                )
            })
        }
      </div>
    </div>
  )
}

export default Main
