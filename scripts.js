//4th part

$('div').css('background', 'purple');
$('.fir.second').toggleClass('hidden');
$('p').html(<strong>hey</strong>);

$('p').append('another');
$('h1').remove();

$('button').click(() =>{
    // something happening
})



















//from1st part to 3rd
console.log("this is javascript");

let colors = ["orange", "blue", "green", "purple"];

let post = {
    title: "My Post",
    description: "My First Post",
    likeCount: 12,
    comments: ["cool", "I like it", "wow"]
};


console.log(colors);
console.log(post);

let age = 12;

if (age > 18){
    console.log("you're an adult");
} else {
    console.log("you're a kid"); 
}



for (let i = 0; i < 10; i + 2) {
    console.log(i);
    
}

let posts = [{
    title: "First post",
    likeCount: 12
},{
    title: "Second post",
    likeCount: 222
}];


colors.forEach(color => {
    console.log(color);
});


let myFunction = x => {
    console.log(x);
}

let greeter =  name => {
    console.log(`Hello ${name}`);
    if(name === Adam){
        console.log("you're an adult");
    }
}


greeter("Adam");
greeter("Reka")