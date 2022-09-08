import React,{useState, useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import { DateTime } from "luxon";

const SearchBar = () => {
    
    const {inputSearch} = useParams();
    console.log(inputSearch);

    const [ searchValue ,setSearchValue] = useState([]);
    console.log("data from search",searchValue);

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=title&q=${inputSearch}&safeSearch=none&key=AIzaSyCAdv84hg9sERDkh6qtL5Vuk-c9bUlI02k`)
          .then(response => {
            console.log(response.data.items);
            setSearchValue(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
    },[])

  return (
    <div>
        {
            searchValue && searchValue?.length > 0 && searchValue.map((element)=>{
                console.log(element);

                const snippet = element.snippet;
                const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

                return(
                    <>
                    <div className='info'>
                        <img  className='videocard__image' src={snippet.thumbnails.medium.url} alt="#"/><br/>
                        <h6>{snippet.title}</h6>
                        {timestamp}  
                      </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default SearchBar