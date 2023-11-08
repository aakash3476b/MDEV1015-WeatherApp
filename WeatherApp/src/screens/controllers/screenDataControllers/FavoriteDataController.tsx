import { getFavoriteData } from "../../models/screenDataModels/FavoriteDataModel"

const getFavoriteDataFromModel = () => {
    const data = getFavoriteData();
    return data;
}

export {getFavoriteDataFromModel};