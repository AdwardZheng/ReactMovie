import React, { PureComponent } from 'react';
import { Icon,Carousel } from 'antd';

import { Link } from 'react-router-dom';
import "./Index.css";
import About from './AboutMe.js';
import Resume from './Resume.js';
import Skills from './SKills.js';

class Index extends PureComponent {
    pagelist = [<About/>, <Resume/>];

    handleWhell = (e) => {
        if (e.deltaY > 0) {
            this.carousel.next();
        } 
        if (e.deltaY < 0) {
            this.carousel.prev();
        }
    }

    render() {
        const header = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        return (
            <div className='resume'>
                
                <Carousel ref={carousel => this.carousel = carousel} infinite={false} vertical dots>                    
                    <div onWheel={this.handleWhell}>
                        <Resume/>
                    </div>
                    <div onWheel={this.handleWhell}>
                        <About/> 
                    </div>  
                    <div onWheel={this.handleWhell}>
                        <Skills/>
                    </div>
                </Carousel>
                <Icon className="next" type='up'/>
                <Link to="/"><img className='headerIcon' src={header} alt="header"/></Link>
            </div>
            
        );
    }
}

export default Index;