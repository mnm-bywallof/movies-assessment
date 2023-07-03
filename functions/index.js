/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest, onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {} = require("firebase-functions/v2/firestore");

const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

const app = initializeApp();
const db = getFirestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getShows = onCall(async (data,context) =>{
    const showsData = {
        list:[]
    }
    const docs = (await db.collection("movies").get()).docs
    docs.forEach(async doc => {
        let d = doc.data();
        d['id'] = doc.id;
        var randomNumber = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        d['likes'] = randomNumber;
        showsData.list.push(d);
    });

    showsData.list.forEach(async(x)=>{
        x['watched'] = false;
        // x['likes'] = 0;
        const watched = (await db.collection("watched").where("movieID", "==", x.id).get()).docs;
        x['watched'] = watched.length != 0;
    });

    for(var i = 0; i < showsData.list.length; ++ i){
        // showsData.list[i].watched = false;
        // showsData.list[i].watched = (await db.collection("watched").where("movieID", "==", x.id).get()).docs.length > 0;
    }

    return showsData;
})

exports.getNext = onCall(async (data,context)=>{
    var movie = {
        output:true,
        item:null,
        message:null
    };
    const docs = (await db.collection("movies").get()).docs;
    docs.forEach(async doc => {
        const id = doc.id;
        let d = doc.data();
        d['watched'] = false;
        d.id = doc.id;
        const watches = (await db.collection("watched").where("id", "==", id).get()).docs;
        if(watches.length == 0) {
            movie.item = d;
        }
    })

    if(movie.item == null){
        var random = Math.floor((Math.random()*docs.length));
        movie.item = docs[random].data();
        movie.item['id'] = docs[random].id;
    }

    return movie;
});

exports.getMovies = onRequest(async(request, response)=>{
    var completeData = {
        date: new Date(),
        movies:[]
    }

    const docs = (await db.collection("movies").get()).docs;
    docs.forEach( doc => {
        const v = doc.data();
        v.id = doc.id;
        completeData.movies.push(v);
    });

    response.send(completeData);
})

exports.getMovie = onRequest(async (request, response)=>{
    var completeData = {
        date: new Date(),
        movie:null
    }

    if(request.query.id){
        const movie = await db.doc("movies/"+request.query.id).get();
        const movie_data = movie.data();
        movie_data['id'] = movie.id;
        completeData.movie = movie_data;
    }else{
        completeData['error'] = "Request missing ID"
    }

    response.send(completeData);
});

exports.getDevelopmentDetails = onRequest((request,response)=>{
    response.send({
        developer: 'Riaz Hlatshwayo',
        for: 'Games Global',
        description: 'Create a web application for tracking shows and movies users have watched.'
    })
});

exports.search = onCall(async(response)=>{
    var term = response.data.term;
    const results = {
        movies:[]
    }
    const docs = (await db.collection("movies").get()).docs;

    docs.forEach((doc)=>{
        var movie = doc.data();
        movie['id'] = doc.id;
        var title = movie.title.toLowerCase();

        if(title.includes(term.toLowerCase())){
            results.movies.push(movie);
        }
    });

    return results;
})

exports.watched = onCall( async (request)=>{
    const response = {}
    
    if(!request.auth){
        response['error'] = true;
        response['message'] = "No user found!";
    }else if(!request.data.id){
        response['error'] = true;
        response['message'] = "Missing Movie ID";
    }
    //if all the check marks are good
    else{
        const movieID = request.data.id;
        const userID = request.auth.uid;
        const movieDoc = (await db.doc("movies/"+movieID).get());
        const completeData = movieDoc.data();
        response['movieID'] = movieID;
        response['movie'] = completeData;

        //if the movie object does not contain the watched object then create a new array
        completeData['watched'] = completeData.watched || new Array();

        completeData['watched'].push(userID);
        await db.doc("movies/"+movieID).update({
            "watched": completeData['watched']
        }).then(()=>{
            response['watched'] = true;
        }).catch(()=>{
            response['watched'] = false;
        })
    }

    return response;
})

exports.getUserDetails = onCall(async(request)=>{
    const response = {
        uid:request.auth.uid,
        movies:[]
    }

    const uid = request.auth.uid;

    const list = (await db.collection("movies").where("watched","array-contains", uid).get()).docs

    list.forEach(movie => {
        var mov = movie.data();
        mov.id = movie.id;
        response.movies.push(mov);
    });
    
    return response;
})

exports.deleteMovie = onCall(async(request)=>{
    const response = {
        id: request.data.id,
        deleted: false
    };
    await db.doc("movies/"+request.data.id).delete().then((del)=>{
        response['deleted'] = true;
    }).catch((err)=>{
        response['deleted'] = false;
    })

    return response;
})