import React, { Component } from 'react'

export default class Character extends Component {
    render() {
        const quan = this.props.urls;
        return (
            <div className="character-container">
                <img className="character-img" src={this.props.thumbnail.path + "/landscape_xlarge.jpg"} alt={this.props.name + " Marvel Charater"} />
                <h3 className="character-name">{this.props.name}</h3>
                <p className="character-description">{this.props.description}</p>
                <ul className="character-list">
                    {
                        quan.map((value, index) => {
                            return <li key={index}><a href={value.url} target="_blank" rel="noopener noreferrer">{value.type}</a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}