import React,{useEffect, useState} from 'react';

export default function Search(){
    const client_id = 'fo_d2ZObg4vr3eIpbsS6lq3agwiEw1GE7I_d_AMyRFc';
    const [image, setImage] = useState("");
    const [output, setOutput] = useState([]);
    
    const fetchResult = async () => {
        const d = await fetch(
            `https://api.unsplash.com/search/users?page=1&query=${image}&client_id=${client_id}&per_page=10`
            // `https://api.unsplash.com/search/users?client_id=${client_id}`
        )
        const data_json = await d.json();
        const resu = data_json.results;
        console.log(resu);
        setOutput(resu);
    }
    // useEffect(() => {
    //     fetchResult();
    // })
    function submit(e){
        e.preventDefault();
        fetchResult();
        setImage("");
    }

    return(
        <>
        <div className='search-div'>
            <input type="text" 
            placeholder="Search free high resolution Images" 
            value={image} 
            onChange={(e) => setImage(e.target.value)}/>
        
            <div>
                <button className='search-btn' onClick={(e) => submit(e)}>Search</button>
            </div>
        </div>
        <div className='result'>
            {output.map((pic) => {
                return (
                    <>
                    <img key={pic.id} src={pic.urls.small} alt={pic.alt_description}/>
                    </>
                )
            })}
        </div>
        </>
    )
}


//