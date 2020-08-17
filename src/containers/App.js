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
import blog from '../images/blog.png';

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
                     <h1 className="mr6 ml6">
                        My name is Yeison and I am starting out my career as a full-stack developer.
                        <br/><br/>
                        I'm always trying to improve and you can check out my work
                        <a href="#">here!</a>
                     </h1>
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
                  <div className="w-50 pa4">
                     <Card
                        src = {funnysite}
                        title = 'Funnysite'
                        url="https://yeidan79.github.io/funnysite/"
                        />
                  </div>
                  <div className=" flex justify-center items-center w-50 pa4">
                     <div>
                        <p>Funnysite is a simple site that uses <span style={{color:'#DE0208'}}>
                           React</span> to render a table and few buttons.</p>
                        <p>The main focus is showing jokes about Chuck Norris (because
                           everyone likes the old school Chuck jokes) that are fetched
                           from an <span style={{color:'#DE0208'}}>API</span>. You can
                           refresh or even add more jokes!</p>
                        <p>Finally, if you hover over the numbers you'll get an
                           interesting fact about them!</p>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="flex justify-center items-center w-50 pa4">
                     <div>
                        <p>It has the same features of the normal Funnysite but this
                           time it was developed using <span style={{color:'#DE0208'}}>
                           React</span> + <span style={{color:'#DE0208'}}>Redux
                           </span>!!!
                        </p>
                     </div>
                  </div>
                  <div className="w-50 pa4">
                     <Card
                        src = {funnysiteredux}
                        title = 'Funnysite-Redux'
                        url="https://yeidan79.github.io/funnysite-redux/"
                        />
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="w-50 pa4">
                     <Card
                        src = {mars}
                        title = 'Mars'
                        url="#"
                        />
                  </div>
                  <div className=" flex justify-center items-center w-50 pa4">
                     <div>
                        <p>Well, this site is about <span style={{color:'#DE0208'}}>
                        Mars</span>.</p>
                        <ul>
                           <li>
                              <p>First, it has very nice background images that, combined with the
                              images fetched from various NASAs API, makes this site to be dazzling!</p>
                           </li>
                           <li>
                              <p>Second, to make something special on how to navigate through this
                              Mars site, I had the idea of scrolling using our <span
                              style={{color:'#DE0208'}}>voice</span>. And i did that using
                              <span style={{color:'#DE0208'}}> IBMs AI Watson</span> Speech to text,
                              so you can scroll using buttons or your own voice! Great!!</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="flex justify-center items-center w-50 pa4">
                     <div>
                        <p>This is a full-stack project that uses <span style={{color:'#DE0208'}}>
                           React</span> for the front-end and <span style={{color:'#DE0208'}}>
                           Node/Express.js</span> for the back-end with a <span style={{color:'#DE0208'}}>
                           Postgresql</span> database to save all the registered users.</p>

                        <p>Using a <span style={{color:'#DE0208'}}>demograpihics and face detection</span>
                           API from <span style={{color:'#DE0208'}}>Clarifai</span>, a <span
                           style={{color:'#DE0208'}}>registered</span> user can introduce an image url and
                           the APIs AI will recognize the face in it and will tell us the approximate age and
                           ethnicity!</p>

                     </div>
                  </div>
                  <div className="w-50 pa4">
                        <Card
                           src = {smartbrain}
                           title = 'FaceApp'
                           url="https://smartapp-face.herokuapp.com/"
                           />
                  </div>
               </div>
               <div className="flex justify-center align-center">
                  <div className="w-50 pa4">
                        <Card
                           src = {blog}
                           title = 'Django Blog'
                           url="#"
                           />
                  </div>
                  <div className="flex justify-center items-center w-50 pa4">
                     <div>
                        <p>Here I have a classic blog site made with <span style={{color:'#DE0208'}}>
                           Django</span> for the back-end with amazing capabilities like classifying
                           posts, registering new users and customizing their profiles with images!</p>
                        <p>For the front-end I downloaded a free blog <span style={{color:'#DE0208'}}>
                           template</span> (html + css with bootstrap 4) and <span style={{color:'#DE0208'}}>
                           transformed</span> it in order to make it work with django.</p>
                     </div>
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
