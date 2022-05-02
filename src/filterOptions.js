const selectedTagLabelsToTags = (selectedTagLabels, allTags) => {
    const selectedTags = {};

    Object.keys(selectedTagLabels).forEach(category => {
        const labels = selectedTagLabels[category];

        const tags = labels.map((label) => {
            const tag = allTags.find((tag) => tag.category === category && tag.title === label);
            return tag
        })

        const tagsFiltered = tags.filter(x => x)

        selectedTags[category] = tagsFiltered
    })

    return selectedTags;
};

const sharedFilterLogic = (containedTagIds, selectedTagLabels, allTags) => {
    const selectedTags = selectedTagLabelsToTags(selectedTagLabels, allTags);

    const categoryStatuses = {};

    Object.keys(selectedTagLabels).forEach(category => {
        const selectedTagIdsInCategory = selectedTags[category].map(tag => tag.id);

        if (selectedTagIdsInCategory.length === 0) {
            categoryStatuses[category] = true
            return
        }

        const containsAllSelectedTagsInCategory = selectedTagIdsInCategory
            .map(selectedTagId => {
                return containedTagIds.includes(selectedTagId);
            })
            .includes(true);

        categoryStatuses[category] = containsAllSelectedTagsInCategory;
    })

    const isExcluded = Object.keys(categoryStatuses).map(cat => categoryStatuses[cat]).includes(false);

    return !isExcluded
}

export const closetFilterLogic = (item, selectedTagLabels, allTags) => {
    return sharedFilterLogic(item.tagIds, selectedTagLabels, allTags);
};

export const historyFilterLogic = (outfit, allClothingItems, selectedTagLabels, allTags) => {
    const tagIdsInOutfit = outfit.items
        .map(item => item.itemId)
        .map(id => allClothingItems.find(item => item.id === id))
        .reduce((currentTagIds, item) => currentTagIds.concat(item.tagIds), []);

    return sharedFilterLogic(tagIdsInOutfit, selectedTagLabels, allTags);
};