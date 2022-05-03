import { getOutfitsForItemId } from "sortOptions";

const getClothingTypeStats = (allItems, allOutfits, allTags) => {
    const clothingTypeTags = allTags.filter(tag => tag.category === 'Clothing Type')

    const clothingTypeStats = []

    clothingTypeTags.forEach(tag => {
        const label = tag.title;
        const itemsInfo = allItems
            .filter(item => item.tagIds.includes(tag.id))
            .map(item => {
                const timesWorn = getOutfitsForItemId(item.id, allOutfits).length
                return { item: item, timesWorn: timesWorn }
            });

        var mostWornItemInfo = { item: undefined, timesWorn: Number.MIN_SAFE_INTEGER };
        var leastWornItemInfo = { item: undefined, timesWorn: Number.MAX_SAFE_INTEGER };;

        itemsInfo.forEach(info => {
            if (info.timesWorn > mostWornItemInfo.timesWorn) {
                mostWornItemInfo = info
            }

            if (info.timesWorn < leastWornItemInfo.timesWorn) {
                leastWornItemInfo = info
            }
        })

        if (mostWornItemInfo.item === undefined || leastWornItemInfo.item === undefined) { return }

        clothingTypeStats.push({
            clothingType: label,
            mostWornInfo: mostWornItemInfo,
            leastWornInfo: leastWornItemInfo
        })
    })

    return clothingTypeStats
};

export const getHomepageStats = (allItems, allOutfits, allTags) => {
    const clothingTypeStats = getClothingTypeStats(allItems, allOutfits, allTags)

    return { clothingTypeStats: clothingTypeStats }
};