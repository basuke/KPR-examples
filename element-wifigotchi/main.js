import Pins from "pins";
import HTTPClient from "HTTPClient";

const faces = {
	smile: [
	neutral : [
	frown: [
}

request.onDataReady = response => { 
        console.log
    } else {


function randomFace(){
	const faceTypes = Object.keys(faces);
	const randomFaceIndex = Math.floor(Math.random() * faceTypes.length);
	const randomFaceKey = faceTypes[randomFaceIndex];
	return faces[randomFaceKey];
}

var main = {
				Pins.invoke("/display/start", {brightness: 0});
				setInterval(()=> {
					request.start();
				}, 750);
			} else {
