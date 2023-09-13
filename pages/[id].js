
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



export default function Entry( { itemData } ) {
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
          <h2>Friends</h2>
          {itemData.friends.map((friend) => (
            <article className="card col-6" key={friend.id}>
              <div className="card-body">
                <h5 className="card-title">{friend.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{friend.phone}</h6>
                <p className="card-text">{friend.birthdate}</p>
                <a href="#" className="card-link">{friend.email}</a>
              </div>
            </article>
          ))}
        </div>
        <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
          <h2>Family</h2>
          {itemData.family.map((familyMember) => (
            <article className="card col-6" key={familyMember.id}>
              <div className="card-body">
                <h5 className="card-title">{familyMember.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{familyMember.phone}</h6>
                <p className="card-text">{familyMember.birthdate}</p>
                <a href="#" className="card-link">{familyMember.email}</a>
              </div>
            </article>
          ))}
        </div>
     
      </div>
    </Layout>
    )
          }
    
    