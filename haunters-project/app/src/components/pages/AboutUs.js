import React from 'react'
import MyForm from '../myForm'

const AboutUs = () => {
    return <div>
        <div className="myheader"><center><h1>About Us</h1></center></div>
        
        {/* Contact Form */}
        <h2>Contact the Otherside</h2>
        <MyForm />
        
        {/* Map */}
        <div className = "Map"><h2>Directions</h2>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="604" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=300%20Montobello%20Avenue&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        <p>Address: 300 Montobello Avenue, Stoke, Nelson 7011, NZ<br/>Phone: +64 36265696</p>
        </div>

        {/* Frequently Asked Questions Section */}
        <h2>F.A.Q</h2>
            <h4>Faint of Heart</h4>
                <p>If you get too scared during your adventures with us you will not recieve a refund however we can escort you through safely to end your experience if deemed appropriate.</p>
            <h4>Photos and Video recording?</h4>
                <p>Photos and video recordings of your time here at Haunters is encouraged and welcome! We want you to share your experiences with the world via social media so that you can show your friends how great and scary we are! Depending on what ticket you buy we take professional photos and the group photo at the end of every attraction is yours to keep and share </p>
            <h4>When is the best time to come?</h4>
                <p>Every night here at Haunters is frightenly busy… The best time to come is as early as you can to avoid the ques! Any haunting holidays may be even busier such as Friday the 13th and Halloween so be sure to prepare and travel safely! We don’t want you dying before you get here ;)</p>
            <h4>Is it REALLY that scary???</h4>
                <p>Hell, yeah, it's scary. If you're not scared by the end of it you really don't have a soul! But fear is subjective some people are more scared than others and some people find different things scary… Which is why we have more than just scary monsters! We are located at what used to be an abandoned asylum so if the history of the place doesn’t scare you maybe the real ghosts will ;)</p>
            <h4>Will the creatures hurt me?</h4>
                <p>The creatures are just real people pretending to be creatures. They can touch you, but they will never cause you any physical harm. If you feel one of the creatures is getting too handsy or close for your liking, then you can make cross sign with your fingers and shout “BEGONE!” they will back off just a little bit! However, for our other creatures that we cannot control… Well we’re afraid you’re on your own there!</p>
            <h4>Should I worry about any health concerns?</h4>
                <p>If you have heart problems, it’s best not to experience Haunters! As it could kill you and we do not want that… If you have Asthma you should bring your inhaler as going through our attractions can take a bit out of you! Always consult your doctor before undertaking anything that you think could put you in danger</p>
            <h4>Can we be denied entry?</h4>
                <p>If we feel that you are endangering our guests and creatures, you will be asked to leave the premises. Everyone wants to have a good time and if you’re intoxicated or under the influence of drugs then we have the right to ask you to leave</p>
            <h4>Do you provide food and drinks?</h4>
                <p>Yes! We have candy, snacks, popcorn and a range of fizzy drinks available at the Haunters Café! The function room can seat 66 people for full meals and birthday parties!</p>
            <h4>Do you do discounts?</h4>
                <p>Yes! If you book online with us you will receive a 10% discount for each ticket purchase</p>
            <h4>Are there any restricted areas?</h4>
                <p>There are a few locked rooms that are not meant to be entered. These are usually staff only or we have deemed them too unsafe to use for the time being. We look forward to having all rooms accessible in the future when we can verify that they are safe to operate in.</p>
            <h4>How long does a visit to Haunters last?</h4>
                <p>Haunters House takes roughly 40 minutes to complete<br></br>
                Haunted Forest takes also about 40 minutes to complete.<br></br>
                To complete all of Haunters Attractions it will roughly take 120 min of pure spookiness</p>
            <h4>How should I dress?</h4>
                <p>You should not be dressed to impress anyone. Wear clothes that are suitable for outdoor activity, clothes that you don’t mind getting dirty or torn are recommended</p>
            <h4>Does weather affect the attractions?</h4>
                <p>Heavy rain or fog can always enhance the atmosphere of Haunters so we will not close any attractions due to weather. However, if it is very bad and flooding begins or something like that then we may close certain locations of the attractions for safety reasons! We always want you to be safe when you visit Haunters… We just don’t want you to feel safe.</p>
            <h4>Refunds?</h4>
                <p>Once you commit to the purchase of your ticket you cannot get a refund. Unless we couldn’t provide the bone chilling experience, we’ve proudly set for ourselves. No refunds if you got scared because that’s our job!</p>
        </div>
}

export default AboutUs