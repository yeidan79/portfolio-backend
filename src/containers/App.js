import React from 'react';
import Button from '../components/Button';
import Menu from '../components/Menu';
import ContactForm from '../components/ContactForm';
import Card from '../components/Card'
import './css/App.css';

import myimage from '../images/myself.png';
import funnysite from '../images/funnysite.png';
import funnysiteredux from '../images/funnysiteredux.png';
import mars from '../images/mars.png';
import smartbrain from '../images/smartbrain.png';

import {
   DiPython,
   DiReact,
   DiPostgresql,
   DiMysql,
   DiJava,
   DiJavascript1,
   DiHtml5,
   DiDjango,
   DiCss3,
   DiGit,
   DiScrum,
   DiNodejs
} from 'react-icons/di';

const axios = require('axios');

class App extends React.Component {

   constructor(props) {
   	super(props);
      this.state = {
         name: '',
         email: '',
         message: ''
   	}
   }

   handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
     this.setState({name: '', email: '', message: ''})
  }

   onNameChange = (event) => {
	     this.setState({name: event.target.value})
   }

   onEmailChange = (event) => {
	     this.setState({email: event.target.value})
   }

   onMessageChange = (event) => {
	     this.setState({message: event.target.value})
   }

   render() {
      return (
         <div>
            <section>
               <div className="flex justify-center items-center mt5">
                  <img src={myimage} alt="myself" className="myImage mr6 grow" />;
                  <h1 className="presentation grow">
                     HELLO
                     <span style={{fontSize:'130px', color:'#DE0208'}}>.</span>
                     <br/>I<span style={{fontSize:'70px', color:'#DE0208'}}>&#39;</span>m
                     <i>Yeison!</i>
                  </h1>
               </div>
               <div className="mt4">
                  <Menu >
                    <Button
                      handleClick={this.newJokes}
                      name="About me!"
                    />
                    <Button
                      handleClick={this.addJoke}
                      name="Portfolio"
                    />
                    <Button
                      handleClick={this.addJoke}
                      name="Contact Me!"
                    />
                  </Menu>
               </div>
            </section>

            <section>
               <div className="flex justify-center items-center mt5">
                  <div>
                     <h1 className="tc b" style={{fontSize:"90px"}}>About me
                        <span style={{color:'#DE0208'}}>!</span>
                     </h1>
                     <h1 className="mr6 ml6">My name is Yeison and I am starting out my career as a full-stack developer.<br/><br/>
                     I'm always trying to improve and you can check out my work <a href="#">here!</a></h1>
                  <div className="flex justify-around mt6 mb5">
                        <div>
                           <h1 className="tc">Web Development</h1>
                           <div className="flex">
                              <a href="https://en.reactjs.org/"
                                 className="grow"
                                 >
                                 <DiReact size={70}/>
                              </a>
                              <a href="https://www.javascript.com/"
                                 className="grow"
                                 >
                                 <DiJavascript1 size={70}/>
                              </a>
                              <a href="https://nodejs.org/en/"
                                 className="grow"
                                 >
                                 <DiNodejs size={70}/>
                              </a>
                              <a href="https://developer.mozilla.org/es/docs/Web/HTML"
                                 className="grow"
                                 >
                                 <DiHtml5 size={70}/>
                              </a>
                              <a href="https://developer.mozilla.org/es/docs/Web/CSS"
                                 className="grow"
                                 >
                                 <DiCss3 size={70}/>
                              </a>
                              <a href="https://www.djangoproject.com/"
                                 className="grow"
                                 >
                                 <DiDjango size={70}/>
                              </a>
                           </div>
                        </div>
                        <div>
                           <h1 className="tc">General Purpose</h1>
                           <div className="flex">
                              <a href="https://www.python.org/"
                                 className="grow"
                                 >
                                 <DiPython size={70}/>
                              </a>
                              <a href="https://www.java.com/en/"
                                 className="grow"
                                 >
                                 <DiJava size={70}/>
                              </a>
                              <a href="https://git-scm.com/"
                                 className="grow"
                                 >
                                 <DiGit size={70}/>
                              </a>
                              <a href="https://www.scrum.org/"
                                 className="grow"
                                 >
                                 <DiScrum size={70}/>
                              </a>
                           </div>
                        </div>
                        <div>
                           <h1 className="tc">Database</h1>
                           <div className="flex">
                              <a href="https://www.postgresql.org/"
                                 className="grow"
                                 >
                                 <DiPostgresql size={70}/>
                              </a>
                              <a href="https://www.mysql.com/"
                                 className="grow"
                                 >
                                 <DiMysql size={70}/>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <h1 className="portfolioTitle tc">Some of my Work</h1>
               <div className="flex justify-center align-center">
                  <div className="w-50">
                     <Card src = {funnysite}/>
                  </div>
                  <div className=" flex justify-center items-center w-50">
                     <p>This is a great site!</p>
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="flex justify-center items-center w-50">
                     <p>This is another great site ok?</p>
                  </div>
                  <div className="w-50">
                     <Card src = {funnysiteredux}/>
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="w-50">
                     <Card src = {mars}/>
                  </div>
                  <div className=" flex justify-center items-center w-50">
                     <p>This is a great site!</p>
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="flex justify-center items-center w-50">
                     <p>This is another great site ok?</p>
                  </div>
                  <div className="w-50">
                     <a href="https://smartapp-face.herokuapp.com/">
                        <Card src = {smartbrain}/>
                     </a>
                  </div>
               </div>
            </section>

            <section>
               <ContactForm
                  onNameChange={this.onNameChange}
                  onEmailChange={this.onEmailChange}
                  onMessageChange={this.onMessageChange}
                  name = {this.state.name}
                  email = {this.state.email}
                  message = {this.state.message}
                  onHandleSubmit = {this.handleSubmit}
                  />
            </section>
         </div>
      )
   }
}

export default App;
