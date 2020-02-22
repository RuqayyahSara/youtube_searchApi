
export default function (state = [], action) {
    if (action.type === "getYouTube") {
      return action.payload.data.items;
    }
    return state;   
}
