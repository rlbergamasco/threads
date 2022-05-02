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
        const selectedTagIdsInCategory = selectedTags[category].map(tag => tag.id);

        if (selectedTagIdsInCategory.length === 0) {
            categoryStatuses[category] = true
            return
        }

        const containsAllSelectedTagsInCategory = selectedTagIdsInCategory
            .map(selectedTagId => {
                return item.tagIds.includes(selectedTagId);
            })
            .includes(true);

        if (item.tagIds.includes("01-type")) {
            console.log(selectedTagIdsInCategory)
            console.log(category, containsAllSelectedTagsInCategory);
        }

        categoryStatuses[category] = containsAllSelectedTagsInCategory;
    })

    // const isIncluded = Object.keys(categoryStatuses).every(category => categoryStatuses[category]);
    const isExcluded = Object.keys(categoryStatuses).map(cat => categoryStatuses[cat]).includes(false);

    // console.log(categoryStatuses)

    return !isExcluded
};