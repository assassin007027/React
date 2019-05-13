import React from 'react';


class SearchBar extends React.Component {
    state = {term: ""};

    onChangeSearchString = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar" ref={this.searchbarRef}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h3>Video Search in YouTube</h3>
                    <div className="ui fluid action input">
                        <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onChangeSearchString} />
                        <button className="ui icon button" type="submit">
                            <i className="search icon"></i>
                        </button>
                    </div>
                    <div style={{textAlign: 'center'}}>{this.props.count} videos find.</div>
                </form>
            </div>
        );
    }
}

export default SearchBar;