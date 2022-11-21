function introduction(name){
    return(`Hi, my name is ${name}.`);
}

introduction("Aki");

// Define a function that uses two parameters
function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage("Aki", "Ember.js");

// Define a function that uses and optional parameter
function introductionWithLanguageOptional(name, language="JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional("Aki", "Ember.js");