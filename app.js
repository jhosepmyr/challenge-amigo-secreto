// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// DOM Elements
const listFriendsContainer = document.querySelector('#listaAmigos');
const inputName = document.querySelector('#amigo');
const selectFriend = document.querySelector('#resultado');


// Variables
let friends = [];

// Functions

function addFriendToList(name){
    listFriendsContainer.innerHTML = '';
    friends.push(name);
    friends.forEach(friend => {
        listFriendsContainer.appendChild(generateFriend(friend));
    });
}

function generateFriend(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

function isValideName(name){
    let nameTrim = name.trim();
    return nameTrim.length > 0;
}

function resetInput(){
    inputName.value = '';
}

function generateRandomNumberBasedOnFriends(){
    return Math.floor(Math.random() * friends.length);
}

function isThereFriends(){
    return friends.length > 0;
}

// Event Listeners

function agregarAmigo(){
    let name = inputName.value;
    if(isValideName(name)){
        addFriendToList(name);
        resetInput();
    }else{
        alert('Ingrese un nombre válido');
    }
}

function sortearAmigo(){
    if(!isThereFriends()){
        alert('No hay amigos para sortear');
        return;
    }
    selectFriend.textContent = friends[generateRandomNumberBasedOnFriends()];
}