// selectedTagLabels: {
//     ['Clothing Type']: ['shirt'],
//     Color: [],
//     Occasion: [],
//     Weather: [],
//     Other: [],
// }

// allTags: [
//     {
//         "id": "01-type",
//         "title": "pants",
//         "category": "Clothing Type"
//     }   
// ]

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

export const closetFilterLogic = (item, selectedTagLabels, allTags) => {
    const selectedTags = selectedTagLabelsToTags(selectedTagLabels, allTags);

    const categoryStatuses = {};

    Object.keys(selectedTagLabels).forEach(category => {
        const itemTagIds = category.tagIds;

        const containsAllSelectedTagsInCategory = selectedTags.every(tag => {
            return itemTagIds.includes(tag.id);
        })

        categoryStatuses[category] = containsAllSelectedTagsInCategory;
    })

    // const isIncluded = Object.keys(categoryStatuses).every(category => categoryStatuses[category]);
    const isIncluded = Object.keys(categoryStatuses).map(cat => categoryStatuses[cat]).includes(true);
    return isIncluded
};