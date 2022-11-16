import Project from "./Projects";
import * as DOM from "./DOMUtils"


const currentProjects = [];
const newProject = new Project("test",1,2,3,4,5,6,7);

const newProjBtn = document.querySelector(".new");
newProjBtn.addEventListener("click",()=>{
    openOverlay()
})




export function createNewProject(project){
    console.log("overlay to type inputs");
    console.log(project);
}
