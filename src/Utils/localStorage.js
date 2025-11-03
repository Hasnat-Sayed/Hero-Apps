// get
export const loadInstalled = () => {
    try {
        const data = localStorage.getItem('installed')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

// save
export const updateInstalled = app => {
    const installList = loadInstalled()

    try {
        const isDuplicate = installList.some(p => p.id === app.id)
        if (isDuplicate) return
        const updatedList = [...installList, app]
        localStorage.setItem('installed', JSON.stringify(updatedList))
    } catch (err) {
        console.log(err)
    }
}

// delete
export const removeFromList = id => {
    const appList = loadInstalled()
    try {
        const updatedAppList = appList.filter(p => p.id !== id)
        localStorage.setItem('installed', JSON.stringify(updatedAppList))
    } catch (err) {
        console.log(err)
    }
}

export const matchingData = (app) => {
    try {
        const existData = loadInstalled();
        const dataMatch = existData.some((data) => data.id === app.id);
        return dataMatch;
    } catch (error) {
        console.log(`Data matching error: ${error}`);
        return false;
    }
};