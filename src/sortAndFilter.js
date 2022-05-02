const getOutfitsForItemId = (itemId, selectedOutfits) => {
    const filtered = selectedOutfits.filter((outfit) => {
        let containsItem = outfit.items.map((x) => x.itemId).includes(itemId);
        return containsItem;
    })

    return [...filtered].sort((a, b) => { // sort in reverse chronological
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return (dateA > dateB) ? 1 : -1
    })
}

const closetAlphabetical = (a, b, selectedOutfits) => {
    return (a.name > b.name) ? 1 : -1;
}

const closetMostRecentlyWorn = (a, b, selectedOutfits) => {
    const outfitsWithA = getOutfitsForItemId(a.id, selectedOutfits);
    const outfitsWithB = getOutfitsForItemId(b.id, selectedOutfits);

    if (outfitsWithA.length === 0) {
        return 1
    } else if (outfitsWithB.length === 0) {
        return -1
    }

    return (outfitsWithA[0].date < outfitsWithB[0].date) ? 1 : -1
}

const closetLeastRecentlyWorn = (a, b, selectedOutfits) => {
    const outfitsWithA = getOutfitsForItemId(a.id, selectedOutfits);
    const outfitsWithB = getOutfitsForItemId(b.id, selectedOutfits);

    if (outfitsWithA.length === 0) {
        return 1
    } else if (outfitsWithB.length === 0) {
        return -1
    }

    return (outfitsWithA[0].date > outfitsWithB[0].date)
}

const closetMostWorn = (a, b, selectedOutfits) => {
    const outfitsWithA = getOutfitsForItemId(a.id, selectedOutfits);
    const outfitsWithB = getOutfitsForItemId(b.id, selectedOutfits);

    return (outfitsWithA.length < outfitsWithB.length) ? 1 : -1
}

const closetLeastWorn = (a, b, selectedOutfits) => {
    const outfitsWithA = getOutfitsForItemId(a.id, selectedOutfits);
    const outfitsWithB = getOutfitsForItemId(b.id, selectedOutfits);

    return (outfitsWithA.length > outfitsWithB.length) ? 1 : -1
}

const closetMostRecentlyAdded = (a, b, selectedOutfits) => {
    return (a.dateAdded < b.dateAdded) ? 1 : -1
}

const closetLeastRecentlyAdded = (a, b, selectedOutfits) => {
    return (a.dateAdded > b.dateAdded) ? 1 : -1
}

const closet = ['Alphabetical', 'Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];
const history = ['Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];

export const closetSortOptions = [
    {
        label: 'Alphabetical',
        func: closetAlphabetical
    },
    {
        label: 'Most Recently Worn',
        func: closetMostRecentlyWorn
    },
    {
        label: 'Least Recently Worn',
        func: closetLeastRecentlyWorn
    },
    {
        label: 'Most Worn',
        func: closetMostWorn
    },
    {
        label: 'Least Worn',
        func: closetLeastWorn
    },
    {
        label: 'Date Added: Most Recent',
        func: closetMostRecentlyAdded
    },
    {
        label: 'Date Added: Least Recent',
        func: closetLeastRecentlyAdded
    }
]

export const historySortOptions = [
    'Most Recently Worn',
    'Least Recently Worn',
    'Most Worn',
    'Least Worn',
    'Date Added: Most Recent',
    'Date Added: Least Recent'
];