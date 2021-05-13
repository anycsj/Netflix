import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";


export default class extends React.Component {

    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.state({ loading : true });

        try { 
            const { data : { result : movieResults } } = await moviesApi.search(searchTerm);
            const { data : { result : tvResults } } = await tvApi.search(searchTerm);
            this.state({ 
                movieResults, 
                tvResults 
            });

        } catch {
            this.state({ error : "Can't find results." });

        } finally {
            this.state({ loading : false });

        }

    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return ( 
            <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading} 
                handleSubmit ={this.handleSubmit}
            />
        )
    }

}