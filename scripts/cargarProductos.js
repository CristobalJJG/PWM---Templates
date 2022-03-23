import { showObjects } from "./showObjects";

const loadProduct = async function(route) {
    //$.getScript("/scripts/showObjects.js");
    await $.getJSON(route, function(json) {
        Object.entries(json.Productos).forEach((entry) => {
            const [key, p] = entry;
            console.log(p);
            showObjects(p);
        })
    })
}