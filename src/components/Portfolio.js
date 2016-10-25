var React = require('react');

var Portfolio = React.createClass({
  render: function() {
      var ubuntuFont = {
        fontFamily: 'ubuntu'
      };
      var gunMetal = {color: '#3E3E3B'}
      var denim = {color: '#4C586F'}
      var frenchBlue = {color: '#A2AAB0'}
      var cashmere = {color: '#CBC5C1'}

      //images
      var sydneyTools = require('../images/SydneyTools.png');
      var cvig = require('../images/CVIG.png');
      var uts = require('../images/UTS.png');
      var prime = require('../images/PrimeEducation.png');
      var opjam = require('../images/OPJAM.png');
      return (
      <li className="slide portfolio" style={{background:'#EBECED'}}>
        <div className="s-rows-section s-section">
          <div className="container">
            <div className="columns sixteen">
              <div className="s-title-group ">
                <div className="s-title ">
                  <div className="s-component s-text">
                    <h2 className="s-component-content s-font-title" style={ubuntuFont}>
                      <p>Here's what I've done so far.</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src={sydneyTools} className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="https://sydneytools.com.au">Sydney Tools</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Junior Web Developer</strong>, <em>Joined November 2015</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Roseland, NSW</strong></p>
                          <p style={gunMetal}>
                            Sydney Tools gave me an opportunity to learn and grow in a programming environment. My first task was to recreate Sydney Tools's online store interface as it becomes responsive website.
                            The design was created with Material Design principles, and applied using HTML, CSS, and Javascript. Some JS framework also in use, such as JQuery, AngularJS, HammerJS, etc.
                            <br /><br />
                            Followed by creating enormous automation function for promotion and product listing. This is the fun part that I enjoy the most.
                            I am grateful for the  time I spent in Sydney Tools as cultivate my programming skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src={cvig} className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="http://cvig.com.au">Capital Value International Group</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Freelance Web Developer</strong>, <em>Finished on January 2016</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Hurstville, NSW</strong></p>
                          <p style={gunMetal}>
                            Renewing website for Capital Values was an eye-opening experience. As I working freelance, I learn ways to talk and deal with people,
                            the more I do, the more I know various kind of people.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src={uts} className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="http://uts.edu.au">University of Technology, Sydney</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Bachelor of Science in IT</strong>, <em>Graduated October 2015</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Ultimo, NSW</strong></p>
                          <p style={gunMetal}>
                            Studying Information Technology in UTS was an enjoyable moment. Vast kind of knowledge and moments were accumulated in my 2 years.
                            Awesome peers, teacher, and environment sometimes made me dumbfounded, letting me realize that I am still lacking in this field. The urge of learning makes me do some self-learning and self-project during my Uni life.
                            Through ups and downs with friends was the most memorable momments.
                            <br /><br />
                            <a href="http://utsprojectpitch.com.au/">UTS Project Pitch</a> showed me another prespective in technology.
                            By joining this competition of startup idea, I learn the business side of a technology. This is the beginning of my interest growth in StartUp, as well as making friends outside of my degree.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src={prime} className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="https://primeedu.com.au">Prime Education Centre</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Freelance Web Developer</strong>, <em>Autumn 2014</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Sydney, NSW</strong></p>
                          <p style={gunMetal}>
                            Prime Education Centre let me experience and start my first freelance job. The steep learning curve happened during the first 2 months working here.
                            I first met the well known WordPress here, in addition to setting up a web server, email server also knowledge about domain name and SEO.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-layout-mediaLeft s-repeatable" style={ubuntuFont}>
              <div data-sorting-index="0" className=" s-repeatable-item">
                <div className="clearfix s-rva">
                  <div className="s-rva-media offset-one five columns">
                    <div className="s-component s-media ">
                        <img alt="" title="" data-description="" src={opjam} className="lazyload"/>
                    </div>
                  </div>
                  <div className="s-rva-text undefined nine columns">
                    <div className="s-item-title">
                      <div className="s-component s-text">
                        <h3 className="s-component-content s-font-heading" style={gunMetal}>
                          <p><a target="_blank" href="https://opjam.com">OPJAM</a></p>
                        </h3>
                      </div>
                    </div>
                    <div className="s-item-subtitle">
                      <div className="s-component s-text">
                        <h6 className="s-component-content s-font-body" style={denim}>
                          <strong>Android Developer Intern</strong>, <em>Spring 2013</em>
                        </h6>
                      </div>
                    </div>
                    <div className="s-item-text">
                      <div className="s-component s-text">
                        <div className="s-component-content s-font-body">
                          <p style={frenchBlue}><strong>Sydney, NSW</strong></p>
                          <p style={gunMetal}>
                            OPJAM reinforced in me that IT field vast. As a student, I was indecisive in choosing my career path. Joining OPJAM was my effort in stretching up my choice of opportunity.
                            Eventually, after creating my second mobile apps in my entire lifetime I got an insight of what programming really is.
                            Realizing that core programming is all the same, the differences are only languages and an environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Portfolio;