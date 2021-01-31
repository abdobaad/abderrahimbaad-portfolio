import React,{useState,useContext} from 'react';
import  CloseIcon from "../../Resources/icons/close.svg";
import emailjs from "emailjs-com"
import "./LetsTalk.scss";
import {AppContext} from "../../ContextApi/Reducer";

/* interface ITalkData {
    name:string ,
    email:string,
    subject:string,
    message:string
} */

const LetsTalk = () => {
    //TODO
    const {contact} = useContext(AppContext);
    const [showContact,setShowContact] = contact;


    const [TalkData,setTalkData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    const [sending,setSending] = useState(false);
    const [thereisError,setThereisError] = useState(false);
    const [msgSent,setMsgSent] = useState(false);
    const [notValid,setNotValid] = useState(false);
    const validEmail = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        { 
            return true
        }
            return false
    }

    const changeHandler =  (e) => {
        setTalkData({
            ...TalkData,
            [e.target.name]:e.target.value
        })

    }
    const SubmitHandler =async (e) => {
        e.preventDefault();
        e.persist();
        const {name,email,subject,message} = TalkData;
       if(!name || !email || !subject || !message){
           setThereisError(true);
       }else{
         const checkEmail =await validEmail(TalkData.email); 

         if(!checkEmail){
             setNotValid(true);
            return setThereisError(true);
         }else{

        setSending(true);

        const emailMe = await  emailjs.sendForm('service_j3l9779', 'template_yuxxcrq', e.target , 'user_tglqlROb6m51jJP7M2Hb3');

        if(emailMe.text !== 'OK'){
          return console.log("Sorry,the msg wasn't sent");
        }

        setTimeout(() => {
            setSending(false);
            setMsgSent(true) 
        }, 2000);
    
         }
       }
    }

    const closeContact = () => {
      setShowContact(false)
    }

    return (
        <div  style={!showContact ? {display:"none"}:{}} className="letstalk-container">
           <div className="second_container">
           <svg width="742px" height="918px" viewBox="0 0 742 918" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="myClip">
                    <path d="M30.723868,23.5811095 C144.050861,7.86036983 257.377853,0 370.704846,0 C484.031838,0 597.358831,7.86036982 710.685823,23.5811095 L710.685823,23.5811095 C717.704865,24.5547922 723.272289,32.000975 724.059029,41.467178 C735.626137,180.644785 741.409692,319.822393 741.409692,459 C741.409692,598.177607 735.626137,737.355214 724.059029,876.532821 L724.05903,876.532821 C723.27229,885.999025 717.704865,893.445208 710.685824,894.418891 C597.358831,910.139631 484.031838,918 370.704846,918 C257.377853,918 144.050861,910.139631 30.7238682,894.418891 L30.7238682,894.41889 C23.7048271,893.445208 18.1374026,885.999025 17.3506626,876.532822 C5.7835542,737.355215 0,598.177607 0,459 C0,319.822393 5.78355416,180.644786 17.3506625,41.4671796 L17.3506612,41.4671794 C18.1374013,32.0009757 23.7048263,24.5547922 30.723868,23.5811095 Z" id="path-1"></path>
                    </clipPath>
                </defs>
            </svg>
            <svg width="742px" height="768px" viewBox="0 0 742 768" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs> 
                    <clipPath id="myClip2">
                    <path d="M31.223868,19.727987 C144.550861,6.57599568 257.877853,0 371.204846,0 C484.531838,0 597.858831,6.57599567 711.185823,19.727987 C718.204865,20.5425712 723.772289,26.7720575 724.559029,34.6914953 C736.126137,151.127663 741.909692,267.563832 741.909692,384 C741.909692,500.436168 736.126137,616.872336 724.559029,733.308504 C723.77229,741.227942 718.204865,747.457429 711.185824,748.272014 C597.858831,761.424005 484.531838,768 371.204846,768 C257.877853,768 144.550861,761.424005 31.2238682,748.272014 C24.2048271,747.457429 18.6374026,741.227942 17.8506626,733.308505 C6.2835542,616.872337 0.5,500.436168 0.5,384 C0.5,267.563832 6.28355416,151.127664 17.8506625,34.6914967 C18.6374013,26.7720581 24.2048263,20.5425712 31.223868,19.727987 Z" id="path-1"></path>
                    </clipPath>
                </defs>
            </svg> 
            <div className="letstalk">
                <span onClick={()=>closeContact()} className="close_btn" >
                    <img src={`${CloseIcon}`} alt="close" /> 
                </span>
                <div className="title">
                       <h1 style={msgSent ? {  marginBottom: "5rem",textAlign: "center"} : {}} className="header_title">{msgSent ? 'Thank you!' : "Let's Talk"}</h1>
                       <div className="header_text">I will get back to you within one to two days through email. Also divlease don't forget to check your spam account just in case!</div>
                </div>
               
                {!msgSent  ?   <div className="letstalk_form-container">
                   <form onSubmit={e=>SubmitHandler(e)}>
                      <div className="input-container">
                          <input onChange={e=> changeHandler(e)} value={TalkData.name} type="text" name="name" />
                          <div className="inderline" />
                          <label htmlFor="name">Name *</label>
                         {thereisError && TalkData.name === ''  && TalkData.name === '' ? <span className="error_comp">The Name is Required</span>: null}
                      </div>
                      <div className="input-container">
                          <input onChange={e=> changeHandler(e)} value={TalkData.email} type="email" name="email" />
                          <div className="inderline" />
                          <label htmlFor="email" >Email *</label>
                             {thereisError && TalkData.email === ''  ? <span className="error_comp">{notValid ? "This Email is not valid" : "The Email is Required"}</span>: null}
                      </div>
                      <div className="input-container">
                          <input onChange={e=> changeHandler(e)} value={TalkData.subject} type="text" name="subject" />
                          <div className="inderline" />
                          <label htmlFor="subject" >Subject *</label>
                          {thereisError && TalkData.subject === ''? <span className="error_comp">The Subject is Required</span>: null}
                      </div>
                      <div style={{height:"10em"}} className="input-container">
                          <textarea  onChange={e=> changeHandler(e)} value={TalkData.message} name="message" cols={50} required />
                          <div className="inderline" />
                          <label htmlFor="message">Message *</label>
                          {thereisError && TalkData.message === ''  ? <span className="error_comp">The Message is Required</span>: null}

                      </div>
                      
                      <button disabled={sending} id={sending ? 'loading_btn' : ''} className="submit_btn" type="submit">
                       <span>{sending ? 'Loading...' :'Send Request'}</span>
                      </button>
                   </form> 
                  
               </div>
               :
               <button onClick={()=>closeContact()}  className="ok_btn ">
                   OK
               </button>
              }
            </div>
           </div>
        </div>
    );
};

export default LetsTalk;