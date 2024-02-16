let aToDoList = [{
    id : 1,
    task: "Finish this code",
    condition: false
},
{
    id : 2,
    task: "Solve world Hunger...then tell no one",
    condition: false
},
]
let globalId = 3;



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense.",
            "A feather in the hand is better than a bird in the air.",
            "A fresh start will put you on your way.",
            "A friend asks only for your time not your money.",
            "A friend is a present you give yourself."];

            //choose a random fortune 

            let randomIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randomIndex];
            

            res.status(200).send(randomFortune);

    },

    getAllTasks: (req, res) => {
        // send the whole array of tasks?
        console.log(aToDoList);
        res.status(200).send(aToDoList);
    },

    addTheTask: (req,res) => {
        //take the response and set it to a variable we can access
        const newTaskObj = req.body;

        //create new object to push to our list
        const newBodyObj = {
            id : globalId,
            task : newTaskObj.task,
            condition : false
        };

        // increment globalId for future additions
        globalId++;


        //push new object into array
        aToDoList.push(newBodyObj)
        console.log(aToDoList);

        res.status(200).send();
    },

    // delete from our list
    deleteTheTask: (req,res) => {
        let existingId = req.params.id;

        for (let i= 0; i < aToDoList.length; i++){
            if (aToDoList[i].id === parseInt(existingId)){
                aToDoList.splice(i, 1);
                res.status(200).send("Task has been deleted");
            }
        }
        res.status(400).send("Task not found");
    },
        

}