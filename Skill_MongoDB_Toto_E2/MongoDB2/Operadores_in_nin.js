db.students.find({hobbies:{ $in: "Lectura" }});

db.students.find({ hobbies: { $nin: ["Senderismo","Trotar", "Ciclismo"] } }).count();

db.students.find({ hobbies: { $nin: ["Lectura"] } }).count();

db.students.find({ hobbies: { $nin: ["Senderismo","Trotar", "Ciclismo"] } }).count();


db.students.find({ "gender": { $eq:"F"}, hobbies: { $nin: ["Senderismo","Trotar", "Ciclismo"] } }).count();

db.students.find({ "gender": {$eq: "M"}, hobbies: { $in: ["Música"]}  });


db.students.find({hobbies:{$not:{$in:["Cine","Pintura"]}}}).count();

//buscar las personas que hayan ganado mate con mas de 70pts
db.students.find({ 
    grades:{ $elemMatch:{   
        subject: "Matemáticas",
        grade: { $gt: 70 }
    }}
 }).count();


db.students.find({ 
    $or: [ { gender: "F" },
        { $in:
             [  "Ciclismo"  ] }
    ]
    }
).count();

// mostrar todos los docs donde la materia no sea igual a matematicas ni biologia

db.students.find({
    $or: [
        { "grades.subject": { $ne: "Matemáticas" } },
        { "grades.subject": { $ne: "Biología" } }
    ]
}).count();


db.students.find({
    hobbies: { $size: 4 }
}).count();


//  Mostrar todos los documentos donde sean hombres que vean Biologia y tengan 3 hobbies.

db.students.find({$and:[{gender:"M"},{"grades.subject": { $eq: "Biología" }},{hobbies:{$size:3}}]}).count();

db.students.find({$and:[{gender:"F"},{"grades.subject": { $eq: "Biología" }},{hobbies:{$size:0}}]}).count();



db.students.find({ hobbies: {$not: {$size:0}} }).count();

db.students.find({hobbies: {$all: ["Ciclismo", "Música"]}}).count();


// todos los hobbies que contengan musica y pintura y que una de las materias sea arte

db.students.find({ hobbies: {$all: ["Música", "Pintura"] }, "grades.subject": { $eq: "Arte" } } ).count();

// todos los documentos donde como hobbie contenga musica y pintura pero que de igual forma contenga arte

// todos los docs donde la materia sea arte y que el hobbie sea pintura o musica
db.students.find({ "grades.subject": { $eq: "Arte" }, hobbies: { $in: ["Música", "Pintura"] } }).count();


db.students.find({hobbies: { $exists: false }}).count();

//  buscar todos los documentos en donde no este ciclismo como hobbie pero que si este fisica como materia

db.students.find({ "grades.subject": { $eq: "Física" }, hobbies: { $nin: ["Ciclismo"] } }).count();



