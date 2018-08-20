import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import {Icon, Menu} from 'antd';
import {SearchContext,PageContext} from '../../Context/context.js';

class HeaderNav extends PureComponent {

    constructor() {
        super();

        this.state = {
            input: '',
        }
    }

    handleInput = e => {
        this.setState({
            input: e.target.value,
        });
    }

    handleClick = () => {
        console.log('重新设置handleChangeSearchName: ', this.state.input);
        this.props.handleChangeSearchName(this.state.input);
    }

    render() {
        const { Item } = Menu;

        return (
            <PageContext.Consumer>
                {
                    context => (
                        <div>
                            <Menu selectedKeys={Number(context.page) < 5 ? [context.page] : []} style={{marginLeft: '15%', maxWidth:'500px', display: 'inline-block'}} theme='dark' mode='horizontal'>
                                <Item key='1' onClick={() => context.handleChangePage('1')} >
                                    <Link to={'/home'}>
                                        <span><Icon type="home"/>主页</span>
                                    </Link>
                                </Item>
                                <Item key='2' onClick={() => context.handleChangePage('2')}>
                                    <Link to="/say">
                                        <span><Icon type="coffee"/>说说</span>
                                    </Link>
                                </Item>
                                <Item key='3' onClick={() => context.handleChangePage('3')}>
                                    <Link to={'/movie'}>
                                        <span><Icon type="solution"/>电影</span>
                                    </Link>
                                </Item>
                            </Menu>
                            <span className={'searchWrapper'}>
                                <input placeholder={'这里可以搜索电影哦'} value={this.state.input} onChange={this.handleInput} className={'search'} type="text"/>
                                <span onClick={ () => { context.handleChangePage('5'); this.handleClick()}}>
                                    <Link to={'/search/'+this.state.input}>
                                        <Icon className={'searchIcon'} type={'search'} />
                                    </Link>
                                </span>
                            </span>
                        </div>
                    )
                }
            </PageContext.Consumer>
        );
    }
}

export default (
    props => (
        <SearchContext.Consumer>
            {
                context => (
                    <HeaderNav {...props} handleChangeSearchName = {context.updateSearchName} searchName = {context.searchName}/>
                )
            }
        </SearchContext.Consumer>
    )
);