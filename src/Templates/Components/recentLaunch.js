import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentLaunch = () => {
    const [Data, setData] = useState([]);
    const query = `
    {
        Page(perPage:12){
          pageInfo {
            total
            perPage
            
          }
          media(type: ANIME, sort: START_DATE_DESC, status:RELEASING,isAdult:false,) {
            id
            title {
              english
              native
              romaji
            }
            coverImage {
              extraLarge
              medium
            }
            description
            bannerImage
            episodes
            genres
            isAdult
            format
            averageScore
            startDate {
              year
              month
              day
            }
          }
        }
      }
      
`;
    // 
    let variables = {

    };
    useEffect(() => {
        axios.post('https://graphql.anilist.co', {
            query,
            variables
        }).then(res => {
            console.error(res.data.data.Page.media); setData(res.data.data.Page.media);
        }).catch(err => console.error(err));


    }, [])
if(Data==null){
    return<>Loading...</>
}

return (
    <>
      <div className="row row-cols-md-4">
        {Data.map((res) => (
          <div className="col-md-3" key={res.id}>
            <div className="card recentcard">
              <img className="card-img-top" src={res.coverImage.extraLarge} alt={res.title.english} />
              {res.episodes == null ? '' : <div className="button-container">
                <button className="btn btn-warning" disabled>Ep {res.episodes}</button>
              </div>}
              <div className="card-body">
                <h4 className="card-title">{res.title.romaji}</h4>
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
}
export default RecentLaunch;
