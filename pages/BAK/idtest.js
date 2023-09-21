
import Layout from '../components/layout';
import { getAllIds, getData, } from '../lib/data'; 
import React from 'react'; 


export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}


export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };

}



export default function Entrytest( { itemData } ) {
    return (
    <Layout>
      <article className="card col-6 offset-3">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href="#" className="card-link">{itemData.email}</a>
        </div>
      </article>
      <div className="container" style={{width: "100%", display: "flex", flexDirection: "row",}}>
        <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
          <h2>Physical Description</h2>
          {itemData.friends.map((friend) => (
            <article className="card col-6" key={friend.id}>
              <div className="card-body">
                <div class="row"> 
                <div class="col-6"> 
                <h5 className="card-title">Age:</h5>
                </div>
                <div class="col-3"> 
                <h5 className="card-title">{friend.age}</h5>
                </div>
                </div>
                
                
                <div class="row"> 
                <div class="col-6"> 
                <h6 className="card-title">Height:</h6>
               </div>
                <div class="col-3"> 
                <h6 className="card-title">{friend.height}</h6>
               </div>
              </div>
 

              <div class="row"> 
              <div class="col-6">
                <h6 className="card-title">Weight:</h6>
                </div>
                <div class="col-3">
                <h6 className="card-title">{friend.weight}</h6>
                </div>
                </div>
               
                <div class="row"> 
                <div class="col-6">
                <h6 className="card-title">Hundred Meter Dash:</h6>
                </div>
                <div class="col-3">
                <h6 href="#" className="card-link">{friend.hundredmdash}</h6>
                </div>
                </div>
                </div>
            </article>
          ))}
        </div>
        <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
          <h2>Favorite Things</h2>
          {itemData.family.map((familyMember) => (
            <article className="card col-6" key={familyMember.id}>
              <div className="card-body">
              <div class="row"> 
              <div class="col-6">
               <h6 className="card-title">Favorite Food:</h6>
                </div>
                <div class="col-3">
               <h6 className="card-title">{familyMember['favorite-food']}</h6>
                </div>
                </div>
                
                <div class="row"> 
                <div class="col-6">
                <h6 className="card-title">Favorite Place:</h6>
                </div>
              <div class="col-4">
                <h6 className="card-title">{familyMember['favorite-place']}</h6>
                </div>
                </div>
                

                <div class="row"> 
                <div class="col-6">
                <h6 className="card-title">Favorite Animal:</h6>
                </div>
                <div class="col-3">
                <h6 className="card-title">{familyMember['favorite-animal']}</h6>
                </div>
                </div>


                <div class="row"> 
                <div class="col-6">
                <h6 className="card-title">Favorite Hobby:</h6>
                </div>
                <div class="col-3">
                <h6 className="card-title">{familyMember['favorite-hobby']}</h6>
                </div>
                </div>


              </div>
            </article>
          ))}
        </div>
     
      </div>
    </Layout>
    )
          }
    