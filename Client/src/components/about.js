import React from 'react';
import Bomb from './Images/icons8-3d-50.png'

const About = ()=>{
    return(
        <>
       <div className="aboutcontainer">
     
  <div   className="card-body1">
 <h3>Our Aim:-</h3>
    <blockquote   className="blockquote mb-0">
      <h5>We are a team of college students of LNCT Bhopal.
        <br />Our aim for making this website was to tackle the problems we faced as first year students.
        During exams there was always unavailability of books in our campus and when they were available they 
        were sold for very high prices.Now we dont want any other student to face what we faced so we developed a mechanism 
        in which we can provide good quality second hand books in less than half price of the book and once your exams are conducted 
        you can sell that book again to us given the fact that condition of book should remain static.
        <cite title="Source Title">
        <br />Also we know what it feels when you have exams nearby and you have to waste your valuable time finding books stationary to stationary and paying 
        unreasonable high prices so to solve this issue we provide door to door service you have to just order or sell the book in our website and we will
         be there to deliver the book and come to reciever when you want to sell it for you.From now on there will be no time waste on searching books and paying unreasonable prices for it.</cite></h5>
<br />      <footer   className="blockquote-footer">Buy sell books from anywhere in Bhopal in cheapest price available <br/>Just call us and we will be there for you. </footer>
    </blockquote>
<h3  className="abc">  
  Website developed and designed by Sanat Kumar Pandey.
  </h3>
<h3 className="abc">  
  Start-up idea by Arpit Mishra and Ambuj Tripathi.
  </h3>

<img src = {Bomb} alt = "close"></img>
  </div>
</div>
       
        </>
    )
}

export default About