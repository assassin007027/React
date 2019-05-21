import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Icon,
    Segment,
    Grid,
    List
} from 'semantic-ui-react'
import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <Segment style={{ marginTop: 0 }}>
                <Grid>
                    <Grid.Column stretched style={{ width: 240, padding: 0 }}>
                        <Segment inverted>
                            <List relaxed='very' size='large' inverted>
                                <List.Item>
                                    <List.Icon name='home' size='large' verticalAlign='middle' />
                                    <List.Content verticalAlign='bottom'>
                                        <List.Header as='a'>My Dashboard</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Header>Pre-selling</List.Header>
                                <List.Item>
                                    <List.Icon name='server' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Product Tracker</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='sellsy' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Supplier Synthesis</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='search plus' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Supplier Research</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='sync alternate' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Product Research</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='spy' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Competitor Research</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='hand pointer outline' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Keywords</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='content' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Listing Automation</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Header>Prep</List.Header>
                                <List.Item>
                                    <List.Icon name='barcode' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Logistic</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Header>Live</List.Header>
                                <List.Item>
                                    <List.Icon name='chart line' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Pricer</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='balance scale' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Listing Optimizer</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Header>Post-selling</List.Header>
                                <List.Item>
                                    <List.Icon name='arrows alternate' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Access</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='setting' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Settings</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Header></List.Header>
                                <List.Item>
                                    <List.Icon name='sign out alternate' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Logout</List.Header>
                                    </List.Content>
                                </List.Item>
                                <Button icon size='mini' floated='right'><Icon name="angle left"></Icon></Button>
                            </List>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column stretched style={{ width: 'calc(100% - 240px)', padding: 0 }}>
                        <Segment></Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedSideBar = connect(mapStateToProps)(SideBar);
export { connectedSideBar as SideBar };