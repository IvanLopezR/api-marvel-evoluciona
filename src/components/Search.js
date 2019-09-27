import React, { Component } from 'react';
import { marvelQuery } from '../services/MarvelQuery';
import Character from './Character';
import axios from "axios";


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            nameRequired: ""
        };
        this.isLoading = false;
        this.anySearch = false;
    }

    getCharacter = (name) => {
        this.isLoading = false;
        if (name !== "") {
            axios.get(marvelQuery.UrlBase + name + marvelQuery.auth)
                .then(responseFromApi => {
                    const info = responseFromApi.data
                    this.setState({
                        ...this.state,
                        characters: info.data.results,
                    })
                })
            this.isLoading = true;
        }
    }

    search() {
        this.anySearch = true;
        this.getCharacter(this.state.nameRequired)
        if (this.state.characters.length === 0) {
            this.anySearch = false;
        }
    }

    nameCharacter(e) {
        e = e.target.value;
        this.setState({
            ...this.state,
            nameRequired: e
        })
    }

    render() {
        return (
            <div className="principal-container">
                <div className="search-container">
                    <input className="search-character" placeholder="Character Name..." onChange={(e) => this.nameCharacter(e)}></input>
                    <button className="find-button" onClick={() => { this.search() }}><img src="lupa.png" className="logo-button" alt="lupa"/></button>
                </div>
                {this.isLoading
                    ?
                    <div className="container-characters">
                        <div className="characters">
                            {this.state.characters.map((feature, idx) => {
                                return <Character {...feature} key={idx} />
                            })}
                        </div>
                    </div>
                    :
                    <div>
                        {
                            this.anySearch
                                ?
                                <h1 className="result">Loading...</h1>
                                :
                                <h1 className="result">Empty List</h1>
                        }
                    </div>
                }
            </div>
        )
    }
}