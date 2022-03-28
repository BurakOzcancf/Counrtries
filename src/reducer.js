export const reducer = (state, action) => {
    switch (action.type) { 
        case "all":
            return state = "";
        case "asia":
            return state = "asia";
        case "africa":
            return state = "africa";
        case "europe":
            return state = "europe";
        case "americas":
            return state = "americas";
        case "oceania":
            return state = "Oceania";
        case "polar":
            return state = "polar";
        case "Antarctic Ocean":
            return state = "Antarctic Ocean";
        default:
            return state   
    }    
}
