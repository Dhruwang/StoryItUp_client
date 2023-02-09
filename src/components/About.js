import React,{useEffect} from "react";
import logo from "../images/logo.png"

export default function About(props) {

    useEffect(() => {
        props.setProgress(100)
    }, [])

  return (
    //photo
    <div className="publish">
      <div className="vectorBackground publishMain">
        <div className="publishInner">
          <h1>ABOUT US</h1>
          <div className="aboutImg">
            <img src="https://raw.githubusercontent.com/sanket281/StoryItUp/main/src/images/aboutPage_image.png" alt="" />
          </div>
          <br />
          <div className="about1">
            <img src="https://github.com/sanket281/StoryItUp/blob/main/src/images/aboutPage_image2.jpg?raw=true" alt="" />
            <div className="about12">
              <h2>WHO WE ARE</h2>
              <p>
                Welcome to Story<span className="text-secondary">It</span>UP, We
                are a young, energetic and enthusiastic team of members who aim
                to empower and uplift aspiring entrepreneurs by showcasing their
                stories and connecting them with potential investors.
              </p>
            </div>
          </div>
          <div className="about2">
            
            <div className="about22">
              <h2>OUR VISION</h2>
              <p>
                As a team of students, we understand the difficulties that come
                with starting a new business and the importance of support and
                resources in making it successful. That's why our vision is to
                creat this platform to provide a space for entrepreneurs to
                share their vision, struggles, and successes with the world.
              </p>
            </div>
            <img src="https://github.com/sanket281/StoryItUp/blob/main/src/images/aboutPage_image3.jpg?raw=true" alt="" />
          </div>
          <div className="about3">
            <img src="https://github.com/sanket281/StoryItUp/blob/main/src/images/aboutPage_image4.jpg?raw=true" alt="" />
            <div className="about32">
              <h2>OUR MISSION</h2>
              <p>
                By featuring a diverse range of startups, our mission is to
                inspire others to pursue their passions and bring their ideas to
                life. We believe that every entrepreneur has a unique story to
                tell and the potential to change the world, and we want to help
                them get there.
              </p>
              <p>
                In addition to sharing stories, we also offer a directory of
                resources for entrepreneurs, including funding opportunities and
                events. Our goal is to create a supportive community for
                startups and connect them with the resources they need to
                succeed.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <button className="btn" >Get Started</button>
          <br /><br /><br />
          <div className="end">
            <div className="end1">
            <img id='logo' src={logo} alt="logo"></img>
            <br /><br />
            <h3>
                Thank you for visiting Story
                <span className="text-secondary">It</span>Up. We look forward to
                featuring your startup story and helping you reach new heights.
            </h3>
            </div>
            <br />
            <hr />
            <br />
            <div className="end2">
                <h3>
                © Copyright 2023 StoryItUp | All rights reserved
                </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}