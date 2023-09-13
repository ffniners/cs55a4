

import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getSortedList() {
  const peopleFilePath = path.join(dataDir, 'people.json');

  const peopleJsonString = fs.readFileSync(peopleFilePath, 'utf8');

  const peopleData = JSON.parse(peopleJsonString);

  const sortedPeople = peopleData.map((person) => ({
    id: person.id.toString(),
    name: person.name,
  }));

  return sortedPeople;
}

export function getAllIds() {
  const peopleFilePath = path.join(dataDir, 'people.json');
  const peopleJsonString = fs.readFileSync(peopleFilePath, 'utf8');
  const peopleData = JSON.parse(peopleJsonString);

  const paths = peopleData.map((person) => ({
    params: {
      id: person.id.toString(),
    },
  }));

  return paths;
}


export async function getData(idRequested) {
    const peopleFilePath = path.join(dataDir, 'people.json');
    const friendsFilePath = path.join(dataDir, 'friends.json');
    const familyFilePath = path.join(dataDir, 'family.json');
  
    const peopleJsonString = fs.readFileSync(peopleFilePath, 'utf8');
    const friendsJsonString = fs.readFileSync(friendsFilePath, 'utf8');
    const familyJsonString = fs.readFileSync(familyFilePath, 'utf8');
  
    const peopleData = JSON.parse(peopleJsonString);
    const friendsData = JSON.parse(friendsJsonString);
    const familyData = JSON.parse(familyJsonString);
  
    const personMatch = peopleData.find((person) => person.id.toString() === idRequested);
  

    const relatedFriends = friendsData.filter((friend) => friend.associated_id.toString() === idRequested);
    const relatedFamily = familyData.filter((familyMember) => familyMember.associated_id.toString() === idRequested);
  
    return {
      ...personMatch,
      friends: relatedFriends,
      family: relatedFamily,
    };
  }
