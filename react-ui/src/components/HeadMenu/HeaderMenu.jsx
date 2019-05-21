import React from 'react';
import { connect } from 'react-redux';
import { Segment, Image, Dropdown, Visibility, Menu, Icon, Button, Input, } from 'semantic-ui-react';
import Flag from 'react-flags';

import logo from '../../logo.png';
import './HeaderMenu.css'
const options = [
    {
        key: 'user',
        text: (
            <span>
                Signed in as <strong>Bob Smith</strong>
            </span>
        ),
        disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out' },
]

class HeaderMenu extends React.Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { fixed } = this.state
        return (
            <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu} >
                <Segment vertical style={{ borderBottom: '2px solid black' }} >
                    <Menu fixed={fixed ? 'top' : null} secondary={!fixed}>
                        <Menu.Item style={{ width: 240 }}><Image src={logo} centered style={{ height: 30, width: 'auto' }} /></Menu.Item>
                        <Menu.Item style={{ width: 310 }}>
                            <Input icon={<Icon name='angle down'/>} placeholder='Search for UPC or ASIN or keyword' />
                            <Button icon><Icon name='search'/> </Button>
                        </Menu.Item>
                        <Menu.Menu position='right' style={{marginRight: 10}}>
                            <Menu.Item>
                                <Dropdown trigger={
                                    <Icon name='folder open' size='big' />
                                } options={options} />
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown trigger={
                                    <Icon circular size='large' className='flag-mine'>
                                        <Flag name='US' format='png' pngSize={64} shiny={true} alt='Canada Flag' basePath='/flags' height='80' />
                                    </Icon>
                                } options={options} />
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown trigger={
                                    <Icon.Group size='big'>
                                        <Icon size='large' name='circle outline' style={{marginRight: 0}}/>
                                        <Icon name='help' />
                                    </Icon.Group>
                                } options={options} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </Visibility>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedHeaderMenu = connect(mapStateToProps)(HeaderMenu);
export { connectedHeaderMenu as HeaderMenu };