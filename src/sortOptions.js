export const getOutfitsForItemId = (itemId, selectedOutfits) => {
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

const historyMostRecentlyWorn = (a, b, selectedOutfits) => {
    return (a.date < b.date) ? 1 : -1
}

const historyLeastRecentlyWorn = (a, b, selectedOutfits) => {
    return (a.date > b.date) ? 1 : -1
}

const historyMostWorn = (a, b, selectedOutfits) => {
    const outfitsWithSameIdAsA = selectedOutfits.filter((outfit) => outfit.id === a.id)
    const outfitsWithSameIdAsB = selectedOutfits.filter((outfit) => outfit.id === b.id)

    return (outfitsWithSameIdAsA.length < outfitsWithSameIdAsB.length) ? 1 : -1
}

const historyLeastWorn = (a, b, selectedOutfits) => {
    const outfitsWithSameIdAsA = selectedOutfits.filter((outfit) => outfit.id === a.id)
    const outfitsWithSameIdAsB = selectedOutfits.filter((outfit) => outfit.id === b.id)

    return (outfitsWithSameIdAsA.length > outfitsWithSameIdAsB.length) ? 1 : -1
}

export const historySortOptions = [
    {
        label: 'Most Recently Worn',
        func: historyMostRecentlyWorn
    },
    {
        label: 'Least Recently Worn',
        func: historyLeastRecentlyWorn
    },
    {
        label: 'Most Worn',
        func: historyMostWorn
    },
    {
        label: 'Least Worn',
        func: historyLeastWorn
    }
];
