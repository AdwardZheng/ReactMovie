import React ,{ PureComponent } from "react";
import './Content.css';
import { Card } from "antd";
import JSON from '../../data/index.js';
import Movie  from '../Movie/Movie.js';
import Search from '../Movie/MovieSearch';
import { PageContext } from "../../Context/context.js";

class Content extends PureComponent {
    render() {
        const data = JSON['data'];
        console.log(data);
        return (
            <div style={{width: 800, margin: '0 auto'}}>
                <PageContext.Consumer>
                    {
                        context => {
                            if (context.page === 'home') {
                                return data['articleList'].map((item, index) => (
                                    <Card 
                                    key={index}
                                    bordered={false}
                                    hoverable={true}
                                    className={"article"}
                                    type="inner">
                                    <div>
                                        <h3>{item['title']}</h3>
                                        <p className={"tag"}>
                                            <span>发表于：XX</span>
                                            <span>标签：XX</span>
                                            <span>浏览：XX</span>
                                        </p>
                                        <a href="javascript:;"><span>{item['desc']}</span></a>
                                    </div>
                                </Card>
                                ))
                            } else if (context.page === 'movie') {
                                return <Movie/>
                            } else if (context.page === 'search') {
                                return <Search/>
                            }
                        }
                        
                        
                        
                        // context.page === 'home' ? data['articleList'].map((item, index) => (
                        //     <Card 
                        //     key={index}
                        //     bordered={false}
                        //     hoverable={true}
                        //     className={"article"}
                        //     type="inner">
                        //     <div>
                        //         <h3>{item['title']}</h3>
                        //         <p className={"tag"}>
                        //             <span>发表于：XX</span>
                        //             <span>标签：XX</span>
                        //             <span>浏览：XX</span>
                        //         </p>
                        //         <a href="javascript:;"><span>{item['desc']}</span></a>
                        //     </div>
                        // </Card>
                        // )) : <Movie/>
                    }
                </PageContext.Consumer>
            </div>
        );
    }
}
export default Content;