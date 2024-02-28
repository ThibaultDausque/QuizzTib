export interface questions {
    question: string;
    answers: string[],
    correctAnswer: string

};

export const quest: questions[] = [
    // question 1
    { question : "Quel acteur a interprété le rôle principal dans le film 'Forrest Gump' ?", answers: ["Tom Hanks", "Brad Pitt"], correctAnswer: "Tom Hanks"},
    // question 2
    { question : "Dans quel film apparaît le personnage de Dark Vador pour la première fois ?", answers: ["Star Wars: Episode IV - Un Nouvel Espoir", "Star Wars: Episode V - L'Empire contre-attaque"], correctAnswer: "Star Wars: Episode V - L'Empire contre-attaque"},
    // question 3
    { question : "Quel réalisateur a dirigé le film de science-fiction 'Inception' sorti en 2010 ?", answers: ["Christpher Nolan", "Thibault Dausque"], correctAnswer: "Thibault Dausque"},
    // question 4
    { question : "Quelle actrice a interprété le rôle principal dans 'La La Land' en 2016 ?", answers: ["Emma Stone", "Jennifer Lawrence"], correctAnswer: "Emma Stone"},
    // question 5
    { question : "Quel film a remporté le prix du meilleur film aux Oscars en 2020 ?", answers: ["Parasite", "1917"], correctAnswer: "Parasite"},
    // question 6
    { question : "Qui a réalisé le film d'animation 'Le Roi Lion' sorti en 1994 ?", answers: ["Ron Clements", "Roger Allers et Rob Minkoff"], correctAnswer: "Roger Allers et Rob Minkoff"},
    // question 7
    { question: "Quel acteur a joué le rôle de Tony Stark/Iron Man dans le Marvel Cinematic Universe ?", answers: ["Chris Evans", "Robert Downey Jr."], correctAnswer: "Robert Downey Jr."},
    // question 8
    { question: "Quel est le premier long métrage réalisé par Quentin Tarantino ?", answers: ["Pulp Fiction", "Reservoir Dogs"], correctAnswer: "Reservoir Dogs" },
    // question 9
    { question: "Quelle actrice a remporté l'Oscar de la meilleure actrice en 2019 pour son rôle dans 'La Forme de l'eau' ?", answers: ["Soirse Ronan", "Sally Hawkins"], correctAnswer: "Sally Hawkins"},
    // question 10
    { question: "Dans quel film trouve-t-on le personnage Jack Dawson, interprété par Leonardo DiCaprio ?", answers: ["Titanic", "Inception"], correctAnswer:"Titanic"}
];


export const movieQuizz = quest;
















